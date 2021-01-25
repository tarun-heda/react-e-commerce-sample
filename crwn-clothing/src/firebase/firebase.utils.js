import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlCTs_04cOnwU4EXog12Kt3VL72frT3R4",
    authDomain: "crwn-db-d2a7c.firebaseapp.com",
    projectId: "crwn-db-d2a7c",
    storageBucket: "crwn-db-d2a7c.appspot.com",
    messagingSenderId: "546186932418",
    appId: "1:546186932418:web:67db3429d8e18a1dac0b5b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;