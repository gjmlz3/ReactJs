import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Item } from '../Item/Item';


const ItemDetail = ({item, caracteristicas, cuidados, imagen, nombre, precio, stock}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState (0);
  const { agregarAlCarrito } = useContext(CartContext);
  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad)

    agregarAlCarrito(item, cantidad)
}


  
  
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.nombre} />
        
        <div>
          <h3 className="Nombre">{item.nombre}</h3>
          <p className="Caracteristicas">{item.caracteristicas}</p>
          <p className="categoria">Cuidados {item.cuidados}</p>
          <p className="precio">${item.precio}</p>
          <p className="stock">Stock ${item.stock}</p>
          { cantidadAgregada > 0 ? (
                            <Link to='/cart'>Terminar compra</Link>
                        ) : (
                            <ItemCount stock={item.stock} onAdd={handleOnAdd}></ItemCount>)
                        }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
