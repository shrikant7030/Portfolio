import Reveal from "../components/Reveal";
import { certifications, experiences, profile, yearsOfExperience } from "../data/profile";
import { DownloadIcon, SchoolIcon, StarIcon, WorkIcon } from "../components/Icons";
import "../styles/Experience.css";

const iconFor = (type) => {
  if (type === "education") return <SchoolIcon size={20} />;
  if (type === "certification") return <StarIcon size={20} />;
  return <WorkIcon size={20} />;
};

function Experience() {
  return (
    <div className="section experience-page">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Career</span>
          <h1 className="section-title">Professional journey</h1>
          <p className="section-subtitle">
            {yearsOfExperience()}+ years building backend systems — from data pipelines at a
            content platform to leading modernization work for enterprise clients.
          </p>
          <a
            className="btn btn--primary experience-resume"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon size={18} /> Download resume
          </a>
        </Reveal>

        <ol className="timeline">
          {experiences.map((item, i) => (
            <Reveal as="li" key={`${item.title}-${item.company}`} delay={i * 0.07} className="timeline-item">
              <span className={`timeline-marker timeline-marker--${item.type}`}>
                {iconFor(item.type)}
              </span>

              <div className="card timeline-card">
                <div className="timeline-card-head">
                  <div>
                    <h2 className="timeline-role">{item.title}</h2>
                    <p className="timeline-company">
                      {item.company} &middot; {item.place}
                    </p>
                  </div>
                  <span className={`timeline-date ${item.current ? "is-current" : ""}`}>
                    {item.current && <span className="timeline-date-dot" />}
                    {item.date}
                  </span>
                </div>

                <ul className="timeline-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {item.technologies.length > 0 && (
                  <ul className="timeline-tech">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        {certifications.length > 0 && (
          <section className="certifications">
            <Reveal className="section-head">
              <span className="eyebrow">Learning</span>
              <h2 className="section-title">Certifications &amp; upskilling</h2>
            </Reveal>

            <div className="certifications-grid">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 0.07}>
                  <article className="card certification-card">
                    <div className="certification-head">
                      <span className="certification-icon">
                        <StarIcon size={20} />
                      </span>
                      <div>
                        <h3 className="certification-title">{cert.title}</h3>
                        <p className="certification-meta">
                          {cert.issuer} &middot; {cert.date}
                        </p>
                      </div>
                    </div>
                    <ul className="certification-points">
                      {cert.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Experience;
