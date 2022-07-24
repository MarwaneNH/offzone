import React from "react";
import { blogs } from "../asset/data/Blog";
import Swiper from "./Swiper";

function Blogs() {
  return (
    <div className="works blog" id="works">
      <div className="container">
        <div className="title">
          <h1>Blog</h1>
          <p>Sometimes we love to write about what we love</p>
        </div>
        <div className="content">
          <Swiper array={blogs} />
        </div>
        <div className="barre">
          <div className="scroll-bar">
            <div></div>
          </div>
          <a href="/">
            All Articles
            <img src="../icon/flech.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
