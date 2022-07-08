import React from "react";
import Workitem from "./Workitem";
import { works } from "../asset/data/works";

console.log(works);

function Works() {
  return (
    <div className="works">
      <div className="container">
        <h1>Recent Work</h1>
        <div className="content">
          <div className="content-container">
            {works.map((x) => (
              <Workitem project={x} key={x.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
