import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css'; 

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      <h2>Productos</h2>
      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
