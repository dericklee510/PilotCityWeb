import { ValidationRule } from 'vee-validate/dist/types/types'
import { countDigits, countDecimals } from '../helpers'

interface Parameters{
    totalDigits: bigint;
    decimalDigits: bigint;
}

export const DECIMAL: ValidationRule = {
/**
 * Passes validation for Decimal if digits of value <= max digits and decimal digits <= max decimal digits
 * Type conversion must be handled on backend
 * @param {*} value
 * @param {*} args
 * @returns {boolean}
 */
    validate: (value, args): boolean => {
    /* eslint-disable-next-line */
        var {totalDigits, decimalDigits} = <Parameters>args
        return totalDigits >= countDigits(value) && decimalDigits >= countDecimals(value)
    }

}
