import { create } from './components/Doka/esm/lib/doka.esm.min.d';
import Vue from "vue"
import './plugins/vuetify'
import App from "./App.vue"
import router from "@/router"
import store from "./store"


import firestore,{firebaseApp} from "@/firebase/init"
import { SET_USER } from './store/Auth/mutation-types'


import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import VeeValidate from '@/utilities/validation'

import {authState, user} from 'rxfire/auth'
import { of } from 'rxjs'
import { tap, concatMap, first, skip } from 'rxjs/operators'


Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.config.productionTip = false
firestore // enables firebaseApp and firestore

//creates instance
function createVueInstance() {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app")
}


//ref to observer
const AuthObserver = authState(firebaseApp.auth())

//on first response creates vue instance
AuthObserver.pipe(first()).subscribe(user => {
    store.commit(`Auth/${SET_USER}`, user)
    createVueInstance()
    console.log('create',user)
})

//updates user on other responses
AuthObserver.pipe(skip(1)).subscribe(user => {
    store.commit(`Auth/${SET_USER}`, user)
    console.log('update',user)
})

