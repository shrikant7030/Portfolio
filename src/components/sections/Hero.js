import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { profile, stats } from "../../data/profile";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "../Icons";

const roles = ["Node.js & NestJS", "AWS & Azure", "PostgreSQL & MongoDB", "System Design"];

function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="hero">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.span className="hero-status" {...rise(0)}>
          <span className="hero-status-dot" />
          Open to backend &amp; cloud engineering roles
        </motion.span>

        <motion.h1 className="hero-title" {...rise(0.08)}>
          {profile.name.split(" ")[0]} builds backends
          <br />
          that <span className="gradient-text">scale quietly</span>.
        </motion.h1>

        <motion.p className="hero-summary" {...rise(0.16)}>
          {profile.summary}
        </motion.p>

        <motion.div className="hero-chips" {...rise(0.22)}>
          {roles.map((role) => (
            <span key={role} className="tag">
              {role}
            </span>
          ))}
        </motion.div>

        <motion.div className="hero-actions" {...rise(0.3)}>
          <a
            className="btn btn--primary"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon size={18} /> Download resume
          </a>
          <Link className="btn btn--ghost" to="/projects">
            View my work <ArrowRightIcon size={18} />
          </Link>
        </motion.div>

        <motion.div className="hero-socials" {...rise(0.36)}>
          <a
            className="icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Send an email">
            <MailIcon size={20} />
          </a>
          <a
            className="icon-link"
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            aria-label="Call"
          >
            <PhoneIcon size={20} />
          </a>
        </motion.div>

        <motion.dl className="hero-stats" {...rise(0.44)}>
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt className="hero-stat-value">{stat.value}</dt>
              <dd className="hero-stat-label">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a className="hero-scroll" href="#skills" aria-label="Scroll to skills">
        <ArrowDownIcon size={22} />
      </a>
    </section>
  );
}

export default Hero;
