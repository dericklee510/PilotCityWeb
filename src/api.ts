// import { REAL_DB_KEY } from '@/keys';
import axios from "axios"
import firebase from "firebase"

export const isLinkValid = async (link: string) => {
    return (await axios.get<boolean>(process.env.VUE_APP_VERIFY_LINK_REST + link)).data
}

export const  isValidSMS = async (code: {to: string, code: string}) => {
    var validateCode = firebase.functions().httpsCallable('verifySMSCheck')
    return (await validateCode(code)).data
}

export const SMSsendCode = async (phone: { to: string} ) => {
    var sendCode = firebase.functions().httpsCallable('verifySMSSendCode')
    return (await sendCode(phone)).data
}
