import { firebaseApp } from '@/firebase/init';
import { SUCCESSFUL_SIGNUP_RESP } from './../const'
import { AuthStore } from '@/store'
import { User } from 'firebase'

import * as resp from "../const"
jest.mock("@/firebase/init")
jest.mock('../const')
import { FirebaseError } from 'firebase'
const auth = firebaseApp.auth()
const const_mock = {EMAIL_IN_USE_ERR :"Custom email message"}
describe("Auth store", (): void => {
    describe("How to create an account", (): void => {
        it("Saves the user to the store if successful", async (): Promise<void> => {
            auth.createUserWithEmailAndPassword = jest.fn().mockResolvedValue({} as User)
            expect(await AuthStore.createAccount({
                email: "test",
                password: "test"
            })).toBe(SUCCESSFUL_SIGNUP_RESP)
            expect(AuthStore.user).toBeTruthy
        })
        describe("Signup Response changes based on error codes", () => {
            it(`Returns the default message if the encoded signup response is === ${resp.DEFAULT_RESPONSE}`,async () => {
                auth.createUserWithEmailAndPassword = jest.fn().mockImplementation(async () => {
                    throw { code: "auth/email-already-in-use", message: "This is the default firebase email error response" } as FirebaseError
                })
                expect(await AuthStore.createAccount({
                    email: "test",
                    password: "test"
                })).toBe("This is the default firebase email error response")
                expect(AuthStore.user).toBeFalsy
            })
        })
        
    })
    describe("How to login",() => {
        it("Saves user to the store if successful", async () => {
            auth.signInWithEmailAndPassword = jest.fn().mockResolvedValue({} as User)
            expect(await AuthStore.login({email:"test",password:"test"})).toBe(resp.SUCCESSFUL_LOGIN_RESP)
            expect(AuthStore.user).toBeTruthy
        })
        it("The user store is null if an error occurs", async () => {
            auth.signInWithEmailAndPassword = jest.fn().mockImplementation(async () => {
                throw {code:`auth/wrong-password`, message:"Default wrong password"}
            })
            expect(await AuthStore.login({email:'test',password:'test'}) ).toBe("Default wrong password")
            expect(AuthStore.user).toBeFalsy
        })
    })
}) 