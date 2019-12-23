import { ValidationRule } from 'vee-validate/dist/types/types'
import { validate, extend } from 'vee-validate'
import { regex } from 'vee-validate/dist/rules'

extend('regex', regex)

export const Date: ValidationRule = {
/**
 * Validation for dates of formate YYYY-MM-DD
 * @param {*} value
 * @returns {boolean}
 */
    validate: async (value, args): Promise<boolean> => (await validate(value, 'regex:/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/g')).valid
}
