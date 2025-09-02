// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    const run = () => {
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      }
      const scroller = document.scrollingElement || document.documentElement;
      scroller.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    requestAnimationFrame(() => setTimeout(run, 0));
  }, [pathname, hash, search]);

  return null;
}
