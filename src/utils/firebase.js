import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//colocar su propia configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSy1123125dsfsdgdfa23124123MI",
  authDomain: "teseo-app-232.firebaseapp.com",
  projectId: "teseo-app-23",
  storageBucket: "teseo-app-23.appspot.com",
  messagingSenderId: "794583488224",
  appId: "1:7945123124:web:f3a6076c904aa1c635232145",
  measurementId: "G-NASDF1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
