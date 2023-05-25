import React from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ plantData }) => {
  return (
    <div className='item-list'>
      {plantData.map((plant) => (
        <Item
          key={plant.codigo}
          codigo={plant.codigo}
          nombre={plant.nombre}
          caracteristicas={plant.caracteristicas}
          cuidados={plant.cuidados}
          stock={plant.stock}
          stockMaximo={plant.stockMaximo}
          precio={plant.precio}
          imagen={plant.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
