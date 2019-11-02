import { ValidationRule } from 'vee-validate/dist/types/types'
import { countDigits, countDecimals } from '../helpers'
interface paramaters{
    total_digits:bigint,
    decimal_digits:bigint
}

export const DECIMAL: ValidationRule= {
/**
 * Passes validation for Decimal if digits of value <= max digits and decimal digits <= max decimal digits
 * Type conversion must be handled on backend
 * @param {*} value
 * @param {*} args
 * @returns {boolean}
 */
validate:(value, args ): boolean => {
        var {total_digits,decimal_digits} = <paramaters>args
        return total_digits >= countDigits(value) && decimal_digits >= countDecimals(value)
    }

}

