import React from 'react';
import './Contador.css';

const Contador = ({
  count,
  incrementCount,
  decrementCount,
  addToCart,
  stock,
}) => {
  return (
    <div className="contador">
      <button className="btn-decrement" onClick={decrementCount}>-</button>
      <p className="count">{count}</p>
      <button className="btn-increment" onClick={incrementCount} disabled={count === stock}>+</button>
      <button className="btn-add-to-cart" onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default Contador;
