import {db, stg} from '../Fire'
import firebase from 'firebase'

export const storeToStg = (file, currentUserEmail, useUrl) => {
    const stgRef = stg.ref();
    const fileRef = stgRef.child('users/'+currentUserEmail+'/images/'+Date.now());
    fileRef
    .put(file)
    .then(()=>{
        fileRef.getDownloadURL().then(url=>{
            useUrl(url);
        })
    });
}

export const submitPostToDb = async(url, currentUser, postDesc, postHashtags, postTags, additionalCallbacks)=> {
    await db.collection('posts').doc(currentUser.email+currentUser.nextId).set({
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        postId: currentUser.nextId,
        imageURL: url,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        postDesc: postDesc,
        postHashtags: postHashtags.split(' '),
        postTags: postTags.split(' '),
        usersLiked: [],
        usersSaved: []
    }).then(async()=>{
        await db.collection('users').doc(currentUser.email).update({
            numOfPosts: firebase.firestore.FieldValue.increment(1),
            nextId: firebase.firestore.FieldValue.increment(1)
        }).then(()=>{
            additionalCallbacks();
        })
    })
}