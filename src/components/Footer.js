import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from "./Icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand">
            <span className="footer-mark">SG</span>
            {profile.name}
          </Link>
          <p className="footer-tagline">
            {profile.headline} — building scalable services, APIs and cloud automation.
          </p>
          <div className="footer-socials">
            <a
              className="icon-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={19} />
            </a>
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={19} />
            </a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Send an email">
              <MailIcon size={19} />
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <h2 className="footer-heading">Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Get in touch</h2>
          <a href={`mailto:${profile.email}`} className="footer-contact">
            <MailIcon size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="footer-contact">
            <PhoneIcon size={16} /> {profile.phone}
          </a>
          <span className="footer-contact footer-contact--static">
            <LocationIcon size={16} /> {profile.location}
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="footer-built">Built with React &amp; a lot of coffee.</p>
      </div>
    </footer>
  );
}

export default Footer;
