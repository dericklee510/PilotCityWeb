import { ValidationRule } from 'vee-validate/dist/types/types'
import { FbStore } from '@/store'
import { GeneralUser } from '@/store/Database/types/types'
import {
    PhoneNumberFormat as PNF,
    PhoneNumberUtil,
    PhoneNumber
} from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance();

function parseUSphoneE164(phoneNumber: string){
    let number: PhoneNumber;
    try{
        number = phoneUtil.parse(phoneNumber, "US");
    } catch(err) {
        return null;
    }
    if (phoneUtil.isValidNumberForRegion(number, "US"))
        return phoneUtil.format(number, PNF.E164);
    else return null;
}

export const phone: ValidationRule = {
    message:'Your phone number has not yet been verified',
    validate:  async (value):Promise<boolean> => {
        let doc:GeneralUser = (await FbStore.firestore.collection("GeneralUser").doc(FbStore.FBUser?.uid).get()).data()
        if(doc.phoneNumber == `${parseUSphoneE164(value)}`) return true
        else return false
    },
}