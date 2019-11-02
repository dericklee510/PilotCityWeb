
import * as validators from "./validators"
import {ValidationProvider, extend} from 'vee-validate'

extend('complex-password',validators.complexPassword)
extend('DECIMAL', validators.DECIMAL)

export default ValidationProvider