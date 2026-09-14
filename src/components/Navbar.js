import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/profile";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page behind the mobile sheet from scrolling.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-mark">SG</span>
          <span className="navbar-name">{profile.name}</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "navbar-link is-active" : "navbar-link")}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="navbar-link" to="/#contact">
            Contact
          </Link>
          <a
            className="btn btn--primary navbar-resume navbar-resume--mobile"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon size={17} /> Resume
          </a>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <SunIcon size={19} /> : <MoonIcon size={19} />}
          </button>

          <a
            className="btn btn--primary navbar-resume"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon size={17} /> Resume
          </a>

          <button
            type="button"
            className="navbar-icon-btn navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <div className="navbar-progress" style={{ width: `${progress}%` }} />
    </header>
  );
}

export default Navbar;
