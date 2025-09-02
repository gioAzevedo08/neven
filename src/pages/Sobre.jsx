import "../styles/Sobre.css";
import logoN from "../assets/logoazul.png";
import giovanaM from "../assets/team/giovana-moura.png";
import giovanaA from "../assets/team/giovana-azevedo.png";
import juliaV from "../assets/team/julia.png";
import kalebB from "../assets/team/kaleb.png";
import leticiaV from "../assets/team/leticia.png";
import { Link } from "react-router-dom";

export default function Sobre(){
  return (

    <div className="sobre-wrapper">
      <div className="sobre-topo reveal">
        <h2 className="sobre-title">
          Conheça Mais<br />
          Sobre a <img src={logoN} alt="N" className="logo-n" />
        </h2>
      </div>

      <div className="sobre-section">
        <div className="sobre-left" aria-hidden="true"></div>
        <p className="sobre-left-text">Transformamos<br/>Ideias em<br/>Experiências<br/>Digitais</p>

        <div className="sobre-right container">
          <div className="sobre-text">
            <p>
              Acreditamos que a tecnologia não deve ser apenas funcional, mas também
              <strong> intuitiva, acessível</strong> e <strong>inspiradora</strong>. No Neven,
              unimos inovação e criatividade para construir soluções digitais que conectam pessoas e ideias.
            </p>
            <p>
              Desenvolvemos <strong>interfaces modernas</strong>, otimizadas e <strong>eficientes</strong>, com foco em
              <strong> experiência do usuário</strong> e qualidade de código.
            </p>
          </div>

          <div className="sobre-list">
            <h3>Trabalhamos com:</h3>
            <ul>
              <li>Criatividade que vira produto;</li>
              <li>Tecnologia de ponta;</li>
              <li>Design moderno e intuitivo;</li>
              <li>Código limpo, responsivo e acessível.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="missao-wrapper">
        <div className="missao-banner reveal">
          <p>“Desenvolvemos mais do que sites, criamos experiências digitais que encantam e inovam.”</p>
        </div>

        <div className="missao-topo">
          <h2>Nossa Missão</h2>
        </div>

        <div className="missao-section">
          <div className="triangulo-esquerda">
            <p className="texto-esquerda">Nossa missão é usar tecnologia para criar soluções <strong>inovadoras e acessíveis</strong>, entregando <strong>experiências digitais</strong>.</p>
          </div>
          <div className="triangulo-direita">
            <p className="texto-direita">Um site não é só produto: é canal de comunicação, espaço de interação e forma de facilitar o dia a dia.</p>
          </div>
        </div>
      </div>

      <div className="time-section">
        <h2 className="time-title">Conheça o Time <img src={logoN} alt="N" className="logo-n" /></h2>

        <div className="time-grid">
          <div className="time-card scale-hover">
            <img className="avatar-placeholder" src={giovanaA} alt="Giovana de Azevedo" loading="lazy" width="104" height="104" />

            <h3 className="time-name">Giovana de Azevedo</h3>
            <p className="time-role">Gerente de Desenvolvimento Front-end</p>
            <p className="time-description">Interfaces modernas e responsivas para experiências fluidas.</p>
          </div>

          <div className="time-card scale-hover">
            <img className="avatar-placeholder" src={giovanaM} alt="Giovana Moura" loading="lazy" width="104" height="104" />
            <h3 className="time-name">Giovana Moura</h3>
            <p className="time-role">Gerente de Banco de Dados</p>
            <p className="time-description">Estruturação e otimização de dados com segurança e eficiência.</p>
          </div>

          <div className="time-card scale-hover">
            <img className="avatar-placeholder" src={juliaV} alt="Júlia Vasconcellos" loading="lazy" width="104" height="104" />
            <h3 className="time-name">Júlia Vasconcellos</h3>
            <p className="time-role">Gerente de Design</p>
            <p className="time-description">Layouts e identidades visuais envolventes e intuitivas.</p>
          </div>

          <div className="time-card scale-hover">
             <img className="avatar-placeholder" src={kalebB} alt="Kaleb Bastos" loading="lazy" width="104" height="104" />
            <h3 className="time-name">Kaleb Bastos</h3>
            <p className="time-role">Gerente de Desenvolvimento Back-end</p>
            <p className="time-description">Lógica de sistema, banco de dados e integrações robustas.</p>
          </div>

          <div className="time-card scale-hover">
             <img className="avatar-placeholder" src={leticiaV} alt="Letícia Viturino" loading="lazy" width="104" height="104" />
            <h3 className="time-name">Letícia Viturino</h3>
            <p className="time-role">Gerente de Desenvolvimento Front-end</p>
            <p className="time-description">Interfaces modernas e acessíveis com foco no usuário.</p>
          </div>
        </div>
      </div>

      <div className="slogan-sobre">
        <p>“Neven, onde suas ideias ganham forma”</p>
      </div>


    </div>
  );
}
