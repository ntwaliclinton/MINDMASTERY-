import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBgWtLMfXio-Y26N4hfTyZQ7NJbKLrUmlM",
  authDomain: "mindmastery-fb86e.firebaseapp.com",
  projectId: "mindmastery-fb86e",
  storageBucket: "mindmastery-fb86e.firebasestorage.app",
  messagingSenderId: "363735812790",
  appId: "1:363735812790:web:4b4c24b6380cd188513417"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 
