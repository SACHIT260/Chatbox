
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-daf0c.firebaseapp.com",
  projectId: "reactchat-daf0c",
  storageBucket: "reactchat-daf0c.appspot.com",
  messagingSenderId: "933062316746",
  appId: "1:933062316746:web:eb434b44ee794ca6e21a33"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()