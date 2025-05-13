import React from "react";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div className="container mt-5">
      <h1>Painel do Administrador</h1>
      <div className="list-group mt-4">
        <Link to="/adicionar-jogo" className="list-group-item list-group-item-action">
          Adicionar Jogo
        </Link>
        <Link to="/editar-jogos" className="list-group-item list-group-item-action">
          Editar Jogos
        </Link>
      </div>
    </div>
  );
};

export default Administrador;