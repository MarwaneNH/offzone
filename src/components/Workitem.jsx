import React from "react";

function Workitem({ project }) {
  const clk = () => document.querySelector(".calendarBtn").click();
  return (
    <div className={`item ${project.type + "-item"}`} onClick={clk}>
      {/* <a href="." target="__blank"> */}
        <div className="item-img">
          <img
            src={`../image/${project.img}`}
            alt={`${project.name} project`}
          />
          <div className="darkness"></div>
        </div>
        <div className="item-content">
          <div>
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>
          <button>View Project</button>
        </div>
      {/* </a> */}
    </div>
  );
}

export default Workitem;
