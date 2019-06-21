import Vue from "vue"
import { RootState } from "./types"
import Vuex, { StoreOptions } from "vuex"
import login from "@/views/Login/store"
import signup from "@/views/Signup/store"
import Auth from "./Auth"
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    modules: {
        login,
        signup,
        Auth
    }
}
export default new Vuex.Store<RootState>(store)
