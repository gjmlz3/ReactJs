import { useState } from "react";
import "./CheckOutForm.css";

export default function CheckoutForm({ onConfirm }) {
  const [userData, setUserData] = useState({
    nombre: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    phone: "",
    email: "",
  });

  function onInputChange(evt) {
    const prop = evt.target.name;
    const value = evt.target.value;

    const newData = { ...userData };
    newData[prop] = value;
    setUserData(newData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    // Realizar validaciones
    const newErrors = {};
    if (userData.nombre.trim() === "") {
      newErrors.nombre = "El nombre es requerido";
    }
    if (userData.phone.trim() === "") {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^\d+$/.test(userData.phone)) {
      newErrors.phone = "Ingresa solo números en el teléfono";
    }
    if (!isValidEmail(userData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    // Verificar si hay errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Si no hay errores, continuar con la confirmación
      onConfirm(userData);
      setErrors({
        nombre: "",
        phone: "",
        email: "",
      });
    }
  }

  function isValidEmail(email) {
    // Patrón simple para verificar el formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function handleReset(evt) {
    evt.preventDefault();
    setUserData({
      nombre: "",
      phone: "",
      email: "",
    });
    setErrors({
      nombre: "",
      phone: "",
      email: "",
    });
  }

  const styleInput = { display: "flex", marginBottom: 24 };
  const label = { width: "100px", marginRight: 4 };

  return (
    <form className="checkout-container" onSubmit={onSubmit}>
      <h1>Ingresa tus datos para completar la compra </h1>
      <div style={styleInput}>
        <label style={label}>Nombre</label>
        <input
          value={userData.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
        />
        {errors.nombre && <span className="error">{errors.nombre}</span>}
      </div>
      <div style={styleInput}>
        <label style={label}>Teléfono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          onChange={onInputChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div style={styleInput}>
        <label style={label}>Email</label>
        <input
          value={userData.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button>Crear orden</button>
      <button onClick={handleReset}>Vaciar</button>
    </form>
  );
}
