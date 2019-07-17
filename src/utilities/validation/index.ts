
import * as validators from "./validators"
import VeeValidate from 'vee-validate'

VeeValidate.Validator.extend('complex-password',validators.complexPassword)
export default VeeValidate