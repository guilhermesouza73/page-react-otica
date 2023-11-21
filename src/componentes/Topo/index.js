import React from "react";
import "./style.css";
import "./responsivo.css";
import Logo from "assets/logo.png";

export default function Topo() {
  return (
    <header className="topo">
      <div className="limitar-secao">
        <div>
          <div className="topo-logo">
            <a href="./">
              <img src={Logo} alt="Logotipo" />
            </a>
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
