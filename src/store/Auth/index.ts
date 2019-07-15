import { SUCCESSFUL_SIGNUP_RESP, SUCCESSFUL_LOGIN_RESP } from './const'

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
import { customSignupResponse, customLoginResponse } from './helpers'


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
    public async createAccount({ email, password }: UserCredentials): Promise<string> {
        try {
            let userResponse = await firebase.auth().createUserWithEmailAndPassword(email, password)
            this.context.commit(SET_USER,userResponse)
            return SUCCESSFUL_SIGNUP_RESP
        }
        catch (err) {
            return customSignupResponse(err)
        }
    }

    @Action
    public async login({ email, password }: UserCredentials): Promise<string> {
        try {
            this.context.commit(SET_USER,await firebase.auth().signInWithEmailAndPassword(email, password))
            return SUCCESSFUL_LOGIN_RESP
        }
        catch (err) {
            return customLoginResponse(err)
        }
    }
}
export const AuthModule = {
    Auth
}