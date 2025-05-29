import React, { useState } from "react";
import setaEsquerda from "../assets/seta-e.png";
import setaDireita from "../assets/seta-d.png";
import "./CarrosselProjetos.css";

const projetos = [
  { id: 1, nome: "Natália Simanoviski", imagem: "projeto1.jpg" },
  { id: 2, nome: "Em breve...", imagem: "" }
];

export default function CarrosselProjetos() {
  const [index, setIndex] = useState(0);

  const proximoProjeto = () =>
    setIndex((prev) => (prev + 1) % projetos.length);

  const projetoAnterior = () =>
    setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

  return (
    <div className="carrossel">
      <button
        className="seta seta-esquerda"
        onClick={projetoAnterior}
      >
        <img src={setaEsquerda} alt="Anterior" />
      </button>

      <div className="conteudo-carrossel">
        <div className="projeto">
          {projetos[index].imagem ? (
            <img src={projetos[index].imagem} alt={projetos[index].nome} />
          ) : (
            <div className="placeholder" />
          )}
          {/* Nome abaixo da imagem */}
          <p className="nome-projeto">
            {projetos[index].imagem
              ? projetos[index].nome
              : <a href="/projetos">Em breve...</a>}
          </p>
        </div>

        <div className="projeto-info">
          <h2>Nossos<br />projetos!</h2>
          {/* Texto sublinhado virou link */}
          <a href="/projetos" className="link-projeto">
            Confira nosso último projeto
          </a>
        </div>
      </div>

      <button
        className="seta seta-direita"
        onClick={proximoProjeto}
      >
        <img src={setaDireita} alt="Próximo" />
      </button>
    </div>
  );
}
