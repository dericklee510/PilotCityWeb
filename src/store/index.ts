import Vue from "vue"
import Vuex from "vuex"
import { AuthModule } from "./Auth"


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        ...AuthModule
    }
})
export default store
