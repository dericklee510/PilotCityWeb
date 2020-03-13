import { FirebaseError } from 'firebase'
import { hasKey } from '@/utilities/object'
import { AuthStore } from '@/store'
import {
    SignupResp,
    LoginResp,
    DEFAULT_RESPONSE,
    PasswordResetResp
} from './const'

export function customSignupResponse(error: FirebaseError): string {
  if (hasKey(SignupResp, error.code)) return (SignupResp[error.code] === DEFAULT_RESPONSE) ? error.message : SignupResp[error.code]
  return error.message
}
export function customLoginResponse(error: FirebaseError): string {
    if (hasKey(LoginResp, error.code)) return (LoginResp[error.code] === DEFAULT_RESPONSE) ? error.message : LoginResp[error.code]
  return error.message
}
export function customResetPasswordResponse(error: FirebaseError): string {
  if (hasKey(PasswordResetResp, error.code)) return (PasswordResetResp[error.code] === DEFAULT_RESPONSE) ? error.message : PasswordResetResp[error.code]
  return error.message
}
export function getCitizenType(): string {
  return localStorage.citizenType && AuthStore.user ? localStorage.citizenType : ''; 
}
