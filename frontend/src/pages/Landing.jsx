import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../CSS/landing.css";
import images from "../constants/images";

const Landing = () => {
    const { currentUser, isUserLoggedIn, loading } = useAuth();

    if (loading) {
        return <section className="main-auth-wrapper">Loading...</section>;
    }

    return (
        <>
            <main className="main-auth-wrapper text-center">
                <header className="hero-header">
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </header>
                <section className="hero-wrapper">
                    <section className="relative">
                        <div className="hero-text">
                            <div>Cloud <span className="">Cost</span></div>
                            <div> Explorer</div>
                        </div>
                        <div className="hero-tagline">Your cost analysis made easier</div>
                        <img style={{ right: "-20%", top: "-30%", width: "200px", rotate: "15deg" }} src={images.barChart2} alt="" />
                    </section>
                </section>
                <section className="images">
                    <img style={{ left: "0", top: "0", filter: "blur(2px)", scale: 1.5 }} src={images.cloud} alt="" />
                    <img style={{ left: "30%", top: "0", width: "200px", rotate: "-10deg" }} src={images.barLine3} alt="" />
                    <img style={{ right: "5%", top: "30%", width: "200px", rotate: "15deg" }} src={images.barLine2} alt="" />
                    <img style={{ left: "25%", bottom: "25%", width: "200px", rotate: "-10deg", scale: .5 }} src={images.barChart3} alt="" />
                    <img style={{ left: "5%", bottom: "5%", width: "200px", rotate: "10deg", scale: .5, opacity: .5 }} src={images.pyramid} alt="" />
                    <img style={{ top: "10%", right: "-13rem", width: "70%", rotate: "30deg", zIndex: -1, opacity: .25 }} src={images.timeline} alt="" />
                </section>
                <section className="relative">
                    <div className="analysis-wrapper">
                        <div className="row row-1">
                            <div className="analysis" style={{ backgroundColor: "hsl(120, 80%, 70%, .25)", color: "hsl(120, 80%, 30%)" }}>Overall Analysis</div>
                            <div className="analysis" style={{ backgroundColor: "hsl(255, 100%, 90%, .25)", color: "hsl(255, 100%, 30%)" }}>Team / Department Analysis</div>
                        </div>
                        <div className="row row-2">
                            <div className="analysis" style={{ backgroundColor: "hsl(50, 100%, 70%, .25)", color: "hsl(50, 100%, 30%)" }}>Product Analysis</div>
                            <div className="analysis" style={{ backgroundColor: "hsl(10, 100%, 70%, .25)", color: "hsl(10, 100%, 30%)" }}>Cloud Service Analysis</div>
                        </div>
                        <img style={{ right: 0, top: "-20vh", scale: 1.25 }} src={images.graphNotes} alt="" />
                    </div>
                </section>
            </main>

        </>
    );
};

export default Landing;

