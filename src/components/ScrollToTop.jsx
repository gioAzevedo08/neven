import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    const scrollNow = () => {
      // Se tiver hash (#id), tenta rolar até o elemento
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      // Caso normal: volta pro topo do documento
      const scroller = document.scrollingElement || document.documentElement;
      scroller.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    // roda após o paint pra garantir que o layout novo esteja na tela
    requestAnimationFrame(() => {
      // e roda mais uma vez logo depois (caso conteúdo async mude altura)
      setTimeout(scrollNow, 0);
    });
  }, [pathname, hash, search]);

  return null;
}
