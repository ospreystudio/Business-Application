import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbOVJAqCptBGeSSpmeiGh6qmXDvr0t0KM",
  authDomain: "ospreystudio-7c879.firebaseapp.com",
  projectId: "ospreystudio-7c879",
  storageBucket: "ospreystudio-7c879.appspot.com",
  messagingSenderId: "306082305568",
  appId: "1:306082305568:web:227c9367a16efa5fda4e45",
  measurementId: "G-QVY9FQY5KS"
};


firebase.initializeApp(firebaseConfig)


const db = firebase.firestore()
const storage = firebase.storage()


const usersCollection = db.collection('users')



export {
  db,
  storage,
  usersCollection,
}
