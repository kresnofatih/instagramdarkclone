import {db} from '../Fire'
import firebase from 'firebase'

export const likePost = async(email, postId, currentUserEmail)=>{
    await db.collection('posts').doc(email+postId).update({
        usersLiked: firebase.firestore.FieldValue.arrayUnion(currentUserEmail)
    })
}

export const unlikePost = async(email, postId, currentUserEmail)=>{
    await db.collection('posts').doc(email+postId).update({
        usersLiked: firebase.firestore.FieldValue.arrayRemove(currentUserEmail)
    })
}