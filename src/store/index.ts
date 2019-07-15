import Vue from "vue"
import Vuex from "vuex"
import { AuthModule } from "./Auth"
import { getModule } from 'vuex-module-decorators'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        ...AuthModule
    }
})
export default store
export const AuthStore = getModule(AuthModule.Auth, store)
