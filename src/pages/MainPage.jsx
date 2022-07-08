import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";
import Plans from "../components/Plans";

function MainPage() {
  return (
    <div className="main-page">
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="main-content">
        <Services />
        <Works />
        <Plans  />
      </div>
    </div>
  );
}

export default MainPage;
