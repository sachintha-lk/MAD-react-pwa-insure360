
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      return result.user; 
    })
    .catch((error) => {
      console.log("Error", error);
      throw error;
    });
}

export { signInWithGoogle };
export default app;;

