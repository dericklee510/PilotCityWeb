import { extend, ValidationProvider } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: 'This field is required'
})
extend('email', {
    ...email,
    message: 'This is not a valid email'
})
extend('confirmed', {
    ...confirmed,
    message: 'Passwords do not match'
})
export { ValidationProvider }
