import { AuthStore } from '@/store/index';
import { StorageStore } from '@/store/index';
import { getDownloadURL } from "rxfire/storage"
export  function updateUserPhotoUrl(filepath: string): void {
    getDownloadURL(StorageStore.bucketRef.child(filepath)).subscribe(url => {
        if (AuthStore.user){
            AuthStore.user.updateProfile({
                photoURL: url
            })}
    },
    err => {
        throw(`Could not update photoURL ${err}`)
    })
}