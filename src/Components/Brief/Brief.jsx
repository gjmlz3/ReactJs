import React from 'react';
import './Brief.css';

const Brief = ({ plantData }) => {
  return (
    <div className="brief-container">
      <h2>Brief</h2>
      {plantData.map((plant) => (
        <div key={plant.codigo} className="plant-card">
          <img className="plant-image" src={plant.imagen} alt={plant.nombre} />
          <h3>{plant.nombre}</h3>
          <p>Precio: ${plant.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Brief;
