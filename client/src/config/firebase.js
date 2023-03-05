// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH4Qb2dQdw7DXlm4dOILt4hDcuRpnRWDU",
  authDomain: "global-oneness-testing.firebaseapp.com",
  projectId: "global-oneness-testing",
  storageBucket: "global-oneness-testing.appspot.com",
  messagingSenderId: "559645901871",
  appId: "1:559645901871:web:a168d7eaf92412ede0b2da",
  measurementId: "G-MXTQDZMGRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);