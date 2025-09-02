import { useState } from "react";
import "../styles/FAQ.css";
import ajudaImg from '../assets/comp.png';
import { Link } from "react-router-dom";
const ajuda = [
  { question: "Quais são os horários de atendimento?", answer: "Segunda a sexta, das 9h às 18h." },
  { question: "Como posso entrar em contato?", answer: "E-mail, telefone ou redes sociais." },
  { question: "Vocês oferecem suporte pós-venda?", answer: "Sim! Suporte por até 6 meses após a entrega." },
  { question: "Posso alterar o design do site depois?", answer: "Claro! Você pode solicitar ajustes quando precisar." },
  { question: "Quais formas de pagamento aceitam?", answer: "Cartão, boleto e transferência." },
  { question: "Vocês trabalham com contrato?", answer: "Sim, formalizamos para segurança de ambos." },
  { question: "Quanto tempo leva para o orçamento?", answer: "Até 48 horas após a solicitação." },
  { question: "Criam e-mails profissionais?", answer: "Sim! Configuramos e-mails personalizados." },
  { question: "Migrar meu site para vocês?", answer: "Realizamos migração de outras plataformas." },
  { question: "Manutenção mensal?", answer: "Temos planos de manutenção contínua." },
  { question: "SEO?", answer: "Aplicamos técnicas de SEO on-page." },
  { question: "Sites multilíngues?", answer: "Sim, desenvolvemos em múltiplos idiomas." }
];

export default function AjudaSection(){
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAjuda = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="ajuda-container">
      <div className="ajuda-topo reveal">
        <div className="ajuda-texto">
          <h2 className="ajuda-titulo">POSSO AJUDAR?</h2>
          <p className="ajuda-descricao">
            Encontre respostas para as dúvidas mais comuns. Se precisar, fale com nossa equipe — a gente responde rapidinho!
          </p>
        </div>
        <img src={ajudaImg} alt="Ilustração de ajuda" className="ajuda-imagem" />
      </div>

      <div className="ajuda-lista reveal">
        {ajuda.map((faq, index) => (
          <div key={index} className="ajuda-item scale-hover">
            <button className="ajuda-pergunta" onClick={() => toggleAjuda(index)}>
              {faq.question}
              <span className={`ajuda-icon ${openIndex === index ? "open" : ""}`}>+</span>
            </button>
            {openIndex === index && <p className="ajuda-resposta fade-in">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <section className="contato">
        <div className="contato-texto">
          <p>Tem um projeto em mente ou dúvidas? Fala com a gente e vamos dar vida às suas ideias.</p>
          <h3>Não seja tímido!<br/>Entre em contato via E-mail</h3>
        </div>

        <form action="https://formspree.io/f/mzzeyrea" method="POST" className="formulario">
          <input type="text" name="nome" placeholder="Insira seu nome" required />
          <input type="email" name="email" placeholder="Insira seu e-mail" required />
          <textarea name="mensagem" placeholder="Insira sua mensagem" required></textarea>
          <button type="submit">ENVIAR</button>
        </form>

        <Link to="/contato" className="other-contact">Confira outras formas de contato.</Link>
      </section>
    </div>
  );
}
