export const SUCCESSFUL_SIGNUP_RESP = `Account creation successful, email verification sent`
export const SUCCESSFUL_LOGIN_RESP = `Login Successful` // Won't usually show up
export const DEFAULT_RESPONSE = "defaultResponse" // Don't Modify

export const EMAIL_IN_USE_ERR = `${DEFAULT_RESPONSE}`
export const OPERATION_NOT_ALLOWED_ERR = `${DEFAULT_RESPONSE}`
export const INVALID_EMAIL_ERR = `${DEFAULT_RESPONSE}`
export const WEAK_PASSWORD_ERR = `${DEFAULT_RESPONSE}`

export const SignupResp = { 
    [`auth/email-already-in-use`] : EMAIL_IN_USE_ERR , //modify DEFAULT_RESPONSE for custom response
    [`auth/operation-not-allowed`] : OPERATION_NOT_ALLOWED_ERR,
    [`auth/invalid-email`] : INVALID_EMAIL_ERR,
    [`auth/weak-password`] : WEAK_PASSWORD_ERR
}
export const LoginResp = {
    [`auth/invalid-email`]: `${DEFAULT_RESPONSE}`,
    [`auth/user-disabled`]: `${DEFAULT_RESPONSE}`,
    [`auth/user-not-found`]: `${DEFAULT_RESPONSE}`,
    [`auth/wrong-password`]: `${DEFAULT_RESPONSE}`
}
