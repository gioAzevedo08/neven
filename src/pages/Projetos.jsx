import "../styles/Projetos.css";

/* seus vídeos curtos (.mp4) */
import v1 from "../assets/media/sessao-video-um.mp4";
import v2 from "../assets/media/sessao-video-dois.mp4";
import v3 from "../assets/media/sessao-video-tres.mp4";

export default function Projetos(){
  return (
    <div className="projetos-container">
      {/* Fileira 1: texto + vídeo */}
      <div className="row row1 reveal">
        <div className="text-block">
          <h2>Nossos Projetos</h2>
          <p className="descricao">
            Na <strong>NEVEN</strong>, criamos sites personalizados unindo design, funcionalidade e estratégia digital.
            Explore alguns projetos e soluções sob medida que já entregamos.
          </p>
        </div>
        <div className="image-block">
          <video
            className="media-card"
            src={v1}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Preview do projeto Natália — sessão 1"
          />
        </div>
      </div>

      {/* Fileira 2: vídeo + CTA */}
      <div className="row row2 reveal">
        <div className="image-block">
          <video
            className="media-card"
            src={v2}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Preview do projeto Natália — sessão 2"
          />
        </div>
        <div className="text-block">
          <p className="descricao">
            <strong>Quer ver o seu projeto aqui também?</strong> A gente transforma sua ideia
            em um site moderno, responsivo e com desempenho top.{" "}
            <a href="/contato">Fale conosco</a> e vamos tirar do papel. 🚀
          </p>
        </div>
      </div>

      {/* Fileira 3: vídeo grande */}
      <div className="row row3 reveal rw-lage">
        <video
          className="large-media-card"
          src={v3}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Preview em destaque — sessão 3"
        />
      </div>

      <p className="link-acesso">
        <a href="https://tcc-nutri.vercel.app" target="_blank" rel="noreferrer">
          Clique e acesse o site da nossa cliente, Natália Simanovski!
        </a>
      </p>
    </div>
  );
}
