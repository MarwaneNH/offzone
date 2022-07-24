import React, { useState } from "react";
import Footer from "./Footer";

function Navbar() {

  const [navMobile, setNavMobile] = useState(false)

  return (
    <>
      <nav>
        <a href="/" className="whitetext">
          <img
            src="../icon/logo-blue.svg"
            alt="offzone logo"
            className="nav-logo whitetext"
          />
        </a>
        <a href="/" className="icon">
          <img
            src="../icon/logo-icon.svg"
            alt="offzone logo"
            className="nav-logo icon"
          />
        </a>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#benefits">
            <li>Benefits</li>
          </a>
          <a href="#works">
            <li>Work</li>
          </a>
          <a href="#pricing">
            <li>Pricing</li>
          </a>
          <a href="#faqs">
            <li>FAQs</li>
          </a>
          <a href="#contact">
            <li className="contact">
              Contact <img src="../icon/flech.svg" alt="" />
            </li>
          </a>
          <li className={`nav-btn ${!navMobile ? '' : 'closeBtn'}`} onClick={() => setNavMobile( x => !x)}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.25C5.69036 16.25 6.25 15.6904 6.25 15C6.25 14.3096 5.69036 13.75 5 13.75C4.30964 13.75 3.75 14.3096 3.75 15C3.75 15.6904 4.30964 16.25 5 16.25Z" fill="#202123"/>
              <path d="M25.075 13.75H9.925C9.27607 13.75 8.75 14.2761 8.75 14.925V15.075C8.75 15.7239 9.27607 16.25 9.925 16.25H25.075C25.7239 16.25 26.25 15.7239 26.25 15.075V14.925C26.25 14.2761 25.7239 13.75 25.075 13.75Z" fill="#202123"/>
              <path d="M25.075 20H4.925C4.27607 20 3.75 20.5261 3.75 21.175V21.325C3.75 21.9739 4.27607 22.5 4.925 22.5H25.075C25.7239 22.5 26.25 21.9739 26.25 21.325V21.175C26.25 20.5261 25.7239 20 25.075 20Z" fill="#202123"/>
              <path d="M25.075 7.5H4.925C4.27607 7.5 3.75 8.02607 3.75 8.675V8.825C3.75 9.47393 4.27607 10 4.925 10H25.075C25.7239 10 26.25 9.47393 26.25 8.825V8.675C26.25 8.02607 25.7239 7.5 25.075 7.5Z" fill="#202123"/>
            </svg>
          </li>
        </ul>
      </nav>
      <div className={`nav-mobile ${!navMobile ? 'closedNav' : '' }`} >
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#benefits">
            <li>Benefits</li>
          </a>
          <a href="#works">
            <li>Work</li>
          </a>
          <a href="#pricing">
            <li>Pricing</li>
          </a>
          <a href="#faqs">
            <li>FAQs</li>
          </a>
          <a href="#contact">
            <li className="contact">
              Contact <img src="../icon/flech.svg" alt="" />
            </li>
          </a>
        </ul>

        <Footer />
      </div>
    </>
  );
}

export default Navbar;
