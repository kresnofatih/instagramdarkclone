import {db} from '../Fire'
import firebase from 'firebase'

export const commentPost = async(currentUser, postDocId, text)=>{
    if(text){
        db.collection('posts').doc(postDocId).collection('comments').add({
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            text: text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
}

