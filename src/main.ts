import { MAPS_API_KEY } from '@/keys';
import Vue from "vue"
import './plugins/vuetify'
import App from "./App.vue"
import router from "@/router"
import store from "./store"


import firestore, { firebaseApp } from "@/firebase/init"
import { SET_USER } from './store/Auth/mutation-types'


import Vuetify from './plugins/vuetify' // used to fix sass errors
// import 'vuetify/src/stylus/app.styl' ---->  VUETIFY IS MIGRATING TO SASS! :)))
import { authState } from 'rxfire/auth'




import VeeValidate from '@/utilities/validation'

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

import VueRx from 'vue-rx'

Vue.use(VueRx)
Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: MAPS_API_KEY
})
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
let instanceCreated = false

AuthObserver.subscribe(user => {
    store.commit(`Auth/${SET_USER}`, user)
    if (!instanceCreated){
        createVueInstance()
        instanceCreated = true
    }
})


