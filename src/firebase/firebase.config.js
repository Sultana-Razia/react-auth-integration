// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDel3K1fBFX70VjB1_WyehBA1Fwt08byvs",
    authDomain: "react-auth-integration-6a59c.firebaseapp.com",
    projectId: "react-auth-integration-6a59c",
    storageBucket: "react-auth-integration-6a59c.appspot.com",
    messagingSenderId: "647681499495",
    appId: "1:647681499495:web:8b325ac91659b28efccfc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;