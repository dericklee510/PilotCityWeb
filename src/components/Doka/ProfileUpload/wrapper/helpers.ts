import { AuthStore } from '@/store/index';
import { StorageStore } from '@/store/index';
import { getDownloadURL } from "rxfire/storage"
export async function updateUserPhotoUrl(filepath: string): Promise<void> {
    getDownloadURL(StorageStore.bucketRef.child(filepath)).subscribe(url => {
        if (AuthStore.user){
            AuthStore.user.updateProfile({
                photoURL: url
            })}
    })
}