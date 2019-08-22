import { first, refCount } from 'rxjs/operators';
import { FbStore } from '@/store/index';
import { AuthStore } from '@/store/index';
import { StorageStore } from '@/store/index';
import { getDownloadURL } from "rxfire/storage"

export function updateUserPhotoUrl(filepath: string): void {
    const ref = StorageStore.bucketRef.child(filepath)
    getDownloadURL(ref).pipe(first()).subscribe(photoURL => {
        if (!AuthStore.user || !FbStore.userDoc)
            throw ('Not logged in!')
        AuthStore.user.updateProfile({
            photoURL
        }).catch(err => {
            throw(`Couldn't update photoURL ${err}`)
        })
        FbStore.userDoc.update({ photoURL })
    },
        err => {
            console.log(JSON.stringify(err))
            throw (`Could not fetch new photoURL ${err}`)
        })
}