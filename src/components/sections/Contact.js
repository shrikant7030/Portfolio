import { useState } from "react";
import { profile } from "../../data/profile";
import Reveal from "../Reveal";
import { LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from "../Icons";

const EMPTY = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please add a valid email.";
    if (form.message.trim().length < 10) next.message = "A little more detail helps (10+ characters).";
    return next;
  };

  // No backend on this site - the form composes a prefilled mail draft instead.
  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n—\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container contact-inner">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let us build something</h2>
          <p className="section-subtitle">
            Open to backend, cloud and platform engineering roles, plus interesting freelance work.
          </p>
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-details">
            <a className="contact-detail" href={`mailto:${profile.email}`}>
              <span className="contact-detail-icon">
                <MailIcon size={19} />
              </span>
              <span>
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">{profile.email}</span>
              </span>
            </a>

            <a className="contact-detail" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span className="contact-detail-icon">
                <PhoneIcon size={19} />
              </span>
              <span>
                <span className="contact-detail-label">Phone</span>
                <span className="contact-detail-value">{profile.phone}</span>
              </span>
            </a>

            <a
              className="contact-detail"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-icon">
                <LinkedInIcon size={19} />
              </span>
              <span>
                <span className="contact-detail-label">LinkedIn</span>
                <span className="contact-detail-value">shrikant-goski</span>
              </span>
            </a>

            <div className="contact-detail contact-detail--static">
              <span className="contact-detail-icon">
                <LocationIcon size={19} />
              </span>
              <span>
                <span className="contact-detail-label">Based in</span>
                <span className="contact-detail-value">{profile.location}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="card contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="contact-error">{errors.name}</span>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="contact-error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Role, project or question"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a bit about what you are working on."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="contact-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn--primary contact-submit">
                <MailIcon size={18} /> Send message
              </button>

              <p className="contact-note" role="status">
                {sent
                  ? "Your mail app should be open with the message ready to send."
                  : "This opens your mail app with the message prefilled — no data is stored."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
