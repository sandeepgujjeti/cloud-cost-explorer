import React from "react"
import SideBar from "./components/SideBar"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import Product from "./components/Product";


const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <SideBar />
        <main className="content-wrapper">  
          <Routes>
            <Route path="/overall" element={<Dashboard />} />
            <Route path="/team" element={<Team/>} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
      </div>
    </>

  )
};


export default App;