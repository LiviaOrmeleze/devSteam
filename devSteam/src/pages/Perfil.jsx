import { useState } from "react";
import Cadastro from "../components/Cadastro";

const Perfil = () => {
const [mostrarCadastro, setMostrarCadastro] = useState(false);
// const [mostrarCartao, setMostrarCartao] = useState(false);

const handleMostrarCadastro = () => {
  setMostrarCadastro(true);
}


  return (
    <div className="d-flex container mt-4 gap-4">
      <button
        class="d-flex d-md-none btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i class="bi bi-list text-light fs-4"></i>
      </button>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <button
          className="itensPerfil rounded-4 p-2 btn text-start"
          onClick={handleMostrarCadastro}
        >
          <p className="fw-bold m-0">Cadastro</p>
          <p className="m-0">ver e alterar seus dados</p>
        </button>

        <button className="itensPerfil rounded-4 p-2 btn text-start">
          <p className="fw-bold m-0">Cartões</p>
          <p className="m-0">ver seus cartões cadastrados</p>
        </button>
      </div>

      {/* Parte dektop */}
      <div
      className="d-flex align-items-start g-4 "
    >
      {/* Coluna de Botões */}
      <div className="btnPerfil d-flex flex-column gap-3">
        <button
          className="itensPerfil rounded-4 p-2 btn text-start"
          onClick={handleMostrarCadastro}
        >
          <p className="fw-bold m-0">Cadastro</p>
          <p className="m-0">ver e alterar seus dados</p>
        </button>

        <button className="itensPerfil rounded-4 p-2 btn text-start">
          <p className="fw-bold m-0">Cartões</p>
          <p className="m-0">ver seus cartões cadastrados</p>
        </button>
      </div>

      {/* Renderiza o componente Cadastro ao lado */}
      {mostrarCadastro && <Cadastro />}
    </div>

      
    </div>
  );
};

export default Perfil;
