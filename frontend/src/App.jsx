import React, { useState, createContext, useEffect } from "react"
import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import Product from "./components/Product";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import Landing from "./pages/Landing";
import { Route, Routes, Navigate, Router } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import Cloud from "./components/Cloud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import PageNotFound from "./pages/PageNotFound";

export const AppContext = createContext()

const App = () => {
  const [analysisType, setAnalysisType] = useState(() => {
    const storedAnalysisType = localStorage.getItem("analysisType");
    return storedAnalysisType !== null ? storedAnalysisType : "overall";
  });
  const { isUserLoggedIn } = useAuth();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    localStorage.setItem("analysisType", analysisType);
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    handleResize(); // initial check
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [analysisType, setAnalysisType]);

  if (isSmallScreen) {
    return (
      <div className="small-screen">
        <i>
          <FontAwesomeIcon icon={faInfo} />
        </i>
        Please Open the website in a Desktop with a Larger Screen Size
      </div>
    )
  }

  return (
    <>
      <AppContext.Provider value={{ analysisType, setAnalysisType }}>
        {
          !isUserLoggedIn
            ? (
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            )
            : (<div className="main-wrapper">
              <SideBar />
              <main className="content-wrapper">
                <Routes>
                  <Route path="/" element={<Navigate to="/overall" replace />} />
                  <Route path="/overall" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/cloud" element={<Cloud />} />
                  <Route path="/signup" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </main>
            </div>)
        }

      </AppContext.Provider >
    </>
  )
};


export default App;