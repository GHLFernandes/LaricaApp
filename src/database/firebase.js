// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaJRZXaNtUSQwpjRR7sHy1KiFxUN-Wb5I",
    authDomain: "laricaapp-2e1f5.firebaseapp.com",
    projectId: "laricaapp-2e1f5",
    storageBucket: "laricaapp-2e1f5.appspot.com",
    messagingSenderId: "982360324697",
    appId: "1:982360324697:web:ee2454abe6c1aa585dcf48",
    measurementId: "G-SZ7ZCVQV7Z"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();

export default { firebase, auth, db };