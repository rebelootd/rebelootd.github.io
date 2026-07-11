import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkknD11UERn_knh0-c-aGGQIOtSQ-9YAM",
  authDomain: "rebelootdofficial.firebaseapp.com",
  projectId: "rebelootdofficial",
  storageBucket: "rebelootdofficial.firebasestorage.app",
  messagingSenderId: "280626526654",
  appId: "1:280626526654:web:58e522a8dfac84debca1ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
