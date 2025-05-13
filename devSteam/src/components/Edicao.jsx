import React, { useState } from "react";

const Edicao = ({ jogo, onVoltar }) => {
  const [titulo, setTitulo] = useState(jogo?.titulo || "");
  const [descricao, setDescricao] = useState(jogo?.descricao || "");
  const [preco, setPreco] = useState(jogo?.preco || "");
  const [categoria, setCategoria] = useState(jogo?.categoria || "");
  const [capa, setCapa] = useState(jogo?.capa || "");

  const handleSalvar = () => {
    const precoNumerico = parseFloat(preco);
    if (isNaN(precoNumerico) || precoNumerico < 0) {
      alert("Por favor, insira um preço válido.");
      return;
    }

    const jogosSalvos = JSON.parse(localStorage.getItem("jogos")) || [];
    const jogosAtualizados = jogosSalvos.map((j) =>
      j.id === jogo.id
        ? { ...j, titulo, descricao, preco: precoNumerico, categoria, capa }
        : j
    );

    localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
    alert("Jogo atualizado com sucesso!");
    onVoltar(); // Volta para a lista de jogos
  };

  return (
    <div className="container mt-5">
      <h2>Editar Jogo</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input
            type="number"
            className="form-control"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input
            type="text"
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Link da Capa</label>
          <input
            type="url"
            className="form-control"
            value={capa}
            onChange={(e) => setCapa(e.target.value)}
            placeholder="Insira o link da imagem"
          />
        </div>
        <button onClick={handleSalvar} className="btn btn-success">
          Salvar Alterações
        </button>
        <button onClick={onVoltar} className="btn btn-secondary ms-2">
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Edicao;