
// Signup error responses
export const SUCCESSFUL_SIGNUP_RESP = 'Account creation successful, email verification sent'
export const SUCCESSFUL_LOGIN_RESP = 'Login Successful' // Won't usually show up
export const DEFAULT_RESPONSE = 'defaultResponse' // Don't Modify
export const SUCCESFUL_RESETPASS_RESP = 'Password successfully changed!'
export const SUCCESSFUL_RESETEMAIL_RESP = 'Email sent successfully!'
// Login error responses
export const EMAIL_IN_USE_ERR = `${DEFAULT_RESPONSE}`
export const OPERATION_NOT_ALLOWED_ERR = `${DEFAULT_RESPONSE}`
export const INVALID_EMAIL_ERR = `${DEFAULT_RESPONSE}`
export const WEAK_PASSWORD_ERR = 'Password too weak'
export const EMAIL_NOT_VERIFIED_ERR = 'Email not verified, please check your inbox'
// Password reset error responses
export const RESET_CODE_EXPIRED_ERR = 'Password reset code is expired'
export const RESET_CODE_INVALID_ERR = 'Password reset code is invalid'
export const ACCOUNT_DISABLED_ERR = 'Account disabled'
export const USER_NOT_FOUNT_ERR = 'User not found'

export const SignupResp = {
    ['auth/email-already-in-use']: EMAIL_IN_USE_ERR, // modify DEFAULT_RESPONSE for custom response
    ['auth/operation-not-allowed']: OPERATION_NOT_ALLOWED_ERR,
    ['auth/invalid-email']: INVALID_EMAIL_ERR,
    ['auth/weak-password']: WEAK_PASSWORD_ERR
}
export const LoginResp = {
    ['auth/invalid-email']: `${DEFAULT_RESPONSE}`,
    ['auth/user-disabled']: `${DEFAULT_RESPONSE}`,
    ['auth/user-not-found']: 'That username and password does not match our records',
    ['auth/wrong-password']: `${DEFAULT_RESPONSE}`
}
export const PasswordResetResp = {
    ['auth/expired-action-code']: RESET_CODE_EXPIRED_ERR,
    ['auth/invalid-action-code']: RESET_CODE_INVALID_ERR,
    ['auth/user-disabled']: ACCOUNT_DISABLED_ERR,
    ['auth/user-not-found']: USER_NOT_FOUNT_ERR,
    ['auth/weak-password']: WEAK_PASSWORD_ERR
}
