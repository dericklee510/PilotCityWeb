import { ValidationRule } from 'vee-validate/dist/types/types'
import { validate, extend } from 'vee-validate'
import { between } from 'vee-validate/dist/rules'

extend('between', between)

export const smallint: ValidationRule = {
    validate: async (value): Promise<boolean> => (await validate(value, `between:${Math.pow(-2, 15)},${Math.pow(2, 15)}`)).valid
}
