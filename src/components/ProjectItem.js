import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

/** "Shure Associate Portal" -> "SA", "Packtrak — Legacy Modernization" -> "PA" */
export function projectInitials(name) {
  const main = name.split("—")[0].trim();
  const words = main.split(/\s+/).filter(Boolean);
  const letters = words.length > 1 ? words[0][0] + words[1][0] : main.slice(0, 2);
  return letters.toUpperCase();
}

function ProjectItem({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className={`project-card-media ${project.image ? "" : "project-card-media--blank"}`}>
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <span className="project-monogram" aria-hidden="true">
            {projectInitials(project.name)}
          </span>
        )}
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
