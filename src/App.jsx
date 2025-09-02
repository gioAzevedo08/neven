import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import SeuSite from "./pages/SeuSite";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <Header />

        <main className="main-content" id="content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/seusite" element={<SeuSite />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
