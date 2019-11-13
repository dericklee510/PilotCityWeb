
import * as validators from "./validators"
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate'

extend('complex-password',validators.complexPassword)
extend('DECIMAL', validators.DECIMAL)
// extend('dateYYYYMMDD',validators.DateYYYYMMDD)

export declare type ProviderInstance = InstanceType<typeof ValidationProvider>
export declare type ObserverInstance = InstanceType<typeof ValidationObserver>
export default ValidationProvider