import React from "react";
import "./style.css";
import "./responsivo.css";
import Oculos01 from "../../../imagens/oculos01.png";
import Oculos02 from "../../../imagens/oculos02.png";
import Oculos03 from "../../../imagens/oculos03.png";
import Oculos04 from "../../../imagens/oculos04.png";

export default function SecaoProdutos() {
  return (
    <section className="secao_produtos" id="produtos">
      <div className="limitar-secao">
        <h2 className="subtitulo">Nossos Produtos</h2>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
        {/* Itens */}
        <div className="secao_produtos_box">
          <div>
            <h3>Óculos de grau</h3>
            <div>
              <img src={Oculos01} alt="Óculos de grau" />
            </div>
            <p>R$ 500,00</p>
          </div>

          <div>
            <h3>Óculos transition</h3>
            <div>
              <img src={Oculos02} alt="Óculos transition" />
            </div>
            <p>R$ 750,00</p>
          </div>

          <div>
            <h3>Óculos de sol</h3>
            <div>
              <img src={Oculos03} alt="Óculos de sol" />
            </div>
            <p>R$ 700,00</p>
          </div>

          <div>
            <h3>Óculos infantil</h3>
            <div>
              <img src={Oculos04} alt="Óculos infantil" />
            </div>
            <p>R$ 500,00</p>
          </div>
        </div>

        <p className="bold">Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}
