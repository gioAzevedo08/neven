import { useState } from "react";
import "./FAQSection.css";
import { Link } from "react-router-dom";
const faqs = [
  { question: "Quais tipos de sites vocês desenvolvem?", answer: "Desenvolvemos sites institucionais, lojas virtuais, blogs e plataformas personalizadas." },
  { question: "Posso integrar meu site a redes sociais e outros serviços?", answer: "Sim! Integramos com Instagram, WhatsApp, Analytics e muito mais." },
  { question: "Vocês também criam logotipos e identidade visual?", answer: "Sim, criamos logotipos, paletas e elementos visuais." },
  { question: "Quanto tempo leva para criar um site?", answer: "De 2 a 6 semanas em média, dependendo do escopo." },
];

export default function FAQSection(){
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-container reveal">
      <div className="faq-content">
        <h2 className="faq-title"> Alguma <br /><span>Dúvida?</span></h2>
        <p className="faq-description">
          Caso tenha alguma dúvida, confira nossa página <Link to="/faq">posso te ajudar?</Link> ou fale conosco pelas nossas <Link to="/contato">redes sociais</Link>.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item scale-hover">
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              {f.question}
              <span className={`faq-icon ${openIndex === i ? "open" : ""}`}>+</span>
            </button>
            {openIndex === i && <p className="faq-answer fade-in">{f.answer}</p>}
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <Link to="/faq" className="faq-link">confira outras perguntas frequentes</Link>
      </div>
    </div>
  );
}
