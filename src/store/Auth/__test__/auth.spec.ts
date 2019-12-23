import * as signupTests from './authstore/signup_test'
import * as loginTests from './authstore/login_tests'
import * as resp from '../const'

describe('Auth store', (): void => {
    describe('How to create an account', (): void => {
        it('Saves the user to the store if successful', signupTests.createAccount)
        it(`Returns the default message if the encoded signup response is === ${resp.DEFAULT_RESPONSE}`, signupTests.handleCreateAccErr)
    })
    describe('How to login', (): void => {
        it('Saves user to the store if successful', loginTests.successfulLogin)
        it('saves the user as null if unsuccessful', loginTests.failedLogin)
    })
})
