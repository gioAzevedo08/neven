import React from "react";
import "../styles/Projetos.css";

function Projetos() {
  return (
    <div className="projetos-container">
      
     

      {/* Fileira 1: Texto à esquerda e imagem/vídeo à direita */}
      <div className="row row1">
        <div className="text-block">
        <h2>Nossos Projetos</h2>
        <p className="descricao">

        Na <strong>NEVEN</strong>, criamos sites personalizados para cada cliente,
        alinhando design, funcionalidade e estratégia digital. Aqui você encontrará
        alguns de nossos projetos, cada um com um propósito único e soluções sob medida!
      </p>
        </div>
        <div className="image-block">
          <div className="image-placeholder">Imagem/Vídeo</div>
        </div>
      </div>

      {/* Fileira 2: Imagem/vídeo à esquerda e texto à direita */}
      <div className="row row2">
        <div className="image-block">
          <div className="image-placeholder">Imagem/Vídeo</div>
        </div>
        <div className="text-block">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum ullamcorper arcu, ut eleifend mi congue id. Etiam lobortis neque nisl, bibendum consequat mauris varius vel. Vestibulum vel varius turpis
          </p>
        </div>
      </div>

      {/* Fileira 3: Bloco grande com título, descrição e imagem/vídeo abaixo */}
      <div className="row row3">
          <div className="large-image-placeholder">Imagem/Vídeo Grande</div>

      </div>

      <p className="link-acesso">
        <a
          href="https://www.nataliasimanovski.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Clique aqui e acesse você mesmo o site de nossa cliente, Natália Simanovski!
        </a>
      </p>

      
    </div>
  );
}

export default Projetos;
