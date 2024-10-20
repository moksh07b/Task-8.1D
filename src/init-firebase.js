import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHZuhiqK7VQJjNPjq7KTfjgRs8fGQFRmg",
  authDomain: "task8-1d-de879.firebaseapp.com",
  projectId: "task8-1d-de879",
  storageBucket: "task8-1d-de879.appspot.com",
  messagingSenderId: "488827794496",
  appId: "1:488827794496:web:dee566a242a3cab3b69ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imageDb = getStorage(app)