import { Module, VuexModule, Action } from "vuex-module-decorators";
import { firebaseApp } from "@/firebase/init"

import Auth from "@/store/Auth"
import {updateUserPhotoUrl} from "./helpers"

@Module({ namespaced: true, name: "Storage" })
export default class Storage extends VuexModule {
    public bucket: firebase.storage.Storage = firebaseApp.storage()

    get bucketRef(): firebase.storage.Reference {
        return this.bucket.ref()
    }
    /**
     *Use this function upload the profile to the user
     *
     * @param {File} img
     * @returns {firebase.storage.UploadTask}
     * @memberof Storage
     */
    @Action
    public uploadProfilePicture(img: File): firebase.storage.UploadTask {
        let imgPath = `user/${Auth.state.user}/user_img/${img.name}`
        let uploadTask = this.bucketRef.child(imgPath).put(img)
        updateUserPhotoUrl(uploadTask)
        return uploadTask
    }

}