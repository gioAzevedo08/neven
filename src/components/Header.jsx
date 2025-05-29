import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Neven Logo" style={styles.logo} />
                </Link>
            </div>
            <nav style={styles.nav}>
                <Link to="/projetos" style={styles.link}>NOSSOS PROJETOS</Link>
                <span style={styles.separator}>|</span>
                <Link to="/sobre" style={styles.link}>SOBRE NÓS</Link>
                <span style={styles.separator}>|</span>
                <Link to="/faq" style={styles.link}>POSSO AJUDAR?</Link>
                <span style={styles.separator}>|</span>
                <Link to="/contato" style={styles.link}>CONTATO</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
      width: "100%", // Faz o header ocupar a largura total
      backgroundColor: "#2C6B8C", // Cor de fundo
      borderBottom: "7px solid #C0754D", // Linha inferior
      display: "flex", // Para organizar os elementos lado a lado
      justifyContent: "space-between", // Espaça logo e links
      alignItems: "center", // Alinha os elementos verticalmente
      padding: "15px 0", // Espaçamento interno no topo e baixo
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    
    },
    container: {
      width: "80%", // Controla o espaço total do conteúdo dentro do header
      maxWidth: "1200px", // Garante que ele não fique muito grande em telas grandes
      margin: "0 auto", // Centraliza horizontalmente
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoContainer: {
      marginLeft: "140px", // Ajusta a posição da logo para não ficar muito na borda
    },
    logo: {
      height: "40px",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      marginRight: "120px", // Ajusta a posição dos links para não grudarem na borda direita
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "normal",
      padding: "0 10px",
    },
    separator: {
      color: "#fff",
      fontWeight: "bold",
      padding: "0 5px",
    },
  };
  

export default Header;
