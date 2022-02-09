// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD62W2I4cZyp8-wVKYXW8bwBXP5crfOuzA",
  authDomain: "fireblogsyt-c5481.firebaseapp.com",
  projectId: "fireblogsyt-c5481",
  storageBucket: "fireblogsyt-c5481.appspot.com",
  messagingSenderId: "90362680915",
  appId: "1:90362680915:web:6e97cec9542d2679fcd8a6"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore()