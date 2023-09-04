// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtO1pxpQCR81Pn8dUpQCNL32a1fRkGVe4",
  authDomain: "bryaxis-fb125.firebaseapp.com",
  projectId: "bryaxis-fb125",
  storageBucket: "bryaxis-fb125.appspot.com",
  messagingSenderId: "568666841207",
  appId: "1:568666841207:web:c163224506b60252542672",
  measurementId: "G-029Y7RS4LK"
};

const app = initializeApp(firebaseConfig);

export { app };