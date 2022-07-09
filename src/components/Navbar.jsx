import React from "react";

function Navbar() {
  return (
    <nav>
      <img
        src="../icon/logo-blue.svg"
        alt="offzone logo"
        className="nav-logo whitetext"
      />
      <img
        src="../icon/logo-icon.svg"
        alt="offzone logo"
        className="nav-logo icon"
      />
      <ul>
        <a href="/">
          <li>About</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="/">
          <li>Benefits</li>
        </a>
        <a href="#works">
          <li>Work</li>
        </a>
        <a href="#pricing">
          <li>Pricing</li>
        </a>
        <a href="/">
          <li>FAQs</li>
        </a>
        <a href="/">
          <li className="contact">
            Contact <img src="../icon/flech.svg" alt="" />{" "}
          </li>
        </a>
        <li className="nav-btn">
          <img src="../icon/menu-btn.svg" alt="" />{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
