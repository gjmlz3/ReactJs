import React from 'react';
import './ItemCount.css';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div>
      <div className="item-count">
        <button className="counter-button" onClick={handleRestar}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="counter-button" onClick={handleSumar}>
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
