import React from "react";

function Footer() {
  return (
    <footer>
      <div className="isInterested">
        <div className="content">
          <h2>Interested?</h2>
          <p className="highlight">Let’s chat,we respond fast</p>
          <p>
            Let us help you and guide through OFFZONE, and find out how we can
            unlock your business potential.
          </p>
        </div>
        <div className="action">
          <img src="../image/Asset 7@288x 1.png" alt="" />
          <span>
            Book a call/ <br />
            consultation
          </span>
          <div className="bg"></div>
        </div>
        <div className="action">
          <div className="bg"></div>
          <img src="../image/Asset 10@288x 1.png" alt="" />
          <span>
            Send us <br />
            an email
          </span>
        </div>
      </div>

      <div className="footer-nav">
        <div>
          <img src="../icon/logo-white.svg" alt="offzone logo" />
          <hr />
          <div>
            <img src="../icon/logo-linkedin.svg" alt="linkedin logo" />
            <img src="../icon/logo-instagram.svg" alt="instagram logo" />
            <img src="../icon/logo-facebook.svg" alt="facebook logo" />
          </div>
        </div>
        <ul>
          <a href="/">
            <li>Latest projects</li>
          </a>
          <a href="/">
            <li>Pricing</li>
          </a>
          <a href="/">
            <li>FAQs</li>
          </a>
          <a href="/">
            <li>Contact</li>
          </a>
          <a href="/">
            <li>Client login</li>
          </a>
          <a href="/">
            <li>Blog</li>
          </a>
          <a href="/">
            <li>Terms & conditions</li>
          </a>
          <a href="/">
            <li>Privacy policy</li>
          </a>
        </ul>
      </div>

      <a href="#top" className="to-top">
        <img src="../icon/flech.svg" alt="" />
      </a>
    </footer>
  );
}

export default Footer;