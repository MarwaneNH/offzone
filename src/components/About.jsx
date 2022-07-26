import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-img">
          <div className="blue-bg"></div>
          <img src="../image/about.jpg" alt="" />
        </div>
        <div className="about-content">
          <h1>Who Are we?</h1>
          <p>
            We are a digital agency based in Morocco built by bold , authentic
            ,passion-driven and ambitious team of unique individuals working
            together to create extraordinary brand experiences. We confront our
            constantly changing world with agility, we honor the nuances that
            make each of us unique, and we are connected by an incessant drive
            toward mastery. Above all else, We unite diverse minds who work in
            harmony to turn complex problems into growth opportunities . Coming
            to life with the aim of creating a new era in the design industry in
            Morocco
          </p>
          <p>
            Coming to life with the aim of creating a new era in the design
            industry in Morocco
          </p>

          <a href="https://offzone.vercel.app/document/profile.pdf" target="__blank">View Profile <img src="../icon/flech.svg" alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default About;
