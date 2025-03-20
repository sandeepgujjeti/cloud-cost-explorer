import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgqx4zouyAAigYQWLf6aGh4IKoduGdJ7Q",
  authDomain: "cloud-cost-explorer-dc3c7.firebaseapp.com",
  projectId: "cloud-cost-explorer-dc3c7",
  storageBucket: "cloud-cost-explorer-dc3c7.firebasestorage.app",
  messagingSenderId: "67367082428",
  appId: "1:67367082428:web:1a48536c8b8146858bb3b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };