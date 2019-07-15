import { SignupResp, LoginResp, DEFAULT_RESPONSE} from './const'
import { FirebaseError } from 'firebase'
import { hasKey } from '@/utilities/object'

export function customSignupResponse(error: FirebaseError): string{
    if(hasKey(SignupResp,error.code))
        return (SignupResp[error.code] === DEFAULT_RESPONSE)?error.message:SignupResp[error.code]
    else 
        return error.message
}
export function customLoginResponse(error: FirebaseError): string {
    
    if(hasKey(LoginResp,error.code))
        return (LoginResp[error.code] === DEFAULT_RESPONSE)?error.message:LoginResp[error.code]
    else 
        return error.message
}