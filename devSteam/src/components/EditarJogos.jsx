import React, { useState, useEffect } from "react";

const EditarJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    setJogos([
      { id: 1, nome: "Jogo 1", descricao: "Descrição do Jogo 1" },
      { id: 2, nome: "Jogo 2", descricao: "Descrição do Jogo 2" },
      { id: 3, nome: "Jogo 3", descricao: "Descrição do Jogo 3" },
    ]);
  }, []);

  const handleEditar = (id) => {
    alert(`Editar o Jogo com ID: ${id}`);
  };

  const handleExcluir = (id) => {
    setJogos(jogos.filter((jogo) => jogo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>Editar Jogos</h1>
      <ul className="list-group">
        {jogos.map((jogo) => (
          <li key={jogo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{jogo.nome}</strong><br />
              <small>{jogo.descricao}</small>
            </div>
            <div>
              <button onClick={() => handleEditar(jogo.id)} className="btn btn-sm btn-warning me-2">Editar</button>
              <button onClick={() => handleExcluir(jogo.id)} className="btn btn-sm btn-danger">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditarJogos;
