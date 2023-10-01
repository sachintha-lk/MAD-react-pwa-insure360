
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// import { getMessaging, getToken  } from "firebase/messaging";

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
export const db = getFirestore(app);

export const storage = getStorage(app);



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

// const messaging = getMessaging(app);
// export const requestPermission = () => {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
     
//       getToken(messaging, 
//         {vapidKey: "BCdkU0d9TBfELKYwp9VYDCT-p-Fq1Z5nfyMdhLJnv6zYUCRBUZUsReloFGYyqBTXBj6kjY9RhdTGeCQhII2q_sI" }
//       ).then((currentToken) => {
//         if (currentToken) {
//           console.log('current token for client: ', currentToken);
          
//         } else {
//           console.log('No registration token available. Request permission to generate one.');
          
//         }
//       }
//       ).catch((err) => {
//         console.log('An error occurred while retrieving client token. ', err);
      
//       });
//     }
//   }
//   ).catch((err) => {
//     console.log('Unable to get permission to notify.', err);
//   });
// }



export { signInWithGoogle };
export default app;;

