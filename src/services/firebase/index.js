// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYmr-yU52vYLvbjFfzcvjS17NAnCXJ8zo",
  authDomain: "bookstore-backend-5a38e.firebaseapp.com",
  projectId: "bookstore-backend-5a38e",
  storageBucket: "bookstore-backend-5a38e.appspot.com",
  messagingSenderId: "295342666246",
  appId: "1:295342666246:web:c3f495802883b947224987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)