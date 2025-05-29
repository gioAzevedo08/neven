import React from "react";
import "../styles/Home.css";
import logo from "../assets/logoazul.png";
import FAQSection from "../components/FAQSection";
import CarrosselProjetos from "../components/CarrosselProjetos";
import logoN from "../assets/logolaranja.png";

const Home = () => {
  return (
    <section>
      <div className="home-container">
        <div className="home-text">
          <h1>Olá, Nós <br /> Somos a</h1>
          <img src={logo} alt="NEVEN" className="home-logo" />
        </div>
        <div className="home-description">
          <p>
            Bem-vindo ao <strong>Neven</strong>. <br />
            Criamos soluções digitais que unem tecnologia e design para <strong>desenvolver sites</strong>. <br />
            Nosso foco é transformar ideias em experiências intuitivas, funcionais e inovadoras.
          </p>
        </div>
      </div>

      {/* Faixa laranja */}
      <div className="highlight-banner">
        <p><em>Por que escolher a <span className="neven-highlight">Neven?</span></em></p>
      </div>

      {/* Seção de benefícios */}
      <div className="features">
        {/* Feature 1 */}
        <div className="feature">
          <div className="triangle left"></div>
          <div className="feature-text">
            <h3>1. Inovação constante</h3>
            <p>Estamos sempre buscando novas ideias e soluções criativas para melhorar nossos projetos.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <div className="triangle right"></div>
          <div className="feature-text">
            <h3>2. Compromisso com a qualidade</h3>
            <p>Nosso trabalho segue altos padrões para garantir excelência e impacto positivo.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <div className="triangle left"></div>
          <div className="feature-text">
            <h3>3. Foco no usuário</h3>
            <p>Desenvolvemos soluções pensando no que é melhor para o nosso público.</p>
          </div>
        </div>
        <div>
          <blockquote className="faq-quote">“Neven, onde suas ideias ganham forma”</blockquote>
          {/* faq */}
          <FAQSection />
          <CarrosselProjetos />

          {/* ←==== AQUI COMEÇA A NOVA SEÇÃO “Conecte‑se” ====→ */}
          <div className="conecte-se-section">
            <h2 className="conecte-se-title">
              Conecte‑se com a{" "}
              <img src={logoN} alt="N" className="logo-n" />
  
            </h2>
            <div className="conecte-se-content">
              <p>
                Quer saber mais sobre o nosso grupo e acompanhar nossos projetos?  
                Estamos sempre abertos a novas conexões!
              </p>
              <p>
                Envie uma mensagem, siga nossas{" "}
                <a href="/redes">redes sociais</a>  
                ou entre em contato pelo{" "}
                <a href="/contato">e‑mail</a>.  
                Estamos ansiosos para conversar com você!
              </p>
              <p>
                Confira nossa página de{" "}
                <a href="/contato">contato</a>
              </p>
            </div>
          </div>
          {/* ←==== FIM DA NOVA SEÇÃO ====→ */}

        </div>
      </div>
    </section>
  );
};

export default Home;
