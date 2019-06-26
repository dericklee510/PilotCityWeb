import Vue from "vue"
import { RootState } from "./types"
import Vuex from "vuex"
import login from "@/views/Login/store"
import Signup from "@/views/Signup/store"
import Auth from "./Auth"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{},
    modules: {
        login,
        signup:Signup,
        Auth
    }
})
export default store
