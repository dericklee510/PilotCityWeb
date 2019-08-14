import Auth from "@/store/Auth"
/**
 *
 *Modifies photo URL on the Auth User using an UploadTask
 * @export
 * @param {firebase.storage.UploadTask} uploadTask
 */
export async function updateUserPhotoUrl(uploadTask: firebase.storage.UploadTask): Promise<void> {
    Auth.state.user.updateProfile({
        photoUrl:await uploadTask.snapshot.ref.getDownloadURL()
    })
}