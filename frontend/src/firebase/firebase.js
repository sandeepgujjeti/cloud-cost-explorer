import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlIBBql8OCF10yjOGnYlRNoQe8s3urVlk",
  authDomain: "cloud-cost-explorer-44727.firebaseapp.com",
  projectId: "cloud-cost-explorer-44727",
  storageBucket: "cloud-cost-explorer-44727.firebasestorage.app",
  messagingSenderId: "960001169751",
  appId: "1:960001169751:web:e771fc7be41ffa24f58612",
  measurementId: "G-WGH8R1VEE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app , auth};