import {db} from '../Fire'
import firebase from 'firebase'

export const savePost = async(email, postId, currentUserEmail)=>{
    await db
    .collection('posts')
    .doc(email+postId)
    .update({
        usersSaved: firebase.firestore.FieldValue.arrayUnion(currentUserEmail)
    });
}

export const unsavePost = async(email, postId, currentUserEmail)=>{
    await db
    .collection('posts')
    .doc(email+postId)
    .update({
        usersSaved: firebase.firestore.FieldValue.arrayRemove(currentUserEmail)
    });
}