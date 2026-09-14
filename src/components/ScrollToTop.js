import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route changes should start at the top of the page, except when the URL
 * carries a hash — then scroll to that section once it has rendered.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
