import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Landing = () => {
    const { currentUser, isUserLoggedIn, loading } = useAuth();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="landing-wrapper">
            <h1>Welcome to My App</h1>
            {isUserLoggedIn ? (
                <div>
                    <p>Hello, {currentUser.email}! You are logged in.</p>
                    <Link to="/overall">Go to Dashboard</Link>
                </div>
            ) : (
                <div>
                    <p>Please log in or sign up to continue.</p>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )}
        </div>
    );
};

export default Landing;
