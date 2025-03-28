import React, { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(
        localStorage.getItem("isUserLoggedIn")
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                setIsUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setIsUserLoggedIn(false);
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup function to avoid memory leaks
    }, []);

    const value = {
        currentUser,
        isUserLoggedIn,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <p>Loading...</p>} {/* Show loading indicator */}
        </AuthContext.Provider>
    );
}
