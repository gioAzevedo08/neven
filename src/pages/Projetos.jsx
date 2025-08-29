import "../styles/Projetos.css";

export default function Projetos(){
  return (
    <div className="projetos-container">
      <div className="row row1 reveal">
        <div className="text-block">
          <h2>Nossos Projetos</h2>
          <p className="descricao">
            Na <strong>NEVEN</strong>, criamos sites personalizados unindo design, funcionalidade e estratégia digital.
            Explore alguns projetos e soluções sob medida que já entregamos.
          </p>
        </div>
        <div className="image-block">
          <div className="image-placeholder">Imagem/Vídeo</div>
        </div>
      </div>

      <div className="row row2 reveal">
        <div className="image-block">
          <div className="image-placeholder">Imagem/Vídeo</div>
        </div>
        <div className="text-block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum ullamcorper arcu, ut eleifend mi congue id.
            Etiam lobortis neque nisl, bibendum consequat mauris varius vel.
          </p>
        </div>
      </div>

      <div className="row row3 reveal">
        <div className="large-image-placeholder">Imagem/Vídeo Grande</div>
      </div>

      <p className="link-acesso">
        <a href="https://www.nataliasimanovski.com.br" target="_blank" rel="noreferrer">
          Clique e acesse o site da nossa cliente, Natália Simanovski!
        </a>
      </p>
    </div>
  );
}
