import React, { useState } from "react";
import setaEsquerda from "../assets/seta-e.png";
import setaDireita from "../assets/seta-d.png";
import "./CarrosselProjetos.css";

const projetos = [
  { id: 1, nome: "Natália Simanoviski", imagem: "projeto1.jpg", href: "/projetos" },
  { id: 2, nome: "Em breve...", imagem: "", href: "/projetos" }
];

export default function CarrosselProjetos(){
  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % projetos.length);
  const prev = () => setIndex((p) => (p - 1 + projetos.length) % projetos.length);

  const current = projetos[index];

  return (
    <div className="carrossel" role="region" aria-label="Carrossel de projetos">
      <button className="seta seta-esquerda" onClick={prev} aria-label="Projeto anterior">
        <img src={setaEsquerda} alt="" />
      </button>

      <div className="conteudo-carrossel">
        <div className="projeto">
          {current.imagem ? (
            <img src={current.imagem} alt={current.nome} />
          ) : (
            <a href={current.href} className="placeholder" aria-label="Ver projetos" />
          )}
          <p className="nome-projeto">
            {current.imagem ? current.nome : <a href="/projetos">Em breve...</a>}
          </p>
        </div>

        <div className="projeto-info reveal">
          <h2>Nossos<br />projetos!</h2>
          <a href="/projetos" className="link-projeto">Confira nosso último projeto</a>
        </div>
      </div>

      <button className="seta seta-direita" onClick={next} aria-label="Próximo projeto">
        <img src={setaDireita} alt="" />
      </button>
    </div>
  );
}
