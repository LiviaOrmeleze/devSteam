import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import RotaProtegida from "./components/ProtectedRoute.jsx";
import SignUp from "./pages/SingUp.jsx";
import EditarJogos from "./components/EditarJogos.jsx";
import AdicionarJogo from "./components/AdicionarJogo.jsx";
import Edicao from "./components/Edicao.jsx";

export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/editar-jogo" element={<EditarJogos />} />
          <Route path="/adicionar-jogo" element={<AdicionarJogo />} />
          <Route patch="/editar-game" elemente={<Edicao />} />
          <Route
            path="/checkout"
            element={
              <RotaProtegida tipoPermitido="CLIENTE">
                <Checkout />
              </RotaProtegida>
            }
          />
          <Route
            path="/painel"
            element={
              <RotaProtegida tipoPermitido="ADMIN">
                <h1 className="text-center mt-5">Painel do Admin</h1>
              </RotaProtegida>
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
