import Login from '@/views/Login/store'
import {
    Module,
    VuexModule,
    Mutation,
    Action
} from 'vuex-module-decorators'
import * as firebase from "firebase/app"

import "firebase/auth"

import { User } from 'firebase'
import { UserCredentials } from './types'
import { SET_USER, NEW_AUTH_RESPONSE } from './mutation-types'


@Module({ namespaced: true, name: 'Auth' })
export default class Auth extends VuexModule {
    public user: User | null = null
    public authResponse: string = ""

    @Mutation
    private [SET_USER](userDoc: User | null): void {
        this.user = userDoc
    }

    @Mutation
    private [NEW_AUTH_RESPONSE](message: string): void {
        this.authResponse = message
    }

    @Action
    public async createAccount({ email, password }: UserCredentials): Promise<void> {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            this.context.commit(NEW_AUTH_RESPONSE, "Account creation succesful, email verification sent")
        }
        catch (err) {
            this.context.commit(NEW_AUTH_RESPONSE, err.message)
        }
    }

    @Action
    public async login({ email, password }: UserCredentials): Promise<void> {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch (err) {
            this.context.commit(NEW_AUTH_RESPONSE, err)
        }
    }
}
export const AuthModule = {
    Auth,
    login: Login,
}