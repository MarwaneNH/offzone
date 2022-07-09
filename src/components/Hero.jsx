import React from "react";

function Hero() {
  return (
    <div className="hero">
      <a href="#services" className="flech-btn">
        <img src="../icon/flech.svg" alt="" height='15px' />
      </a>
      <div className="bg">
        <img src="../image/3D-object01.png" alt="" />
        <img src="../image/3D-object02.png" alt="" />
        <img src="../image/3D-object03.png" alt="" />
      </div>
      <div className="content">
        <h1>
          We accelerate tomorrow’s vision by <i>unlocking</i> business{" "}
          <span>potential today.</span>
        </h1>
        <p>
          First Digital Agency in Morocco with <span>subscriptions </span>
          model and <span>unlimited request</span> to scale your business.
        </p>
        <button>Get Started
          <img src="../icon/large-flech.svg" alt="" />
        </button>
      </div>

      <div className="happy-client">
        <p>Happy Clients</p>
        <img src="../icon/ENST-client.svg" alt="" />
        <img src="../icon/Q8R-client 1.svg" alt="" />
        <img src="../icon/Asset 1 1.svg" alt="" />
        <img src="../icon/A,F-client.svg" alt="" />
        <img src="../icon/VFH-client.svg" alt="" />
        <img src="../icon/Untitled-1.svg" alt="" />
        <img src="../icon/Sinbad-client.svg" alt="" />
        <img src="../icon/Safouan-client.svg" alt="" />
        <img src="../icon/Mad-client.svg" alt="" />
        <img src="../icon/BYa's-client.svg" alt="" />
        <img src="../icon/bykhouloud-client.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
