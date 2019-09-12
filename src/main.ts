import Vue from "vue"
import './plugins/vuetify'
import App from "./App.vue"
import router from "@/router"
import store from "./store"

import * as firebase from "firebase/app"
import firestore from "@/firebase/init"
import "firebase/auth"
import { SET_USER } from './store/Auth/mutation-types'

import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify' // used to fix sass errors
// import 'vuetify/src/stylus/app.styl' ---->  VUETIFY IS MIGRATING TO SASS! :)))

import VeeValidate from '@/utilities/validation'

Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.config.productionTip = false
firestore // enables firebaseApp and firestore

new Vue({
    router,
    store,
    created(): void {
        firebase.auth().onAuthStateChanged((user): void => {
            store.commit(`Auth/${SET_USER}`, user)
        })
    },
    vuetify,
    // eslint-disable-next-line
    render: h => h(App)
}).$mount("#app")


