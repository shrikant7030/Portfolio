import { useMemo, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import "../styles/Project.css";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="section projects-page">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h1 className="section-title">Selected work</h1>
          <p className="section-subtitle">
            Enterprise platforms, internal tooling and side projects — what they did and what
            changed because of them.
          </p>
        </Reveal>

        <div className="projects-filters" role="tablist" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={`projects-filter ${filter === category ? "is-active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 5) * 0.06}>
              <ProjectItem project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
