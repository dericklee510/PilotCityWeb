import  firestore  from '@/firebase/init';
import {
  Module,
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
import * as firebase from 'firebase/app'
import {
    SUCCESSFUL_SIGNUP_RESP,
    SUCCESSFUL_LOGIN_RESP,
    SUCCESFUL_RESETPASS_RESP,
    SUCCESSFUL_RESETEMAIL_RESP,
    EMAIL_NOT_VERIFIED_ERR
} from './const'

import 'firebase/auth'
import { User as FirebaseUser } from 'firebase'
import { UserCredentials } from './types'
import { SET_USER, NEW_AUTH_RESPONSE } from './mutation-types'
import {
    customSignupResponse,
    customLoginResponse,
    customResetPasswordResponse
} from './helpers'
import { lowerCase } from 'lodash'
@Module({ namespaced: true, name: 'Auth' })
export default class Auth extends VuexModule {
    public user: FirebaseUser | null = null

    public authResponse: string = ''

    get getUser() {
        return this.user;
    }

    @Mutation
    private [SET_USER](userDoc: FirebaseUser | null): void {
        this.user = userDoc
    }

    @Mutation
    private [NEW_AUTH_RESPONSE](message: string): void {
        this.authResponse = message
    }

    @Action
    public async sendPassReset(email: string): Promise<string> {
        try {
            await firebase.auth().sendPasswordResetEmail(email)
            return SUCCESSFUL_RESETEMAIL_RESP
        } catch (err) {
            const error = err as firebase.auth.Error
            return error.message
        }
    }

    @Action
    public async resetPassword(hash: string, newpass: string): Promise<string> {
        try {
            await firebase.auth().confirmPasswordReset(hash, newpass)
            return SUCCESFUL_RESETPASS_RESP
        } catch (err) {
            return customResetPasswordResponse(err)
        }
    }

    @Action({rawError:true})
    public async createAccount(credentials: { email: string; password: string; firstName: string; lastName: string }): Promise<string> {
        let {
        email, password, firstName, lastName
        } = credentials
        try {
            let userResponse = await firebase.auth().createUserWithEmailAndPassword(email, password)
            this[SET_USER](userResponse.user)
            if (this.user) {
                await this.user.updateProfile({
                    displayName: `${lowerCase(firstName)} ${lowerCase(lastName)}`
                })
                localStorage.first_name = firstName
                localStorage.last_name = lastName
                await firestore.collection("GeneralUser").doc(this.user.uid).set({
                    userId:this.user.uid,
                    classroomIds:[],
                    employerProgramIds:[],
                    teacherProgramDataIds:{},
                    projectIds:[],
                    initializeProgram:{},
                    firstName,
                    lastName,
                    lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
                })
                await this.user.sendEmailVerification();
                await this.logout()
            }
            return SUCCESSFUL_SIGNUP_RESP
        } catch (err) {
            return customSignupResponse(err)
        }
    }
    /* eslint-disable */
    @Action
    public async login({ email, password }: UserCredentials): Promise<string> {
        try{
            let resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            this.context.commit(SET_USER, resp.user);
            if (this.user && !this.user.emailVerified) {
                this.user.sendEmailVerification()
                throw (EMAIL_NOT_VERIFIED_ERR)
            }
            // eslint-disable-next-line no-console 
            console.info(" %c Successfully logged in!", [
                'background: green',
                'color: white',
                'display: block',
                'text-align: center'
            ].join(';'))
            return SUCCESSFUL_LOGIN_RESP
        }
        catch(err){
            this.logout() // put this back after error is fixed
            return (err)
        }
    }
    /* eslint-enable */
    @Action
    public async logout(): Promise<void> {
        return firebase.auth().signOut()
    }
}
