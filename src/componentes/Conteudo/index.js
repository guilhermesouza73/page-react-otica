import React from "react";
import SecaoCapa from "./SecaoCapa";
import SecaoProdutos from "./SecaoProdutos";
import SecaoSobre from "./SecaoSobre";
import SecaoContato from "./Contato";

export default function Conteudo() {
  return (
    <main className="conteudo">
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  );
}
