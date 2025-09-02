import React, { useState } from "react";
import "./CarrosselProjetos.css";
import bannerNeven from "../assets/banner.png";
import bannerNatalia from "../assets/bannernatalia.png";
import { Link } from "react-router-dom";

const projetos = [
  { id: 1, nome: "Natália Simanoviski", imagem: bannerNatalia, href: "/projetos" },
  { id: 2, nome: "Em breve...", imagem: bannerNeven, href: "/projetos" }
];


export default function CarrosselProjetos() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % projetos.length);
  const prev = () => setIndex((p) => (p - 1 + projetos.length) % projetos.length);

  const current = projetos[index];

  return (
    <div className="carrossel" role="region" aria-label="Carrossel de projetos">
      {/* Seta esquerda (mesmo SVG, espelho no CSS) */}
      <button className="seta seta-esquerda" onClick={prev} aria-label="Projeto anterior">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {/* chevron sólido */}
          <path d="M9 5l7 7-7 7V5z" />
        </svg>
      </button>

      <div className="conteudo-carrossel">
        <div className="projeto">
          {current.imagem ? (
            <img src={current.imagem} alt={current.nome} />
          ) : (
            <Link to={current.href} className="placeholder" aria-label="Ver projetos" />
          )}
          <p className="nome-projeto">
            {current.imagem ? current.nome : <Link to="/projetos">Em breve...</Link>}
          </p>
        </div>

        <div className="projeto-info reveal">
          <h2>Nossos<br />projetos!</h2>
          <Link to="/projetos" className="link-projeto">Confira nosso último projeto</Link>
        </div>
      </div>

      {/* Seta direita */}
      <button className="seta seta-direita" onClick={next} aria-label="Próximo projeto">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7V5z" />
        </svg>
      </button>
    </div>
  );
}
