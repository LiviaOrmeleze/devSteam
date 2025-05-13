import React from "react";
import { Link, useNavigate } from "react-router";

const Header = ({ contadorJogos, usuario }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarios");
    navigate("/login");
  };

  return (
    <header className="navbar navbar-dark bg-dark justify-content-between align-items-center p-3">
      <div id="logo" className="d-flex align-items-center">
        <i className="bi bi-controller fs-1 text-light me-3"></i>
        <span className="navbar-brand fw-bold fs-3">DevSteam</span>
      </div>

      <div id="header-right" className="d-flex align-items-center gap-4">
        {usuario?.tipo === "CLIENTE" && (
          <button
            id="carrinho"
            className="btn btn-outline-light position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCarrinho"
          >
            <i className="bi bi-cart-fill fs-4"></i>
            {contadorJogos > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {contadorJogos}
              </span>
            )}
          </button>
        )}

        {usuario ? (
          <div className="d-flex align-items-center gap-3">
            <span className="text-light fw-bold">
              {usuario.nome || "Usuário"}
            </span>
            <div className="dropdown">
              <div role="button" id="dropdownPerfil" data-bs-toggle="dropdown">
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    usuario.nome || "Usuário"
                  }&background=2b87ae&color=fff`}
                  alt={usuario.nome || "Usuário"}
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {usuario.tipo === "Administrador" && (
                  <li>
                    <Link to="/editar-jogo" className="dropdown-item">
                      Jogos
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/perfil" className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                {usuario.tipo === "ADMIN" && (
                  <li>
                    <Link to="/editar-jogos" className="dropdown-item">
                      Editar Jogos
                    </Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout} className="dropdown-item">
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="text-decoration-none text-light">
            <i className="bi bi-person-circle fs-3"></i>
            <span className="d-none d-md-block">Faça seu login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
