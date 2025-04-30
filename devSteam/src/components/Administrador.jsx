import React from "react";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado"); // Removendo usuário logado no logout
    navigate("/login"); // Redireciona para o login após logout
  };

  return (
    <div className="admin-dashboard container mt-5">
      <h1>Painel de Administração</h1>
      <ul className="nav flex-column">
        <li>
          <button onClick={() => navigate("/perfil")} className="btn btn-outline-light my-2">Perfil</button>
        </li>
        <li>
          <button onClick={() => navigate("/editar-jogos")} className="btn btn-outline-warning my-2">Editar Jogos</button>
        </li>
        <li>
          <button onClick={handleLogout} className="btn btn-outline-danger my-2">Sair</button>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
