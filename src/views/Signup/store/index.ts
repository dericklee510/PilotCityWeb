import { 
    Module, 
    VuexModule, 
    Mutation, 
    Action 
} from 'vuex-module-decorators'
import zxcvbn from 'zxcvbn'
import { password_validator } from './types'
import { REQ_PASSWORD_STRENGTH } from './const'
import { PASSWORD_PROCESSED } from './mutation-types'

@Module({ namespaced: true, name: 'signup' })
export default class signup extends VuexModule {
    password_info: password_validator = <password_validator>{}
    @Mutation
    [PASSWORD_PROCESSED](validator: password_validator) {
        this.password_info = validator
    }
    @Action({ commit: 'set_password_result' })
    processPassword(password: string): password_validator {
        let validator = <password_validator>zxcvbn(password)
        validator.password = password
        return validator
    }
    @Action
    async process(email: string): Promise<void> {
        if (this.password_info.score < REQ_PASSWORD_STRENGTH)
            throw ("Password is too weak")
        else
            await this.context.dispatch('Auth/createAccount', email)
    }
}