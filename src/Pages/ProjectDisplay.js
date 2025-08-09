import React from 'react';
import {useParams } from 'react-router-dom';
import {projectList} from "../helpers/ProjectList.js";
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className="project">
        <h1>{project.name}</h1><br></br>
        <img src={project.image}/>
        <br></br><br></br>
        <p>
            Skills: {project.Skills}
        </p><br></br><br></br>
        <GithubIcon/>
    </div>
  )
}

export default ProjectDisplay