import React from 'react';
import './Item.css';

export const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="item-details">
        <h4>{producto.nombre}</h4>
        <p>Cuidados: {producto.cuidados}</p>
        <p>Precio: ${producto.precio}</p>
        <a className="detalles" href={`/item/${producto.id}`}>Ver detalles</a>
      </div>
    </div>
  );
};

