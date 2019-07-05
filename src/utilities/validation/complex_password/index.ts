import { REQ_PASSWORD_STRENGTH, passwordStrength } from './const';
import zxcvbn from "zxcvbn"
import { Rule, RuleValidate } from 'vee-validate';


export const complexPassword: Rule | RuleValidate = {
    getMessage: (value): string => {
        let passwordInfo = zxcvbn(value)
        return `Password strength is ${passwordStrength[zxcvbn(value).score]}. ${passwordInfo.feedback.suggestions}`
    },
    validate: (value): boolean => {
        // console.log(zxcvbn(value).score,REQ_PASSWORD_STRENGTH)
        return zxcvbn(value).score >= REQ_PASSWORD_STRENGTH
    }
}



