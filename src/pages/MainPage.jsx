import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Membership from "../components/Membership";
import FAQs from "../components/FAQs";
import Client from "../components/Client";
import Blog from "../components/Blogs";

function MainPage() {
  return (
    <div className="main-page">
      <img src="../image/noise.png" alt="" className="noise" />
      <div className="top" id="top"></div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="main-content">
        <About />
        <Services />
        <Benefits />
        <Works />
        <Membership />
        <Plans />
        <FAQs />
        <Blog />
        <Client />
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
