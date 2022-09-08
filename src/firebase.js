import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBVaKhZdijeQsq9ox1Rpdwl3DRDIroBy7w",
    authDomain: "clone-fb91d.firebaseapp.com",
    projectId: "clone-fb91d",
    storageBucket: "clone-fb91d.appspot.com",
    messagingSenderId: "261663150865",
    appId: "1:261663150865:web:5581fdf7ac9b867e97b2b0",
    measurementId: "G-4ENENBZZPN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export const timeStamp = firebase.firestore.FieldValue.serverTimestamp()

  export { db, auth, provider }