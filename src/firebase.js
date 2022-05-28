// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

//npm install --save @google-cloud/storage 
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc , onSnapshot,getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "/",
  authDomain: "/",
  projectId: "/",
  storageBucket: "/",
  messagingSenderId: "/",
  appId: "/"
};

// Initialize Firebase

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  const db = getFirestore();

  export {auth, provider, db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc, onSnapshot, doc,
    getDocs  }
