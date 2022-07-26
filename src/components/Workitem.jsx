import React from "react";

function Workitem({ project }) {
  return (
    <div className={`item ${project.type + "-item"}`}>
      <a href="https://calendly.com/offzone/30min" target="_blank">
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
      </a>
    </div>
  );
}

export default Workitem;
