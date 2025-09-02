import { Link } from "react-router-dom";
import React from 'react';
import '../styles/Contato.css'; // ou contato.css se preferir separar
import emailIcon from '../assets/emailazul.png';
import linkedinlIcon from '../assets/linkedinazul.png';
import instaIcon from '../assets/instaazul.png';

const Contato = () => {
  return (
    <section className="contato">
      <div className="contato-texto">
        <h2>Entre em contato conosco!</h2>
        <p>
          Se você tem um projeto em mente, deseja tirar dúvidas ou simplesmente quer saber mais sobre nossos serviços, estamos à disposição. Nossa equipe está pronta para ajudar você a transformar sua ideia em um site incrível. Fale conosco pelos nossos canais de atendimento!
        </p>
        <h3>Nos contate via E-mail</h3>
      </div>

      <form 
        action="https://formspree.io/f/mzzeyrea"
        method="POST"
        className="formulario"
      >
        <input type="text" name="nome" placeholder="Insira seu nome" required />
        <input type="email" name="email" placeholder="Insira seu e-mail" required />
        <textarea name="mensagem" placeholder="Insira sua mensagem" required></textarea>
        <button type="submit">ENVIAR</button>
      </form>

      <div className="contato-icones">
        <div>
        <img src={emailIcon} alt="Ícone de email" />
          <p><strong>E-mail</strong><br />dev.neven@gmail.com</p>
        </div>
        <div>
        <img src={instaIcon}  />
          <p><strong>Instagram</strong><br />@neven.dev</p>
        </div>
        <div>
        <img src={linkedinlIcon} />
          <p><strong>LinkedIn</strong><br />neven@com.</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
