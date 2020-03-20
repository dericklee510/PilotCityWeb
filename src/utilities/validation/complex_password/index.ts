import { ValidationRule } from 'vee-validate/dist/types/types'
import zxcvbn from 'zxcvbn'
import { REQ_PASSWORD_STRENGTH, passwordStrength } from './const'


export const complexPassword: ValidationRule = {
    message: (value): string => {
        let passwordInfo = zxcvbn(value)
        return `Password strength is ${passwordStrength[zxcvbn(value).score]}. ${passwordInfo.feedback.suggestions}`
    },
    validate: (value): boolean =>
        // console.log(zxcvbn(value).score,REQ_PASSWORD_STRENGTH)
        zxcvbn(value).score >= REQ_PASSWORD_STRENGTH

}
