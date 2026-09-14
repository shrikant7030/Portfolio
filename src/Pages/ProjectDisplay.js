import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { getProjectBySlug, projects } from "../data/projects";
import { ArrowRightIcon, CheckIcon, ExternalIcon, GitHubIcon } from "../components/Icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="section container project-missing">
        <h1 className="section-title">Project not found</h1>
        <p className="section-subtitle">
          That project does not exist — it may have been renamed.
        </p>
        <Link className="btn btn--primary" to="/projects">
          Back to all projects
        </Link>
      </div>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="section project-detail">
      <div className="container">
        <Link to="/projects" className="project-back">
          &larr; All projects
        </Link>

        <Reveal className="project-detail-head">
          <span className="eyebrow">{project.category}</span>
          <h1 className="project-detail-title">{project.name}</h1>
          <p className="project-detail-tagline">{project.tagline}</p>

          <dl className="project-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.company}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>

          {(project.github || project.live) && (
            <div className="project-detail-actions">
              {project.github && (
                <a
                  className="btn btn--primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={18} /> View code
                </a>
              )}
              {project.live && (
                <a
                  className="btn btn--ghost"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalIcon size={18} /> Live site
                </a>
              )}
            </div>
          )}
        </Reveal>

        {project.image && (
          <Reveal delay={0.08}>
            <div className="project-hero-image">
              <img src={project.image} alt={`${project.name} preview`} />
            </div>
          </Reveal>
        )}

        <div className="project-detail-body">
          <Reveal className="project-detail-main">
            <h2 className="project-section-title">Overview</h2>
            <p className="project-overview">{project.overview}</p>

            <h2 className="project-section-title">What I built</h2>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckIcon size={18} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="project-detail-aside">
            <div className="card project-tech-card">
              <h2 className="project-section-title">Tech stack</h2>
              <ul className="project-tech-list">
                {project.tech.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {others.length > 0 && (
          <section className="project-next">
            <h2 className="project-section-title">More work</h2>
            <div className="project-next-grid">
              {others.map((other) => (
                <Link key={other.slug} to={`/projects/${other.slug}`} className="card project-next-card">
                  <span className="project-next-category">{other.category}</span>
                  <h3 className="project-next-title">{other.name}</h3>
                  <span className="project-card-cta">
                    Read more <ArrowRightIcon size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default ProjectDisplay;
