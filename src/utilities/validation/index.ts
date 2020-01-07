
import { ValidationProvider, ValidationObserver, extend,validate } from 'vee-validate'
import * as validators from './validators'
import {max} from 'vee-validate/dist/rules';
extend('complex-password', validators.complexPassword)
extend('DECIMAL', validators.DECIMAL)
extend('max',{
    ...max,
    message: "Must not be greater than {length} characters"
})

extend('url',{
    message: `Not a valid URL`,
    validate: async (value):Promise<boolean> =>  (await validate(value,{
        regex: /^([a-z][a-z0-9\*\-\.]*):\/\/(?:(?:(?:[\w\.\-\+!$&'\(\)*\+,;=]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:(?:[a-z0-9\-\.]|%[0-9a-f]{2})+|(?:\[(?:[0-9a-f]{0,4}:)*(?:[0-9a-f]{0,4})\]))(?::[0-9]+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@!$'~*,;\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/
    })).valid
})
// extend('dateYYYYMMDD',validators.DateYYYYMMDD)

export declare type ProviderInstance = InstanceType<typeof ValidationProvider>
export declare type ObserverInstance = InstanceType<typeof ValidationObserver>
