import { useState } from "react";
import "./FAQSection.css"; // Importa os estilos

const faqs = [
  {
    question: "Quais tipos de sites vocês desenvolvem?",
    answer: "Desenvolvemos sites institucionais, lojas virtuais, blogs e plataformas personalizadas conforme a necessidade do cliente.",
  },
  {
    question: "Posso integrar meu site a redes sociais e outros serviços?",
    answer: "Sim! Podemos integrar seu site com Instagram, Facebook, WhatsApp, Google Analytics e outras ferramentas essenciais.",
  },
  {
    question: "Vocês também criam logotipos e identidade visual?",
    answer: "Sim, oferecemos serviços de design gráfico, incluindo criação de logotipos, paletas de cores e elementos visuais para sua marca.",
  },
  {
    question: "Quanto tempo leva para criar um site?",
    answer: "O tempo varia conforme a complexidade do projeto, mas, em média, leva de 2 a 6 semanas.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">

      {/* Título e descrição */}
      <div className="faq-content">
        <h2 className="faq-title"> Alguma <br />
  <span>Dúvida?</span>
</h2>
        <p className="faq-description">
          Caso tenha alguma dúvida, confira nossa página{" "}
          <a href="/faq">posso te ajudar?</a> ou fale conosco pelas nossas{" "}
          <a href="/contato">redes sociais</a>.
        </p>
      </div>

      {/* FAQ */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>+</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Link para mais perguntas */}
      <div className="faq-footer">
        <a href="/faq" className="faq-link">
          confira outras perguntas frequentes
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
