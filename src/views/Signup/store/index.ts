import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
} from 'vuex-module-decorators'
import store from "@/store"
import zxcvbn from 'zxcvbn'
import { passwordValidator } from './types'
import { REQ_PASSWORD_STRENGTH } from './const'
import { PASSWORD_PROCESSED } from './mutation-types'


@Module({ namespaced: true, name: 'signup' })
export default class Signup extends VuexModule {
    public password_info: passwordValidator = <passwordValidator>{}
    public get isPasswordComplex() {
        return this.password_info.score >= REQ_PASSWORD_STRENGTH
    }
    @Mutation
    private [PASSWORD_PROCESSED](validator: passwordValidator) {
        this.password_info = validator
    }
    @Action({ commit: PASSWORD_PROCESSED, })
    public processPassword(password: string): passwordValidator {
        let validator = <passwordValidator>zxcvbn(password)
        validator.password = password
        console.log(password)
        return validator
    }
    @Action
    public async process(email: string, password:string): Promise<void> {
        if (this.isPasswordComplex)
            throw ("Password is too weak")
        else
            await this.context.dispatch('Auth/createAccount', {email, password})
    }
}