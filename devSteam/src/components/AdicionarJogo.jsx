import React, { useState } from "react";
import { useNavigate } from "react-router";

const AdicionarJogo = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [capa, setCapa] = useState(""); // Novo estado para o link da capa
  const navigate = useNavigate();

  const handleAdicionar = () => {
    const precoNumerico = parseFloat(preco);
    if (isNaN(precoNumerico) || precoNumerico < 0) {
      alert("Por favor, insira um preço válido.");
      return;
    }

    const novoJogo = {
      id: new Date().getTime(),
      titulo,
      descricao,
      preco: precoNumerico,
      categoria,
      capa,
    };

    const jogosSalvos = JSON.parse(localStorage.getItem("jogos")) || [];
    jogosSalvos.push(novoJogo);
    localStorage.setItem("jogos", JSON.stringify(jogosSalvos));

    navigate("/editar-jogo");
  };

  return (
    <div className="container mt-5">
      <h2>Adicionar Novo Jogo</h2>
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
        <button onClick={handleAdicionar} className="btn btn-success">
          Adicionar Jogo
        </button>
      </form>
    </div>
  );
};

export default AdicionarJogo;
