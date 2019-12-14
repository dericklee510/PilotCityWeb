import Vue from 'vue'
import Vuex from 'vuex'


import { getModule } from 'vuex-module-decorators'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        ...modules
    }
})
export default store
export const AuthStore = getModule(modules.Auth, store)
export const StorageStore = getModule(modules.Storage, store)
export const FbStore = getModule(modules.Fb, store)
export const GraphqlStore = getModule(modules.Graphql, store)
