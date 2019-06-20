import {
    Module,
    VuexModule,
    Mutation,
    Action
} from 'vuex-module-decorators'
import * as firebase from "firebase/app"

import "firebase/auth"

import { User } from 'firebase'
import { User_Credentials as userCredentials } from './types'
import { SET_USER, NEW_AUTH_RESPONSE } from './mutation-types'

@Module({ namespaced: true, name: 'auth' })
export default class Auth extends VuexModule {
    user: User | null = null
    auth_response: string = ""

    @Mutation
    [SET_USER](userDoc: User | null): void {
        this.user = userDoc
    }

    @Mutation
    [NEW_AUTH_RESPONSE](message: string): void {
        this.auth_response = message
    }

    @Action
    async createAccount({ email, password }: userCredentials): Promise<void> {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (err) {
            this.context.commit(NEW_AUTH_RESPONSE, err)
        }
    }

    @Action
    async login({ email, password }: userCredentials): Promise<void> {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch (err) {
            this.context.commit(NEW_AUTH_RESPONSE, err)
        }
    }
}