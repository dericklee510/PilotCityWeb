import { ValidationRule } from 'vee-validate/dist/types/types'
import { validate, extend } from 'vee-validate'
import { between } from 'vee-validate/dist/rules'

extend('between', between)
interface paramaters{
    bits: BigInt;
}

export const Int: ValidationRule = {
/**
 * Validation for a N bit integer
 * @param {*} value
 * @param {*} args = {bits}
 * @returns {boolean}
 */
    validate: async (value, args): Promise<boolean> => {
        var { bits } = <paramaters>args
        return (await validate(value, `between:${0},${Math.pow(2, Number(bits)) - 1}`)).valid
    }
}
