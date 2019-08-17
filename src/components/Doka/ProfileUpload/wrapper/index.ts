import { getDownloadURL } from 'rxfire/storage';
import { StorageStore } from '@/store/index';
import { AuthStore } from '@/store';
import filepond from "filepond"
import { updateUserPhotoUrl } from './helpers';
import { put } from 'rxfire/storage';


export const process:filepond.server.process = (fieldName, file, metadata, load, error, progress, abort) => {
    let imgPath = `user/${AuthStore.user}/user_img/${file.name}`
    updateUserPhotoUrl(imgPath)
    let imgRef = StorageStore.bucketRef.child(imgPath)
    let uploadTask = put(imgRef,file)
    uploadTask.subscribe(snap => {
        progress(true,snap.bytesTransferred,snap.totalBytes)
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