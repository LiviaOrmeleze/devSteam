import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("Cliente"); // Alterado para Cliente por padrão
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuario) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario)); // Armazenando o usuário logado
      tipo === "Administrador" ? navigate("/admin") : navigate("/");
    } else {
      alert("Email, senha ou tipo de usuário incorretos.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="auth-input"
        />
        {/* <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="auth-input"
        >
          <option value="Administrador">Administrador</option>
          <option value="Cliente">Cliente</option>
        </select> */}
        <button onClick={handleLogin} className="auth-button">
          Entrar
        </button>
        <p className="auth-link">
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
