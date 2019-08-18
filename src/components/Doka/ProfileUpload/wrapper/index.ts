import { getDownloadURL } from 'rxfire/storage';
import { StorageStore } from '@/store/index';
import { AuthStore } from '@/store';
import filepond from "filepond"
import { updateUserPhotoUrl } from './helpers';
import { put } from 'rxfire/storage';
import { empty, from } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';


export const process: filepond.server.process = (fieldName, file, metadata, load, error, progress, abort) => {
    if (!AuthStore.user)
        throw ("User not defined")
    let imgPath = `user/${AuthStore.user.uid}/user_img/${file.name}`
    updateUserPhotoUrl(imgPath)
    let imgRef = StorageStore.bucketRef.child(imgPath)
    let uploadTask = put(imgRef, file)
    uploadTask.subscribe(snap => {
        progress(true, snap.bytesTransferred, snap.totalBytes)
    },
        err => {
            console.log(err)
            error(err)
        },
        () => {
            getDownloadURL(imgRef).subscribe(url => {
                load(url)
            })
        }
    )
    return {
        abort: () => {
            uploadTask.subscribe(snap => {
                snap.task.cancel()
                abort()
            })
        }
    }
}
export const ProfilePictureObservable = (AuthStore.user && AuthStore.user.photoURL) ?
    getDownloadURL(StorageStore.bucket.refFromURL(AuthStore.user.photoURL)).pipe(switchMap(url =>
        from(fetch(new Request(url)))
    ), switchMap(response => from(response.blob())),
        map(blob => [blob]),
        tap(blobArr => {
            console.log(blobArr)
        })
    ) :
    empty().pipe(tap(() => console.log("empty")))