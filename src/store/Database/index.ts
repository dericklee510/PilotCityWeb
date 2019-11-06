/* eslint-disable-next-line */
import { Module, VuexModule, Action } from "vuex-module-decorators" //action unused
import firestore from "@/firebase/init"

@Module({ namespaced: true, name: "Fb" })
export default class Fb extends VuexModule {
    public firestore = firestore
    /* eslint-disable-next-line */
    get userDoc() { //no return type
        return this.context.rootState.Auth.user?firestore.collection('users').doc(this.context.rootState.Auth.user.uid):null
    }
}