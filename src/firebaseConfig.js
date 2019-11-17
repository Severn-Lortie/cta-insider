import firebase from 'firebase'
import 'firebase/firestore'

//Setup
const config = {
    apiKey: "AIzaSyDYRCL6zskUBiOsTd01O4An1xZQi0l8bnY",
    authDomain: "cta-insider.firebaseapp.com",
    databaseURL: "https://cta-insider.firebaseio.com",
    projectId: "cta-insider",
    storageBucket: "cta-insider.appspot.com",
    messagingSenderId: "653797877094",
    appId: "1:653797877094:web:a8f6c9cdfda083017a14a7"
  };
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const sections = db.collection('sections');

export default {
    db,
    auth,
    currentUser,
    sections
}