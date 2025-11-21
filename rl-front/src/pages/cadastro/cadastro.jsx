import React from "react";
import "./cadastro.css";
import Footer from "../../components/rodape/footer";

export default function Cadastro() {
  return (
    <>
      <article className="topo-cadastro">
        <main className="conteudo-cadastro">
          <form>
  <h1>Incluir novo produto</h1>

  <div>
    <label>Produto:</label>
    <input type="text" id="nome" name="nome" />
  </div>

  <div>
    <label>Fabricante:</label>
    <input type="text" id="fabricante" name="fabricante" />
  </div>

  <div>
    <label>Preço:</label>
    <input type="number" id="preco" name="preco" />
  </div>

  <div>
    <label>Quantidade em estoque:</label>
    <input type="number" id="estoque" name="estoque" />
  </div>

  <div className="descricao">
    <label>Descrição do produto:</label>
    <input type="text" id="descricao" name="descricao" />
  </div>

  <button>Enviar</button>
</form>


        </main>
      </article>
      <Footer />
    </>
  );
}
