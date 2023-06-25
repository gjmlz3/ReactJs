import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import CheckoutForm from '../CheckOutForm/CheckOutForm';
import { createOrderWithStockUpdate } from '../../Service/config';
import Swal from 'sweetalert2';

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext);

  const handleConfirm = async (userData) => {
    const order = {
      items: carrito,
      buyer: userData,
      date: new Date(),
      price: precioTotal(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      vaciarCarrito();

      Swal.fire({
        icon: 'success',
        title: '¡Compra realizada!',
        text: `Su compra ha sido registrada satisfactoriamente con el número de ID: ${id}`,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  };

  const handleVaciar = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará el carrito de compras.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire('Vacío', 'El carrito ha sido vaciado.', 'success');
      }
    });
  };

  const confirmDelete = (productId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(productId);
        Swal.fire('Eliminado', 'El producto ha sido eliminado del carrito.', 'success');
      }
    });
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
              <tr key={prod.id}>
                <td>{prod.nombre}</td>
                <td>
                  <img src={prod.imagen} alt={prod.nombre} />
                </td>
                <td>${prod.precio}</td>
                <td>${prod.precio * prod.cantidad}</td>
                <td>{prod.cantidad}</td>
                <td>
                  <button onClick={() => confirmDelete(prod.id)}>Eliminar</button>
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
