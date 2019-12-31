import { AgendaTemplate, NamedLink } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action } from "vuex-module-decorators" //action unused
import firestore from '@/firebase/init'



@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = firestore

    get userDocRef() { //no return type
        let user = this.context.rootState.Auth.user as firebase.User | null
        return (user) ? firestore.collection('users').doc(user.uid) : null
    }
    

}    



