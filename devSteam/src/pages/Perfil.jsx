import React from "react";

const Perfil = () => {
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
        <div class="offcanvas-body">
          <div className="itensPerfil rounded-4 p-2">
            <p className="fw-bold m-0">Cadastro</p>
            <p className="m-0 ">ver e alterar seus dados</p>
          </div>

          <div className="itensPerfil rounded-4 p-2">
            <p className="fw-bold m-0">Cartões</p>
            <p className="m-0 ">ver seus catões cadastrados</p>
          </div>
        </div>
      </div>

      {/* Parte dektop */}
      <div
        className="d-none  d-md-flex flex-column gap-3"
        style={{ width: "200px" }}
      >
        <div className="itensPerfil rounded-4 p-2">
          <p className="fw-bold m-0">Cadastro</p>
          <p className="m-0 ">ver e alterar seus dados</p>
        </div>

        <div className="itensPerfil rounded-4 p-2">
          <p className="fw-bold m-0">Cartões</p>
          <p className="m-0 ">ver seus catões cadastrados</p>
        </div>
      </div>

      <div className="w-75">
        <h4>Cadastro</h4>
        <p>nome</p>
        <p>email</p>
      </div>
    </div>
  );
};

export default Perfil;
