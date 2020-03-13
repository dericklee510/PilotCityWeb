import filepond from 'filepond'


import { getDownloadURL, put } from 'rxfire/storage'
import { switchMap, map, tap } from 'rxjs/operators'
import { StorageStore, AuthStore } from '@/store'

let updateUserBanner: (imgPath: string) => Promise<string>
// Need to save image filepath into database
// Retrieve filepath from database
export const process: filepond.server.process = (fieldName, file, metadata, load, error, progress, abort) => {
    if (!AuthStore.user) throw ('User not defined')
    let imgPath = `user/${AuthStore.user.uid}/banner_img/${file.name}`
    let imgRef = StorageStore.bucketRef.child(imgPath)
    let uploadTask = put(imgRef, file)
    uploadTask.subscribe((snap) => {
        progress(true, snap.bytesTransferred, snap.totalBytes)
    },
    err => {
        error('Couldn\'t upload photo')
    },
    () => {
        updateUserBanner(imgPath).then(() => {
            getDownloadURL(imgRef).subscribe((url) => {
                load(url)
            })
        }).catch((err) => {
            error('Couldn\'t upload photo')
        })
  })
    return {
        abort: () => {
            uploadTask.subscribe((snap) => {
                snap.task.cancel()
                abort()
            })
        }
    }
}

export const load: filepond.server.load = (source, load, error, progress, abort, headers) => {
    getDownloadURL(StorageStore.bucket.refFromURL(source)).pipe(
        switchMap(url => fetch(new Request(url))),
    switchMap(response => response.blob())
    ).subscribe(blob => load(blob),
        err => {
            error(`Could not fetch Profile Picture ${JSON.stringify(err)}`)
        })
}
