import { firebaseApp } from '@/firebase/init'
import { AuthStore } from '@/store'

import * as resp from '../../const'

jest.mock('@/firebase/init')

export const createAccount = async (): Promise<void> => {
    firebaseApp.auth().createUserWithEmailAndPassword = jest.fn().mockResolvedValue({})
    expect(await AuthStore.createAccount({
        email: 'test',
        password: 'test',
        firstName: 'test',
        lastName: 'test'
    })).toBe(resp.SUCCESSFUL_SIGNUP_RESP)
    expect(AuthStore.user).toBeTruthy
}

export const handleCreateAccErr = async (): Promise<void> => {
    firebaseApp.auth().createUserWithEmailAndPassword = jest.fn().mockImplementation(async (): Promise<void> => {
        throw {
            code: 'auth/email-already-in-use',
            message: 'This is the default firebase email error response'
        }
    })
    expect(await AuthStore.createAccount({
        email: 'test',
        password: 'test',
        firstName: 'test',
        lastName: 'test'
    })).toBe('This is the default firebase email error response')
    expect(AuthStore.user).toBeFalsy
}
