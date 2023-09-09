// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzLc7jfFA3RFld-s0WlThm1wa6rHAYzuo",
  authDomain: "insure-360-pwa.firebaseapp.com",
  projectId: "insure-360-pwa",
  storageBucket: "insure-360-pwa.appspot.com",
  messagingSenderId: "630964880943",
  appId: "1:630964880943:web:49b8ddc3f3601dd860a8da",
  measurementId: "G-0VSLJPM7LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export 
export default app;