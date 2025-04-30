import { Navigate } from "react-router";

const RotaProtegida = ({ children, tipoPermitido }) => {
  const usuario = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuario) return <Navigate to="/login" />;
  if (tipoPermitido && usuario.tipo !== tipoPermitido)
    return <Navigate to="/" />;
  return children;
};

export default RotaProtegida;
