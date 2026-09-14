import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section container" style={{ textAlign: "center" }}>
      <span className="eyebrow">404</span>
      <h1 className="section-title">This page went missing</h1>
      <p className="section-subtitle">
        The link may be out of date. Everything else is still where you left it.
      </p>
      <Link className="btn btn--primary" to="/" style={{ marginTop: 24 }}>
        Back home
      </Link>
    </div>
  );
}

export default NotFound;
