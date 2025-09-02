import "./Footer.css";
import logo from "../assets/nevenfooter.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer>
      <div className="footer-top-bar" />
      <div className="footer-content">
        <div className="footer-logo scale-hover" aria-label="NEVEN">
          <img src={logo} alt="NEVEN" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Início</h4>
            <Link to="/">Home</Link>
            <Link to="/sobre">Nosso Time</Link>
            <Link to="/seusite">Seu Site</Link>
          </div>
          <div className="footer-section">
            <h4>Empresa</h4>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/contato">Contato</Link>
          </div>
          <div className="footer-section">
            <h4>Ajuda</h4>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer-section">
            <h4>Conecte-se</h4>
            <div className="footer-social">
              <Link to="https://www.instagram.com/neven.dev" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </Link>
              <Link to="https://www.linkedin.com/in/seu_perfil" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </Link>
              <Link to="/contato">
                <img src={emailIcon} alt="E-mail" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">© 2025 Copyright - NEVEN</div>
    </footer>
  );
}
