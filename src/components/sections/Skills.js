import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../../data/profile";
import Reveal from "../Reveal";

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Toolkit</span>
          <h2 className="section-title">Technical expertise</h2>
          <p className="section-subtitle">
            The stack I reach for daily, and what I am deliberately getting better at.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <article className={`card skill-card skill-card--${group.accent}`}>
                <header className="skill-card-head">
                  <span className="skill-dot" />
                  <h3 className="skill-category">{group.category}</h3>
                </header>

                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item.name} className="skill-item">
                      <div className="skill-item-row">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-level">{item.level}%</span>
                      </div>
                      <div
                        className="skill-bar"
                        role="progressbar"
                        aria-valuenow={item.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={item.name}
                      >
                        <motion.span
                          className="skill-bar-fill"
                          initial={reduceMotion ? false : { width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          style={reduceMotion ? { width: `${item.level}%` } : undefined}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
