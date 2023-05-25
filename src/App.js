import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Inicio/Inicio';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos'; // Importa el componente QuienesSomos
import Asesoramiento from './Components/Asesoramiento/Asesoramiento';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} /> 
          <Route path="/ItemListContainer" element={<ItemListContainer />} />
          <Route path="/Asesoramiento" element={<Asesoramiento />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
