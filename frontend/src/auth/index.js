import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
//signUp function
// Signup Function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error.message;
  }
};

// Login Function
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error.message;
  }
};

// Logout Function
export const logOut = async () => {
  try {
    const res = await signOut(auth);
    console.log(res);
  } catch (error) {
    throw error.message;
  }
};

export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};