import { Module, VuexModule, Action } from "vuex-module-decorators"
import firestore from "@/firebase/init"

@Module({ namespaced: true, name: "Fb" })
export default class Fb extends VuexModule {
    public firestore = firestore
    
    
}