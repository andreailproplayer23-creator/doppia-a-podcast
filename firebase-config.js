import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhtNBxoGbkoNBMNYUzN26IRtxihZwD47c",
  authDomain: "doppia-a-podcast.firebaseapp.com",
  projectId: "doppia-a-podcast",
  storageBucket: "doppia-a-podcast.firebasestorage.app",
  messagingSenderId: "189184664142",
  appId: "1:189184664142:web:bcfe343e21c48569fc191f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);