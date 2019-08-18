
import filepond from "filepond"
import { StorageStore, AuthStore } from '@/store';
import { updateUserPhotoUrl } from './helpers';

import { getDownloadURL, put } from 'rxfire/storage';
import { from , of } from 'rxjs';
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

export const createProfilePictureObservable = () => {
    if(!AuthStore.user)
        throw("User is not logged in")
    if(AuthStore.user.photoURL)
        return getDownloadURL(StorageStore.bucket.refFromURL(AuthStore.user.photoURL)).pipe(switchMap(url =>
            from(fetch(new Request(url)))
        ), switchMap(response => from(response.blob())),
            map(blob => [blob]),
            tap(blobArr => {
                console.log(blobArr)
            })
        )
    else 
            return of([])
}
    