import React from "react";
import "../styles/Sobre.css";
import logoN from "../assets/logoazul.png";

export default function Sobre() {
  return (
    <div className="sobre-wrapper">
      {/* Título Centralizado */}
      <div className="sobre-topo">
        <h2 className="sobre-title">
          Conheça Mais<br />
          Sobre a <img src={logoN} alt="N" className="logo-n" />
        </h2>
      </div>

      {/* Seção do Triângulo + Conteúdo */}
      <div className="sobre-section">
        <div className="sobre-left">
          <p className="sobre-left-text">
            Transformamos<br />
            Ideias em<br />
            Experiências<br />
            Digitais
          </p>
        </div>

        <div className="sobre-right">
          <div className="sobre-text">
            <p>
              Acreditamos que a tecnologia não deve ser apenas funcional, mas também
              <strong> intuitiva, acessível</strong> e <strong>inspiradora</strong>. No Neven,
              combinamos inovação e criatividade para desenvolver soluções digitais
              que conectam pessoas e ideias. Seja para construir um site profissional
              ou uma plataforma interativa, estamos aqui para transformar <strong>conceitos</strong> em
              experiências impactantes.
            </p>
            <p>
              Desenvolvemos <strong>interfaces modernas</strong>, otimizadas e <strong>eficientes</strong> para
              atender às necessidades de cada projeto, sempre com foco na <strong>experiência do usuário</strong> e
              na qualidade do código.
            </p>
          </div>

          <div className="sobre-list">
            <h3>Trabalhamos com:</h3>
            <ul>
              <li>Criatividade que transforma ideias em realidade;</li>
              <li>Tecnologia de ponta para resultados eficientes;</li>
              <li>Design moderno e interfaces intuitivas;</li>
              <li>Código limpo, responsivo e acessível para todos.</li>
            </ul>
          </div>
        </div>
      </div> {/* fecha sua sobre-section atual */}

   {/* ——— Seção Missão ——— */}
<div className="missao-wrapper">
  {/* Faixa laranja */}
  <div className="missao-banner">
    <p>
      “Desenvolvemos mais do que sites, criamos experiências digitais que
      encantam e inovam.”
    </p>
  </div>

  {/* Título centralizado */}
  <div className="missao-topo">
    <h2>Nossa Missão</h2>
  </div>

  {/* Triângulos */}
  <div className="missao-section">
    <div className="triangulo-esquerda">
      <p className="texto-esquerda">
        Nossa missão é utilizar a tecnologia para criar soluções
        <strong> inovadoras e acessíveis</strong>, proporcionando
        <strong> experiências digitais</strong>.
      </p>
    </div>
    <div className="triangulo-direita">
      <p className="texto-direita">
        Acreditamos que um site ou aplicativo não é apenas um produto, mas
        um canal de comunicação, um espaço de interação e um meio de
        facilitar o dia a dia das pessoas.
      </p>
    </div>
  </div>
</div>
{/* ——— fim Missão ——— */}


      {/* ——— Seção Time NEVEN ——— */}
      <div className="time-section">
        <h2 className="time-title">
          Conheça o Time{" "}
          <img src={logoN} alt="N" className="logo-n" />
          
        </h2>

        <div className="time-grid">
          <div className="time-card">
            <div className="avatar-placeholder" />  
            {/* trocar por isso depois <img src={fotoDoParticipante} alt="Nome" className="avatar" /> */}

            <h3 className="time-name">Giovana de Azevedo</h3>
            <p className="time-role">Gerente de Desenvolvimento Front‑end</p>
            <p className="time-description">
              Responsável por criar interfaces modernas e intuitivas, garantindo
              uma experiência fluida e responsiva para os usuários.
            </p>
          </div>

          <div className="time-card">
            <div className="avatar-placeholder" />
            <h3 className="time-name">Giovana Moura</h3>
            <p className="time-role">Gerente de Banco de Dados</p>
            <br/>
            <p className="time-description">
              Cuida da estruturação e otimização dos dados, garantindo
              armazenamento seguro e eficiente.
            </p>
          </div>

          <div className="time-card">
            <div className="avatar-placeholder" />
            <h3 className="time-name">Júlia Vasconcellos</h3>
            <p className="time-role">Gerente de Design</p>
            <br/>
            <p className="time-description">
              Cria layouts e identidades visuais atraentes, garantindo que
              cada projeto tenha um design envolvente e intuitivo.
            </p>
          </div>

          <div className="time-card">
            <div className="avatar-placeholder" />
            <h3 className="time-name">Kaleb Bastos</h3>
            <p className="time-role">Gerente de Desenvolvimento Back‑end</p>
            <p className="time-description">
              Trabalha na lógica do sistema, conexão com o banco de dados e
              garantindo que tudo funcione perfeitamente.
            </p>
          </div>

          <div className="time-card">
            <div className="avatar-placeholder" />
            <h3 className="time-name">Letícia Viturino</h3>
            <p className="time-role">Gerente de Desenvolvimento Front‑end</p>
            <p className="time-description">
              Responsável por criar interfaces modernas e intuitivas, garantindo
              uma experiência fluida e responsiva para os usuários.
            </p>
          </div>
        </div>
      </div>
      {/* ——— fim Time NEVEN ——— */}
      <div className="slogan-sobre">
    <p>
    “Neven, onde suas ideias ganham forma”
    </p>
    </div> 
</div>
  );
}
