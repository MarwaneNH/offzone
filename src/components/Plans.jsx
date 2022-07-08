import React from "react";

function Plans() {
  return (
    <div className="plans">
      <div className="container">
        <h1>Let’s keep it simple</h1>
        <p>
          No contracts or surprises. Unlimited requests, Unlimited revesions.
          Pause or cancel anytime.
        </p>
        <div className="content">
          <div className="item special">
            <div className="ticket">
              <strong>7 Day</strong> money-back guarantee
            </div>
            <div className="title">
              <h3>Design</h3>
              <p>
                Everything design related your business needs with
                <strong> best quality </strong>
                guaranteed in <strong> short time</strong>.
              </p>
            </div>
            <div className="price">
              <div className="price--container">
                <span className="p">$100</span>
                <span className="pd">/month</span>
                <span className="pn">
                  $700 <small> /month</small>
                </span>
              </div>
              <small>Pause or cancel anytime</small>
            </div>
            <ul>
              <li>
                <strong>All Design scope</strong>
              </li>
              <li>Unlimited revisions</li>
              <li>Unlimited requests</li>
              <li>Source files included</li>
              <li>Pause or cancel anytime</li>
            </ul>
            <div className="btns">
              <button>Get Started</button>
              <a href="/">BOOK A CALL</a>
            </div>
          </div>

          <div className="item">
            <div className="title">
              <h3>Startup</h3>
              <p>
                For small businesses in need of design & development with an
                ongoing support
              </p>
            </div>
            <div className="price">
              <div className="price--container">
                <span className="pg">$1000-$12000</span>
              </div>
              <small>Pause or cancel anytime</small>
            </div>
            <ul>
              <li>
                <strong>All Design scope</strong>
              </li>
              <li>Unlimited revisions</li>
              <li>Unlimited requests</li>
              <li>Source files included</li>
              <li>Pause or cancel anytime</li>
            </ul>
            <div className="btns">
              <button>Get Started</button>
              <a href="/">BOOK A CALL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
