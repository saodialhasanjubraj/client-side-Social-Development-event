// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnOo-IZ3JMMvo2jUTjmO9pqi0d4ZMLXR8",
    authDomain: "social-development-event.firebaseapp.com",
    projectId: "social-development-event",
    storageBucket: "social-development-event.firebasestorage.app",
    messagingSenderId: "1073252015143",
    appId: "1:1073252015143:web:029c10b4660689cd41c202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)