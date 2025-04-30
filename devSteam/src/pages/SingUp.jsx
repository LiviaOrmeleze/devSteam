import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [CPF, setCPF] = useState("");
  const [DataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!nome || !email || !senha || !telefone || !CPF || !DataNascimento) {
      alert("Preencha todos os campos.");
      return;
    }

    // Verifica se já existe um usuário com esse e-mail
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existeUsuario = usuarios.some((u) => u.email === email);

    if (existeUsuario) {
      alert("Já existe um usuário com esse e-mail.");
      return;
    }

    // Cadastra o novo usuário
    const novoUsuario = {
      nome,
      email,
      senha,
      telefone,
      CPF,
      DataNascimento,
      tipo: "Administrador", // Tipo padrão
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="auth-input"
        />
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
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="auth-input"
        />
        <input
          type="text"
          placeholder="CPF"
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          className="auth-input"
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={DataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          className="auth-input"
        />
        <button onClick={handleSignUp} className="auth-button">
          Cadastrar
        </button>
        <p className="auth-link">
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
