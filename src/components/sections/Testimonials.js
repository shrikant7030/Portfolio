import { testimonials } from "../../data/profile";
import Reveal from "../Reveal";
import { QuoteIcon } from "../Icons";

function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">References</span>
          <h2 className="section-title">What colleagues say</h2>
          <p className="section-subtitle">
            Recommendations from the people I have shipped with.
          </p>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <Reveal key={`${item.author}-${i}`} delay={i * 0.08}>
              <figure
                className={`card testimonial-card ${
                  item.placeholder ? "testimonial-card--placeholder" : ""
                }`}
              >
                <span className="testimonial-quote-icon">
                  <QuoteIcon size={22} />
                </span>
                <blockquote className="testimonial-quote">{item.quote}</blockquote>
                <figcaption className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden="true">
                    {item.author.trim().charAt(0).toUpperCase()}
                  </span>
                  <span>
                    <strong className="testimonial-name">{item.author}</strong>
                    <span className="testimonial-role">{item.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
