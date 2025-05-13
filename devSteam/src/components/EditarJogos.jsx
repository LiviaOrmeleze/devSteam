import React, { useState, useEffect } from "react";
import Edicao from "./Edicao";

const EditarJogos = () => {
  const [jogos, setJogos] = useState([]);
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  useEffect(() => {
    // Carrega os jogos do localStorage ao montar o componente
    const jogosSalvos = JSON.parse(localStorage.getItem("jogos")) || [];
    setJogos(jogosSalvos);
  }, []);

  const handleExcluir = (id) => {
    // Remove o jogo da lista
    const jogosAtualizados = jogos.filter((jogo) => jogo.id !== id);
    setJogos(jogosAtualizados);
    localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));
  };

  if (jogoSelecionado) {
    // Renderiza o componente Edicao com os dados do jogo selecionado
    return (
      <Edicao
        jogo={jogoSelecionado}
        onVoltar={() => setJogoSelecionado(null)}
      />
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Jogos Cadastrados</h1>

 <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/adicionar-jogo")}
        >
          Adicionar Jogo
        </button>
        
      </div>
      {jogos.length > 0 ? (
        <ul className="list-group">
          {jogos.map((jogo) => (
            <li
              key={jogo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{jogo.titulo}</h5>
                <p>{jogo.descricao}</p>
              </div>
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => setJogoSelecionado(jogo)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleExcluir(jogo.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3">Nenhum jogo cadastrado.</p>
      )}
    </div>
  );
};

export default EditarJogos;
