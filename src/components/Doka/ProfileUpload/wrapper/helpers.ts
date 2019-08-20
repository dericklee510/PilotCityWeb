import { first } from 'rxjs/operators';
import { FbStore } from './../../../../store/index';
import { AuthStore } from '@/store/index';
import { StorageStore } from '@/store/index';
import { getDownloadURL } from "rxfire/storage"

export function updateUserPhotoUrl(filepath: string): void {
    getDownloadURL(StorageStore.bucketRef.child(filepath)).pipe(first()).subscribe(photoURL => {
        if (!AuthStore.user)
            throw ('Not logged in!')
        AuthStore.user.updateProfile({
            photoURL
        })
        FbStore.firestore.collection('users').doc(AuthStore.user.uid).update({ photoURL })
    },
        err => {
            console.log(JSON.stringify(err))
            throw (`Could not fetch new photoURL ${err}`)
        })
}