import { Link } from "react-router-dom";

export default function SeuSite(){
  return (
    <div style={styles.container} className="reveal">
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.errorMessage}>Oops! Parece que essa página ainda não existe...</p>
      <p style={styles.suggestion}>Mas podemos criar ela para você!</p>
      <Link to="/contato" style={styles.link}>Falar com a Neven →</Link>
    </div>
  );
}

const styles = {
  container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh",textAlign:"center",backgroundColor:"#fff",gap:"10px"},
  errorCode:{fontSize:"90px",fontWeight:"900",color:"#2d6b89",margin:"0"},
  errorMessage:{fontSize:"18px",color:"#333",marginTop:"8px",fontWeight:250},
  suggestion:{fontSize:"22px",fontWeight:300,color:"#000",marginTop:"4px"},
  link:{marginTop:"10px",fontWeight:800,textDecoration:"underline",color:"#2C6B8C"}
};
