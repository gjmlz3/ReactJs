import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, handleRestar, handleSumar, handleAgregar }) => {
  const [cantidad, setCantidad] = useState(1);

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      handleRestar();
    }
  };

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      handleSumar();
    }
  };

  return (
    <div>
      <div className="item-count">
        <button className="counter-button" onClick={restar}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="counter-button" onClick={sumar}>
          +
        </button>
        <button className="add-to-cart" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
