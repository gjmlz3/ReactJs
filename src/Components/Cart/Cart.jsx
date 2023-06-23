import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import CheckoutForm from '../CheckOutForm/CheckOutForm';
import { createOrderWithStockUpdate } from '../../Service/config';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext);
  const navigateTo = useNavigate();

  const handleConfirm = async (userData) => {
    const order = {
      items: carrito,
      buyer: userData,
      date: new Date(),
      price: precioTotal(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      console.log('respuesta', id);
      vaciarCarrito();
      navigateTo(`/order-confirmation/${id}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Precio unitario</th>
              <th>Precio total</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((prod) => (
              <tr key={prod.id}> {/* Agregar key={prod.id} */}
                <td>{prod.nombre}</td>
                <td>
                  <img src={prod.imagen} alt={prod.nombre} />
                </td>
                <td>${prod.precio}</td>
                <td>${prod.precio * prod.cantidad}</td>
                <td>{prod.cantidad}</td>
                <td>
                  <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      ) : (
        <h2>El carrito está vacío</h2>
      )}

      {carrito.length > 0 && (
        <>
          <h2 className="precio-total">Precio total: ${precioTotal()}</h2>
          <button className="vaciar-btn" onClick={handleVaciar}>
            Vaciar
          </button>

          <CheckoutForm onConfirm={handleConfirm} />
        </>
      )}
    </div>
  );
};

export default Cart;
