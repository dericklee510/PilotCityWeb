import { first, refCount } from 'rxjs/operators'
import { getDownloadURL } from 'rxfire/storage'
import { FbStore, AuthStore, StorageStore } from '@/store/index'


export function updateUserPhotoUrl(filepath: string): Promise<void> {
    if (!AuthStore.user || !FbStore.userDoc) {
        throw ('Not logged in!')
    }
    const AuthStoreUser = AuthStore.user as firebase.User
    const FbStoreUserDoc = FbStore.userDoc as firebase.firestore.DocumentReference
    const ref = StorageStore.bucketRef.child(filepath)
    return ref.getDownloadURL().then((photoURL: string) => {
        AuthStoreUser.updateProfile({
            photoURL
        }).catch((err) => {
            throw (`Couldn't update photoURL on AuthUser${err}`)
        })
        FbStoreUserDoc.update({ photoURL }).catch((err) => {
            throw (`Couldn't update photoURL in DB ${err}`)
        })
    }).catch((err) => {
        throw (`Could not fetch new photoURL ${err}`)
    })
}
