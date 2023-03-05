// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2agtKSTvnnFbK-6kU04zuk9QTdOi6Jiw",
  authDomain: "global-oneness-education.firebaseapp.com",
  projectId: "global-oneness-education",
  storageBucket: "global-oneness-education.appspot.com",
  messagingSenderId: "332078452695",
  appId: "1:332078452695:web:2ac3a2dc62414eaa874592",
  measurementId: "G-PMZ4ZFPJJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);