import { Module, VuexModule, Action } from "vuex-module-decorators"
import firestore from "@/firebase/init"

@Module({ namespaced: true, name: "Fb" })
export default class Fb extends VuexModule {
    public firestore = firestore
    public userDoc = this.context.rootState.Auth.user?firestore.collection('users').doc(this.context.rootState.Auth.user.uid):null
    
}