import React from 'react';
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { projectList } from "../helpers/ProjectList.js";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className="projectList">
        {projectList.map((project, index) => { 
          return <ProjectItem id= {index} name={project.name} image={project.image}/>
        })}
        {/* <ProjectItem name="Social Media Website" image={image1}/>
        <ProjectItem name="Social Website" image={image1}/> */}
      </div>
    </div>
  )
}

export default Projects