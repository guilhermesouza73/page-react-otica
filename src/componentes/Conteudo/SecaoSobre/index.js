import React from "react";
import "./style.css";
import "./responsivo.css";
import Loja from "../../../imagens/loja.png";
import Atendimento from "../../../imagens/atendimento.png";

export default function SecaoSobre() {
  return (
    <section className="secao_sobre" id="sobre">
      <div className="limitar-secao">
        <h2 className="subtitulo">Quem somos nós?</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.{" "}
        </p>
        <div className="secao_sobre_box">
          <div>
            <img src={Loja} alt="Lojas" />
          </div>
          <div>
            <h3 className="subtitulo">Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div>
            <h3 className="subtitulo">Atendimento flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <div>
            <img src={Atendimento} alt="Atendimento" />
          </div>
        </div>
      </div>
    </section>
  );
}
