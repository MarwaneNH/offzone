import React from "react";

function Navbar() {
  return (
    <nav>
      <img
        src="../icon/logo-blue.svg"
        alt="offzone logo"
        className="nav-logo"
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
      </ul>
    </nav>
  );
}

export default Navbar;
