import React, { useEffect } from "react"
import SideBar from "./components/SideBar"
import "./App.css";
import { Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import Product from "./components/Product";
import { useState, createContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { authStateListener } from "./firebase/auth";



import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./components/Landing";

export const AppContext = createContext()
export const AuthContext = createContext();




const App = () => {
  const [analysisType, setAnalysisType] = useState("");
  
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authStateListener((user) => {
      setUser(user);
      if (user) {
        navigate("/overall"); // Redirect to Dashboard after login
      }
      
    });
    return () => unsubscribe();
  }, [navigate]);
  return (
    <>
      <AppContext.Provider value={{ analysisType, setAnalysisType }}>
        <AuthContext.Provider value={{user, userLoggedIn}}>

        <div className="main-wrapper">
          <SideBar />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<Landing />} />

              <Route path="/overall" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/product" element={<Product />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />

            </Routes>
          </main>
        </div>
        </AuthContext.Provider>

      </AppContext.Provider>
    </>

  )
};


export default App;