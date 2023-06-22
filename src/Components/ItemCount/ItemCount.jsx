import React from 'react';
import './ItemCount.css';
import { useState } from 'react';



const ItemCount = ({stock, onAdd}) =>{
const [cantidad, setCantidad] = useState(0)

const increment = () => {
  if (cantidad < stock) {
    setCantidad(cantidad + 1)
  }
}

const decrement = () => {
  if (cantidad > 1) {
    setCantidad(cantidad - 1)
  }
}
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
    <button className="add-to-cart" onClick={()=> onAdd(cantidad)}>
      Agregar al carrito
    </button>
  </div>
</div>


)

}
export default ItemCount;
