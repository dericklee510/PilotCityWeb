import { UserCredentials} from '@/store/Auth/types'
import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from 'vuex-module-decorators'
import zxcvbn from 'zxcvbn'
import { passwordValidator } from './types'
import { REQ_PASSWORD_STRENGTH } from './const'
import { PASSWORD_PROCESSED } from './mutation-types'

@Module({ namespaced: true, name: 'signup' })
export default class Signup extends VuexModule {
    public passwordInfo: passwordValidator = {} as passwordValidator
    public get isPasswordComplex():boolean {
        return this.passwordInfo.score >= REQ_PASSWORD_STRENGTH
    }
    public get getPassword(): string {
        return this.passwordInfo.password
    }
    @Mutation
    private [PASSWORD_PROCESSED](validator: passwordValidator):void {
        this.passwordInfo = validator
    }
    @Action({ commit: PASSWORD_PROCESSED })
    public processPassword(password: string): passwordValidator {
        let validator = zxcvbn(password) as passwordValidator
        validator.password = password
        return validator
    }

    @Action({ rawError: true })
    public async process({email, password}: UserCredentials): Promise<void> {
        if (!this.isPasswordComplex)
            throw ("Password is too weak")
        else{
            await this.context.dispatch('Auth/createAccount',{
                email,
                password
            },{
                root:true
            })
        }
    }
}