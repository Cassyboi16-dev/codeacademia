// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6RnMVCyr43FWt-CJ5zRvKJQiTOPWF2NY",
  authDomain: "codeacademia-2239c.firebaseapp.com",
  projectId: "codeacademia-2239c",
  storageBucket: "codeacademia-2239c.firebasestorage.app",
  messagingSenderId: "401909549892",
  appId: "1:401909549892:web:e464dbcdc448f3ec2ce511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}