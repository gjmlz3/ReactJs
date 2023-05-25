import React, { useState } from 'react';
import './Item.css';
import Contador from '../Contador/Contador';
import Modal from 'react-modal';

const Item = ({
  codigo,
  nombre,
  caracteristicas,
  cuidados,
  stock,
  stockMaximo,
  precio,
  imagen,
}) => {
  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const incrementCount = () => {
    if (count < stockMaximo) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const addToCart = () => {
    setAddedToCart(true);
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="item-card">
      <h2>{nombre}</h2>
      <p>Cuidados: {cuidados}</p>
      <p>Precio: ${precio}</p>
      <img
        className="item-image"
        src={imagen}
        alt={nombre}
        onClick={handleImageClick}
      />
      {!addedToCart ? (
        <Contador
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          addToCart={addToCart}
          stock={stockMaximo}
        />
      ) : (
        <div className="added-to-cart">
          Producto agregado al carrito <br />
          Total: ${count * precio}
        </div>
      )}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Imagen completa"
      >
        <div className="modal-content">
          <img className="modal-image-full" src={imagen} alt={nombre} />
          <div className="modal-info">
            <h3>{nombre}</h3>
            <p>{caracteristicas}</p>
            {!addedToCart ? (
              <>
                <div className="item-counter">
                  <button className="item-button" onClick={decrementCount}>
                    -
                  </button>
                  <span className="item-count">{count}</span>
                  <button className="item-button" onClick={incrementCount}>
                    +
                  </button>
                </div>
                <button className="item-button modal-add-to-cart" onClick={addToCart}>
                  Agregar al carrito
                </button>
              </>
            ) : (
              <div className="added-to-cart-modal">
                Producto agregado al carrito <br />
                Total: ${count * precio}
              </div>
            )}
          </div>
        </div>
        <button className="item-button modal-close" onClick={closeModal}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default Item;
