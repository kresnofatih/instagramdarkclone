import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy-77ur0CIisZnYMhm_MRaEZevwwyPysY",
    authDomain: "instagramdarkclone.firebaseapp.com",
    projectId: "instagramdarkclone",
    storageBucket: "instagramdarkclone.appspot.com",
    messagingSenderId: "737634457830",
    appId: "1:737634457830:web:1f1073206a307b16e98327",
    measurementId: "G-FL278LGRN6"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore();
  const auth = fire.auth();
  const stg = fire.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider, stg};