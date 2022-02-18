import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="link-img-wrapper">
      <a href={project.repo} alt={project.repo}>
        <h4 className="project-title">{project.name} Repository</h4>
      </a>
      <a href={project.url}>
        <img src={project.image} alt={project.name} className="app-img" />
      </a>
    </div>
  );
};

export default Project;
