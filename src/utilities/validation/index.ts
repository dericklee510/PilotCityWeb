
import { ValidationProvider, ValidationObserver, extend,validate } from 'vee-validate'
import * as validators from './validators'
import {max,min,numeric} from 'vee-validate/dist/rules';
extend('complex-password', validators.complexPassword)
extend('DECIMAL', validators.DECIMAL)
extend('verifyPhone', validators.phone)
extend('max',{
    ...max,
    message: "Must not be greater than {length} characters"
})
extend('daterange',{
    message:'Two dates must be selected',
    validate: async (value:string):Promise<boolean> => ((value.search(' - ') == -1)?false:true)
})
extend('url',{
    message: `Not a valid URL`,
    validate: async (value):Promise<boolean> =>  (await validate(value,{
        regex: /^([a-z][a-z0-9\*\-\.]*):\/\/(?:(?:(?:[\w\.\-\+!$&'\(\)*\+,;=]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:(?:[a-z0-9\-\.]|%[0-9a-f]{2})+|(?:\[(?:[0-9a-f]{0,4}:)*(?:[0-9a-f]{0,4})\]))(?::[0-9]+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@!$'~*,;\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/
    })).valid
})
extend('min',{
    ...min,
    message:"Must be a minimum of {length} characters"
})
extend('numeric',{
    ...numeric,
    message:"Input must consist of numbers only"
})
// extend('dateYYYYMMDD',validators.DateYYYYMMDD)
export {ValidationObserver, ValidationProvider, validate}
export declare type ProviderInstance = InstanceType<typeof ValidationProvider>
export declare type ObserverInstance = InstanceType<typeof ValidationObserver>
