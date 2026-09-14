import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

function ProjectItem({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-media">
        <img src={project.image} alt="" loading="lazy" />
        <span className="project-card-category">{project.category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-tagline">{project.tagline}</p>

        <ul className="project-card-tech">
          {project.tech.slice(0, 4).map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
          {project.tech.length > 4 && (
            <li className="tag">+{project.tech.length - 4}</li>
          )}
        </ul>

        <span className="project-card-cta">
          View case study <ArrowRightIcon size={17} />
        </span>
      </div>
    </Link>
  );
}

export default ProjectItem;
