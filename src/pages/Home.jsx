import "../styles/Home.css";
import logo from "../assets/logoazul.png";
import FAQSection from "../components/FAQSection";
import CarrosselProjetos from "../components/CarrosselProjetos";
import logoN from "../assets/logolaranja.png";

export default function Home(){
  return (
    <section>
      <div className="home-container container reveal">
        <div className="home-text">
          <h1>Olá, Nós <br /> Somos a</h1>
          <img src={logo} alt="NEVEN" className="home-logo" />
        </div>
        <div className="home-description">
          <p>
            Bem-vindo ao <strong>Neven</strong>.<br />
            Criamos soluções digitais que unem tecnologia e design para <strong>desenvolver sites</strong>.<br />
            Nosso foco é transformar ideias em experiências intuitivas, funcionais e inovadoras.
          </p>
        </div>
      </div>

      <div className="highlight-banner reveal">
        <p><em>Por que escolher a <span className="neven-highlight">Neven?</span></em></p>
      </div>

      <div className="features">
        <div className="feature container">
          <div className="triangle left"></div>
          <div className="feature-text  ">
            <h3>1. Inovação constante</h3>
            <p>Buscamos ideias novas e soluções criativas para elevar cada entrega.</p>
          </div>
        </div>

        <div className="feature container">
          <div className="triangle right"></div>
          <div className="feature-text  ">
            <h3>2. Compromisso com a qualidade</h3>
            <p>Padrões elevados para garantir excelência e impacto real.</p>
          </div>
        </div>

        <div className="feature container">
          <div className="triangle left"></div>
          <div className="feature-text  ">
            <h3>3. Foco no usuário</h3>
            <p>Experiências que fazem sentido para quem usa de verdade.</p>
          </div>
        </div>

        <blockquote className="faq-quote">“Neven, onde suas ideias ganham forma”</blockquote>

        <FAQSection />
        <CarrosselProjetos />

        <div className="conecte-se-section reveal">
          <h2 className="conecte-se-title">
            Conecte-se com a <img src={logoN} alt="N" className="logo-n" />
          </h2>
          <div className="conecte-se-content">
            <p>Quer saber mais sobre o nosso grupo e acompanhar nossos projetos? Estamos sempre abertos a novas conexões!</p>
            <p>Envie uma mensagem, siga nossas <a href="/redes">redes sociais</a> ou entre em contato por <a href="/contato">e-mail</a>.</p>
            <p>Confira nossa página de <a href="/contato">contato</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
