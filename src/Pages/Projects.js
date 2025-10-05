import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList.js";
import '../styles/Project.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">My Personal Projects</h1>
        <p className="projects-subtitle">
          A showcase of my recent work and side projects
        </p>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            id={index}
            name={project.name}
            image={project.image}
            skills={project.Skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
