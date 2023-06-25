import React from 'react';
import './ItemCount.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(0);

  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    if (cantidad > 0) {
      onAdd(cantidad);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        text: `Se ha agregado ${cantidad} producto al carrito`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes seleccionar al menos un producto para agregar al carrito',
      });
    }
  };

  return (
    <div>
      <div className="item-count">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="counter-button" onClick={increment}>
          +
        </button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
