import { FbStore } from './store/index';
require('dotenv').config()
import Vue from 'vue'

/* eslint-disable */
import App from "./App.vue"
import router from "@/router"
import store from "./store"

import firestore, { firebaseApp } from "@/firebase/init"
import { SET_USER } from './store/Auth/mutation-types'


import vuetify from './plugins/vuetify' // used to fix sass errors
import Vuetify from 'vuetify'
// import 'vuetify/src/stylus/app.styl' ---->  VUETIFY IS MIGRATING TO SASS! :)))
import { authState } from 'rxfire/auth'


import Default from "@/components/layout/Default.vue"
import Simple from "@/components/layout/Simple.vue"
import New from "@/components/layout/New.vue"

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import VueMoment from "vue-moment"
import VueRx from 'vue-rx'
import { createProvider } from './vue-apollo'
import { switchMap} from 'rxjs/operators'
import {from} from "rxjs"
import { doc } from 'rxfire/firestore';
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)
Vue.use(VueRx)
Vue.use(Vuetify)
Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: process.env.MAPS_API_KEY
})
Vue.use(VueMoment)
Vue.component('default-layout', Default)
Vue.component('simple-layout', Simple)
Vue.component('new-layout', New )
Vue.config.productionTip = false
firestore // enables firebaseApp and firestore

//creates instance
// export default new Vuetify({ })
function createVueInstance() {
    new Vue({
        router,
        store,
        vuetify,
        apolloProvider: createProvider({
            httpEndpoint:'https://20191119t140110-dot-pilotcity-firestore.appspot.com/graphql'
        }),
        render: h => h(App)
    }).$mount("#app")
}


//ref to observer
const AuthObserver = authState(firebaseApp.auth())
let instanceCreated = false

AuthObserver.pipe(
    switchMap(user => {
        store.commit(`Auth/${SET_USER}`, user)
        store.commit(`Fb/${SET_USER}`, user)
        if(user)
            return doc(FbStore.firestore.collection("GeneralUser").doc(user.uid))
        else {
            if (!instanceCreated){
                createVueInstance()
                instanceCreated = true
            }
            return from([])
        }
    }
)
).subscribe(async (snapshot) => {
    await FbStore.initCurrentUserProfile(snapshot.data())
    if (!instanceCreated){
        createVueInstance()
        instanceCreated = true
    }
})

