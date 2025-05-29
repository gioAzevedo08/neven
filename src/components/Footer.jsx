import React from "react";
import "./Footer.css"; // Importa o CSS separado
import logo from "../assets/nevenfooter.png"; // Substitua pelo caminho correto
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top-bar"></div> {/* Faixa laranja fina */}
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="NEVEN" />
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Início</h4>
                        <a href="/">Home</a>
                        <a href="/sobre">Nosso Time</a>
                        <a href="/seusite">Seu Site</a>
                    </div>
                    <div className="footer-section">
                        <h4>Empresa</h4>
                        <a href="/sobre">Sobre Nós</a>
                        <a href="/contato">Contato</a>
                    </div>
                    <div className="footer-section">
                        <h4>Ajuda</h4>
                        <a href="/faq">FAQ</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/seu_perfil" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="mailto:seuemail@example.com">
                            <img src={emailIcon} alt="E-mail" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-bar">
                © 2025 Copyright - NEVEN
            </div>
        </footer>
    );
};

export default Footer;
