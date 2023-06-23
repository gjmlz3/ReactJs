import React from 'react';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h1>Confirmación de Orden</h1>
      <p>Tu orden ha sido confirmada con el número de orden: {orderId}</p>
    </div>
  );
};

export default OrderConfirmation;
