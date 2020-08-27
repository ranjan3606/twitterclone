import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC_r5xNtT9mKC-uN-cr2UBhmP2IP1rHMRw",
    authDomain: "twitter-43e8f.firebaseapp.com",
    databaseURL: "https://twitter-43e8f.firebaseio.com",
    projectId: "twitter-43e8f",
    storageBucket: "twitter-43e8f.appspot.com",
    messagingSenderId: "845777253897",
    appId: "1:845777253897:web:b2835ecc5814e031726ad8",
    measurementId: "G-6KD6KK778V"
  };

  const firebaseApp = firebase.initializeApp(config);

  const db = firebaseApp.firestore()

  export default db;