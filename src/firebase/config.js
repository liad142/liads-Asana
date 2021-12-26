import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB0IemfmjlnpLPquCXYczAgxG5_9hl8lfM",
    authDomain: "liadasana.firebaseapp.com",
    projectId: "liadasana",
    storageBucket: "liadasana.appspot.com",
    messagingSenderId: "157580409416",
    appId: "1:157580409416:web:fb58d951cefff1a030767d"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore,projectAuth,timestamp,projectStorage}
