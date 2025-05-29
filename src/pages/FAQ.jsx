import { useState } from "react";
import "../styles/FAQ.css";
import ajudaImg from '../assets/comp.png';

const ajuda = [
  { question: "Quais são os horários de atendimento?", answer: "Nosso atendimento funciona de segunda a sexta, das 9h às 18h." },
  { question: "Como posso entrar em contato?", answer: "Você pode nos contatar pelo e-mail, telefone ou redes sociais." },
  { question: "Vocês oferecem suporte pós-venda?", answer: "Sim! Garantimos suporte por até 6 meses após a entrega do site." },
  { question: "Posso alterar o design do site depois?", answer: "Claro! Você pode solicitar ajustes sempre que necessário." },
  { question: "Quais formas de pagamento vocês aceitam?", answer: "Aceitamos cartão de crédito, boleto e transferência bancária." },
  { question: "Vocês trabalham com contrato?", answer: "Sim, formalizamos um contrato para garantir segurança para ambas as partes." },
  { question: "Quanto tempo leva para receber um orçamento?", answer: "O prazo para envio do orçamento é de até 48 horas após a solicitação." },
  { question: "Vocês criam e-mails profissionais?", answer: "Sim! Oferecemos configuração de e-mails personalizados para empresas." },
  { question: "É possível migrar meu site para vocês?", answer: "Sim, realizamos migração de sites de outras plataformas para nossos servidores." },
  { question: "Vocês oferecem manutenção mensal?", answer: "Sim! Temos planos de manutenção para garantir o bom funcionamento do seu site." },
  { question: "O site será otimizado para SEO?", answer: "Sim! Aplicamos técnicas de SEO para melhor posicionamento no Google." },
  { question: "Vocês criam sites multilíngues?", answer: "Sim! Podemos desenvolver seu site em diversos idiomas." }
];

const AjudaSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAjuda = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ajuda-container">
      {/* Parte do topo com imagem e texto */}
      <div className="ajuda-topo">
        <div className="ajuda-texto">
          <h2 className="ajuda-titulo">POSSO AJUDAR?</h2>
          <p className="ajuda-descricao">
            Bem-vindo à nossa página de Perguntas Frequentes! Aqui, você encontra respostas para as dúvidas mais comuns sobre nossos serviços de criação de sites. Caso não encontre a resposta que procura, entre em contato com nossa equipe, estamos sempre prontos para ajudar!
          </p>
        </div>
        <img src={ajudaImg} alt="Ajuda" className="ajuda-imagem" />
      </div>

      {/* Lista de perguntas */}
      <div className="ajuda-lista">
        {ajuda.map((faq, index) => (
          <div key={index} className="ajuda-item">
            <button className="ajuda-pergunta" onClick={() => toggleAjuda(index)}>
              {faq.question}
              <span className={`ajuda-icon ${openIndex === index ? "open" : ""}`}>+</span>
            </button>
            {openIndex === index && <p className="ajuda-resposta">{faq.answer}</p>}
          </div>
        ))}
      </div>

      
 <section className="contato">
      <div className="contato-texto">
      
        <p>
          Se você tem um projeto em mente, deseja tirar dúvidas ou simplesmente quer saber mais sobre nossos serviços, estamos à disposição. Nossa equipe está pronta para ajudar você a transformar sua ideia em um site incrível. Fale conosco pelos nossos canais de atendimento!
        </p>
        <h3>Não seja tímido!<br/>
        Entre em contato conosco via E-mail</h3>
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
      <a href="#" className="other-contact">
      Clique aqui e confira nossas outras formas de contato.
    </a>
      
    </section>
      </div>
    
  );
};

export default AjudaSection;
