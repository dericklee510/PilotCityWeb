import { MAPS_API_KEY } from '@/keys'
import Vue from "vue"
/* eslint-disable */
import App from "./App.vue"
import router from "@/router"
import store from "./store"


import firestore, { firebaseApp } from "@/firebase/init"
import { SET_USER } from './store/Auth/mutation-types'


import vuetify from './plugins/vuetify' // used to fix sass errors
// import 'vuetify/src/stylus/app.styl' ---->  VUETIFY IS MIGRATING TO SASS! :)))
import { authState } from 'rxfire/auth'


import Default from "@/components/layout/Default.vue"
import Simple from "@/components/layout/Simple.vue"

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

import VueRx from 'vue-rx'

Vue.use(VueRx)
Vue.use(vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: MAPS_API_KEY
})
Vue.component('default-layout', Default)
Vue.component('simple-layout', Simple)
Vue.config.productionTip = false
firestore // enables firebaseApp and firestore

//creates instance
// export default new Vuetify({ })
function createVueInstance() {
    new Vue({
        router,
        store,
        vuetify,
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


