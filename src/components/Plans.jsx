import React from "react";

function Plans() {
  return (
    <div className="plans" id="pricing">
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
              <small>Pricing may vary based on the project requirements</small>
            </div>
            <ul>
              <li>
                <strong>All the Design plan features</strong>
              </li>
              <li>
                <strong>UI/UX design</strong>
              </li>
              <li>Web & App development</li>
              <li>3 months ongoing support</li>
              <li>Real time collaboration via Slack</li>
            </ul>
            <div className="btns">
              <button>Book a Call</button>
            </div>
          </div>

          <div className="item">
            <div className="title">
              <h3>Business</h3>
              <p>
                More features, more requests, and expanded benefits to service
                higher demands.
              </p>
            </div>
            <div className="price">
              <div className="price--container">
                <span className="pg">Custom pricing</span>
              </div>
            </div>
            <ul>
              <li>All Startup plan features</li>
              <li>All our Consultancy Services</li>
              <li>Motion Design & Video Editing</li>
              <li>Real time collaboration via Slack&Meetings</li>
              <li>1 year ongoing support</li>
            </ul>
            <div className="btns">
              <button>Book a call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
