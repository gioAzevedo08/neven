import React from "react";

const SeuSite = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.errorMessage}>Oops! Parece que essa página ainda não existe...</p>
      <p style={styles.suggestion}>Mas podemos criar ela para você!</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Usa flexbox para alinhar os elementos
    flexDirection: "column", // Organiza os itens verticalmente
    justifyContent: "center", // Centraliza na vertical
    alignItems: "center", // Centraliza na horizontal
    height: "70vh", // Define a altura total da tela
    textAlign: "center", // Centraliza o texto
    backgroundColor: "#fff", // Fundo branco
  },
  errorCode: {
    fontSize: "90px", // Tamanho do "404"
    fontWeight: "bold", // Texto em negrito
    color: "#2d6b89", // Cor azul do código de erro
    margin: "0", // Remove margens externas
  },
  errorMessage: {
    fontSize: "18px", // Tamanho da mensagem secundária
    color: "#333", // Cor do texto
    marginTop: "20px", // Distância do "404"
    fontWeight: 250,
  },
  suggestion: {
    fontSize: "22px", // Tamanho da sugestão
    fontWeight: 300, // Deixa em negrito
    color: "#000", // Cor preta
    marginTop: "15px", // Espaçamento superior
  },
};

export default SeuSite;
