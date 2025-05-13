import { useEffect, useState } from "react";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import { useNavigate } from "react-router";
import "./App.css";
import OutrosJogos from "./components/OutrosJogos";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    if (salvaCarrinho) {
      setCarrinhoItem(JSON.parse(salvaCarrinho));
    }

    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      if (existe) {
        return itemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...itemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== produto.id)
    );
  };

  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
          : item
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };

  useEffect(() => {
    localStorage.setItem("devcarrinho", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);

  return (
    <>
      <Header
        contadorJogos={carrinhoItem.reduce(
          (acc, item) => acc + item.quantidade,
          0
        )}
        usuario={usuario}
      />
      <CarrinhoOffCanvas
        carrinhoItem={carrinhoItem}
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
      />
      {usuario?.tipo === "ADMIN" ? (
        <div className="admin-dashboard">
          <h1>Bem-vindo ao Painel de Administração</h1>
          <nav>
            <ul>
              <li>
                <button onClick={() => navigate("/perfil")}>Perfil</button>
              </li>
              <li>
                <button onClick={() => navigate("/editar-jogos")}>
                  Editar Jogos
                </button>
              </li>
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="container">
          <Promotion onAddCarrinho={handleAddCarrinho} />
          <OutrosJogos />
        </div>
      )}
    </>
  );
}

export default App;