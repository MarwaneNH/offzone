import React from "react";
import { works } from "../asset/data/works";
import Swiper from "../components/Swiper";

function Works() {
  return (
    <div className="works" id="works">
      <div className="container">
        <h1>Recent Work</h1>
        <div className="content">
          {/* <div className="content-container"> */}
          <Swiper array={works} />
          {/* </div> */}
        </div>
        <div className="barre">
          <div className="scroll-bar">
            <div></div>
          </div>
          <a
            href="https://offzone.vercel.app/document/portfolio.pdf"
            target="__blank"
          >
            More Work <img src="../icon/flech.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
