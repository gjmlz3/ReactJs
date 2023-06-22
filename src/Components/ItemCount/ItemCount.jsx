import React from 'react';
import './ItemCount.css';

const ItemCount = ({ agregarAlCarrito }) => {
  
  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };
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