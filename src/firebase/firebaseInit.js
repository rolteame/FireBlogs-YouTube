// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCVtadtIrhx-XSFDhIcs_eHPx2blhHbKOY",

  authDomain: "fireblogsyt-8f9c1.firebaseapp.com",

  projectId: "fireblogsyt-8f9c1",

  storageBucket: "fireblogsyt-8f9c1.appspot.com",

  messagingSenderId: "969527903734",

  appId: "1:969527903734:web:bc435c36a8c9cd7412b3d7"

};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore()