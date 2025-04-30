import React from "react";

const CarrinhoOffCanvas = ({ carrinhoItem, onRemoveCarrinho, onUpdateCarrinho }) => {
  // Calcula o total do carrinho
  const total = carrinhoItem.reduce(
    (acc, item) => acc + item.jogo.preco * item.quantidade,
    0
  );

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasCarrinho"
      aria-labelledby="offcanvasCarrinhoLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCarrinhoLabel">
          Carrinho de Compras
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Fechar"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column">
        {carrinhoItem.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            {carrinhoItem.map((item) => (
              <div
                key={item.jogo.id}
                className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
              >
                <div className="d-flex flex-column">
                  <strong>{item.jogo.nome}</strong>
                  <small>
                    R$ {item.jogo.preco.toFixed(2)} x {item.quantidade}
                  </small>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantidade}
                    className="form-control form-control-sm"
                    style={{ width: "60px" }}
                    onChange={(e) =>
                      onUpdateCarrinho(item.jogo.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onRemoveCarrinho(item.jogo.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-auto">
              <h5>Total: R$ {total.toFixed(2)}</h5>
              <button className="btn btn-success w-100 mt-2">Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;
