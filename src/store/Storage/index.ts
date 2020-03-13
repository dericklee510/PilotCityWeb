/* eslint-disable-next-line */
import { Module, VuexModule, Action } from "vuex-module-decorators" //Action unsed
import { firebaseApp } from '@/firebase/init'

@Module({ namespaced: true, name: 'Storage' })
export default class Storage extends VuexModule {
    public bucket: firebase.storage.Storage = firebaseApp.storage()

    public get bucketRef(): firebase.storage.Reference {
        return this.bucket.ref()
    }
}
