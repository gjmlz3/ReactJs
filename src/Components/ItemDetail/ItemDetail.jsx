import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ cantidad, item, handleSumar, handleRestar, agregarAlCarrito}) => {
  
  
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.nombre} />
        <div>
          <h3 className="Nombre">{item.nombre}</h3>
          <p className="Caracteristicas">{item.caracteristicas}</p>
          <p className="categoria">Cuidados {item.cuidados}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;