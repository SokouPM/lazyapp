// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANL6He6Li2Kxd3lu5hNM0WfkvH7yifkak",
  authDomain: "lazyapp-8f0c9.firebaseapp.com",
  projectId: "lazyapp-8f0c9",
  storageBucket: "lazyapp-8f0c9.appspot.com",
  messagingSenderId: "275294672543",
  appId: "1:275294672543:web:51c55ac9292026db7f34aa",
  databaseURL: "https://lazyapp-8f0c9.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
