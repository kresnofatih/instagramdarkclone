import {db, stg} from '../Fire'

export const submitEditProfile = async(
    currentUserEmail,
    newDisplayName,
    newBio,
    newPhotoFile,
    closeSubmit
)=>{
    if(newPhotoFile){
        const stgRef = stg.ref();
        const fileRef = stgRef.child('users/'+currentUserEmail+'/avatars/'+Date.now());
        fileRef
        .put(newPhotoFile)
        .then(()=>{
            fileRef.getDownloadURL().then(async(url)=>{
                await db.collection('users').doc(currentUserEmail).update({
                    displayName: newDisplayName,
                    photoURL: url,
                    bio: newBio
                }).then(()=>{
                    closeSubmit();
                });
            });
        });
    } else {
        await db.collection('users').doc(currentUserEmail).update({
            displayName: newDisplayName,
            bio: newBio
        }).then(()=>{
            closeSubmit();
        });
    }
}