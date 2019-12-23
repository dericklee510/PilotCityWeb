import { firebaseApp } from '@/firebase/init'
import { AuthStore } from '@/store'

import * as resp from '../../const'

jest.mock('@/firebase/init')

export const successfulLogin = async (): Promise<void> => {
    firebaseApp.auth().signInWithEmailAndPassword = jest.fn().mockResolvedValue({})
    expect(await AuthStore.login({
        email: 'test',
        password: 'test'
    })).toBe(resp.SUCCESSFUL_LOGIN_RESP)
    expect(AuthStore.user).toBeTruthy
}
export const failedLogin = async (): Promise<void> => {
    firebaseApp.auth().signInWithEmailAndPassword = jest.fn().mockImplementation(async (): Promise<void> => {
        throw {
            code: 'auth/wrong-password',
            message: 'Default wrong password'
        }
    })
    expect(await AuthStore.login({
        email: 'test',
        password: 'test'
    })).toBe('Default wrong password')
    expect(AuthStore.user).toBeFalsy
}
