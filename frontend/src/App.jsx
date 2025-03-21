import React, { useState, createContext } from "react"
import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import Product from "./components/Product";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/AuthContext";

export const AppContext = createContext()

const App = () => {
  const [analysisType, setAnalysisType] = useState("");
  const { isUserLoggedIn } = useAuth();

  return (
    <>
      <AppContext.Provider value={{ analysisType, setAnalysisType }}>
        <div className="main-wrapper">
          {isUserLoggedIn && <SideBar />}
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/overall" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/product" element={<Product />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>

      </AppContext.Provider>
    </>
  )
};


export default App;