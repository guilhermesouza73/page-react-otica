import React from "react";
import "./style.css";
import "./responsivo.css";

export default function SecaoContato() {
  return (
    <section className="secao_contato" id="contato">
      <div className="limitar-secao">
        <h2 className="subtitulo">Fale Conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div className="secao_contato_box">
          <div>
            <h3>Contato</h3>
            <div>
              <img src="assets/local.png" alt="Localização icone" />
              <span>São Paulo, SP</span>
            </div>
            <div>
              <img src="assets/telefone.png" alt="Telefone icone" />
              <span>(11) 9999-9999</span>
            </div>
            <div>
              <img src="assets/email.png" alt="Email icone" />
              <span>contato@contato.com</span>
            </div>
          </div>

          <div>
            <h3>Nossas Redes Sociais</h3>
            <div>
              <img src="assets/fb.png" alt="Facebook icone" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img src="assets/ig.png" alt="Instagram icone" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src="assets/tt.png" alt="Twitter icone" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
