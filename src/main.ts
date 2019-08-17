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

import {authState} from 'rxfire/auth'
import { of } from 'rxjs'
import { first, tap, concatMap } from 'rxjs/operators'


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


// On first emit commits user and creates vue instance
// On second...end commits user to store
authState(firebaseApp.auth()).pipe(concatMap((user, index) =>
    index === 0 ? of(user).pipe(
        tap((user) => {
            store.commit(`Auth/${SET_USER}`, user)
            createVueInstance()
        })
    ) : of(user)
)).subscribe((user: firebase.User | null) => {
    store.commit(`Auth/${SET_USER}`, user)
},
    (err: Error) => { console.log(err) })

