import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="main-page">
      <div className="top" id="top"></div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="main-content">
        <Services />
        <Works />
        <Plans  />
      </div>
      
        <Footer  />
    </div>
  );
}

export default MainPage;
