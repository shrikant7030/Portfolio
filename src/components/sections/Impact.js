import { achievements, awards } from "../../data/profile";
import Reveal from "../Reveal";
import { StarIcon } from "../Icons";

function Impact() {
  return (
    <section className="section" id="impact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Impact</span>
          <h2 className="section-title">Work that moved a number</h2>
          <p className="section-subtitle">
            Shipped outcomes from enterprise projects, measured the way the business measured them.
          </p>
        </Reveal>

        <div className="impact-grid">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="card impact-card">
                <span className="impact-metric gradient-text">{item.metric}</span>
                <h3 className="impact-title">{item.title}</h3>
                <p className="impact-detail">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {awards.length > 0 && (
          <div className="awards-block">
            <Reveal>
              <h3 className="awards-heading">
                Awards &amp; recognition
                {awards.length > 1 && <span className="awards-count">{awards.length}</span>}
              </h3>
            </Reveal>

            <div className="awards-row">
              {awards.map((award, i) => (
                <Reveal key={`${award.title}-${award.date}`} delay={i * 0.06}>
                  <article className="card award-card">
                    <span className="award-icon">
                      <StarIcon size={22} />
                    </span>
                    <div>
                      <h4 className="award-title">{award.title}</h4>
                      <p className="award-meta">
                        {award.org} &middot; {award.date}
                      </p>
                      <p className="award-description">{award.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Impact;
