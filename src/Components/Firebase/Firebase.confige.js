// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0DKqWGAlvqDFoZNIiviuYWWEq6oBs7Zw",
  authDomain: "login-form-252c6.firebaseapp.com",
  projectId: "login-form-252c6",
  storageBucket: "login-form-252c6.appspot.com",
  messagingSenderId: "69868067246",
  appId: "1:69868067246:web:fe2d0344ff9506e760903f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth