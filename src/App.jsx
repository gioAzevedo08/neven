import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import SeuSite from './pages/SeuSite';

function App() {
    return (
        <Router>
            <div id="root">
                <Header />
                <main className="main-content">
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
export default App


