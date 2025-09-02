import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <Link className="skip-link" to="#content">Pular para o conteúdo</Link>
      <div className="header-inner">
        <div className="brand">
          <Link to="/" aria-label="Ir para a Home">
            <img src={logo} alt="Neven" />
          </Link>
        </div>

        {/* Nav desktop */}
        <nav className="nav" aria-label="Principal">
          <NavLink to="/projetos">NOSSOS PROJETOS</NavLink>
          <NavLink to="/sobre">SOBRE NÓS</NavLink>
          <NavLink to="/faq">POSSO AJUDAR?</NavLink>
          <NavLink to="/contato">CONTATO</NavLink>
        </nav>

        {/* Toggle mobile */}
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bars" aria-hidden="true"></span>
         
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div id="menu-mobile" className="nav-drawer" role="dialog" aria-modal="true">
          <NavLink to="/projetos" onClick={() => setOpen(false)}>NOSSOS PROJETOS</NavLink>
          <NavLink to="/sobre" onClick={() => setOpen(false)}>SOBRE NÓS</NavLink>
          <NavLink to="/faq" onClick={() => setOpen(false)}>POSSO AJUDAR?</NavLink>
          <NavLink to="/contato" onClick={() => setOpen(false)}>CONTATO</NavLink>
        </div>
      )}
    </header>
  );
}
