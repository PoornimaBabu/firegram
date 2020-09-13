 import * as firebase from "firebase/app";
 import "firebase/storage";
 import "firebase/firebase-firestore";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDJ6zbEzVCWIcZRim-wPuLjBeswi_JNDRY",
    authDomain: "firegram-6c6c4.firebaseapp.com",
    databaseURL: "https://firegram-6c6c4.firebaseio.com",
    projectId: "firegram-6c6c4",
    storageBucket: "firegram-6c6c4.appspot.com",
    messagingSenderId: "886324199349",
    appId: "1:886324199349:web:bc39699de10710cc8c63fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore,timestamp};