import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BackToTop({ threshold = 300, targetId, right = 24, bottom = 24 }) {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const elem = targetId ? document.getElementById(targetId) : null;
    const targets = [window, ...(elem ? [elem] : [])];

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMQ = (e) => setReduceMotion(e.matches);
    setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onMQ);

    const winTop = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const onScroll = () => {
      const doc = document.documentElement;
      const wTop = winTop();
      const wMax = doc.scrollHeight - doc.clientHeight;

      let anyTop = wTop;
      let anyMax = wMax;
      if (elem) {
        anyTop = Math.max(anyTop, elem.scrollTop || 0);
        anyMax = Math.max(anyMax, (elem.scrollHeight - elem.clientHeight) || 0);
      }
      setVisible(anyTop > threshold);
      doc.style.setProperty("--scroll-progress", `${(anyTop / (anyMax || 1)) * 100}`);
    };

    onScroll();
    targets.forEach(t => t.addEventListener("scroll", onScroll, { passive: true }));
    window.addEventListener("resize", onScroll);

    return () => {
      targets.forEach(t => t.removeEventListener?.("scroll", onScroll));
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener?.("change", onMQ);
    };
  }, [threshold, targetId]);

  const scrollTop = () => {
    const elem = targetId ? document.getElementById(targetId) : null;
    const opts = { top: 0, behavior: reduceMotion ? "auto" : "smooth" };
    if (elem && elem.scrollTop > 0) elem.scrollTo(opts);
    else window.scrollTo(opts);
  };

  const style = {
    position: "fixed",
    right: `clamp(12px, 3vw, ${right}px)`,
    bottom: `calc(clamp(12px, 3vw, ${bottom}px) + env(safe-area-inset-bottom, 0px))`,
    zIndex: 2147483647,
    width: 46, height: 46,
    borderRadius: 999,
    background: "var(--brand-azul-600, #2C6B8C)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.25)",
    display: "grid", placeItems: "center",
    boxShadow: "0 10px 28px rgba(17,24,39,.22)",
    transition: "opacity .25s, transform .25s",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(10px)",
    pointerEvents: visible ? "auto" : "none",
  };

  const btn = (
    <button type="button" aria-label="Voltar ao topo" onClick={scrollTop} style={style}>
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5l-7 7h4v7h6v-7h4z" fill="currentColor" />
      </svg>
    </button>
  );

  return createPortal(btn, document.body);
}
