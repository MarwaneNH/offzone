import React from "react";
import { works } from "../asset/data/works";
import Swiper from "../components/Swiper";

console.log(works);

function Works() {
  return (
    <div className="works" id="works">
      <div className="container">
        <h1>Recent Work</h1>
        <div className="content">
          {/* <div className="content-container"> */}
          <Swiper />
          {/* </div> */}
        </div>
        <div className="barre">
          <div className="scroll-bar">
            <div></div>
          </div>
          <a href="/">
            More Work <img src="../icon/flech.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
