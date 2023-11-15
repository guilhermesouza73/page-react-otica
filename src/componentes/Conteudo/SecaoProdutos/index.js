import React from "react";
import "./style.css";
import "./responsivo.css";

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
              <img src="../../assets/oculos01.png" alt="Óculos de grau" />
            </div>
            <p>R$ 500,00</p>
          </div>

          <div>
            <h3>Óculos transition</h3>
            <div>
              <img src="../../assets/oculos02.png" alt="Óculos transition" />
            </div>
            <p>R$ 750,00</p>
          </div>

          <div>
            <h3>Óculos de sol</h3>
            <div>
              <img src="../../assets/oculos03.png" alt="Óculos de sol" />
            </div>
            <p>R$ 700,00</p>
          </div>

          <div>
            <h3>Óculos infantil</h3>
            <div>
              <img src="../../assets/oculos04.png" alt="Óculos infantil" />
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
