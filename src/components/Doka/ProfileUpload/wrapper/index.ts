import filepond from "filepond"
import { StorageStore, AuthStore } from '@/store';
import { updateUserPhotoUrl } from './helpers';

import { getDownloadURL, put } from 'rxfire/storage';
import { switchMap, map, tap } from 'rxjs/operators';



export const process: filepond.server.process = (fieldName, file, metadata, load, error, progress, abort) => {
    if (!AuthStore.user)
        throw ("User not defined")
    let imgPath = `user/${AuthStore.user.uid}/user_img/${file.name}`
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
            updateUserPhotoUrl(imgPath)
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

export const load: filepond.server.load = (source, load, error, progress, abort, headers) => {
    getDownloadURL(StorageStore.bucket.refFromURL(source)).pipe(
        switchMap(url => fetch(new Request(url)))
        , switchMap(response => response.blob())
    ).subscribe(blob => load(blob),
        err => {
            error(`Could not fetch Profile Picture ${JSON.stringify(err)}`)
        })
}
