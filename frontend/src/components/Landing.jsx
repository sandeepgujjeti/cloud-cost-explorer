import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Login from "./Login";
import Register from "./Register";

import Header from "./Header";

import { AuthProvider } from "../contexts/AuthContext";
import { useRoutes } from "react-router-dom";


function Landing() {
    const routesArray = [
        // {
        //     path: "/",
        //     element: <Landing />,
        // },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ];
    return (
        <AuthProvider>
            <Header />
            <div className="w-full h-screen flex flex-col">{routesElement}</div>
        </AuthProvider>
    );
}
export default Landing




