
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as validators from './validators'
import {max} from 'vee-validate/dist/rules';
extend('complex-password', validators.complexPassword)
extend('DECIMAL', validators.DECIMAL)
extend('max',{
    ...max,
    message: "Must not be greater than {length} characters"
})
// extend('dateYYYYMMDD',validators.DateYYYYMMDD)

export declare type ProviderInstance = InstanceType<typeof ValidationProvider>
export declare type ObserverInstance = InstanceType<typeof ValidationObserver>
