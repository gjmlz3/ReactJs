import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Inicio/Inicio';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Contacto from './Components/Contacto/Contacto';
import CheckoutForm from './Components/CheckOutForm/CheckOutForm';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';





function App() {
  return (
  
        <div className="App">
          <CartProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/QuienesSomos" element={<QuienesSomos />} />
                <Route path="/Compra" element={<ItemListContainer />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/productos/:cuidados" element={<ItemListContainer />} />
                <Route path="/Item/:id" element={<ItemDetailContainer />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/CheckOutForm" element={<CheckoutForm />} />
                <Route path="/order-confirmation:orderID" element={<OrderConfirmation />} />
               
               
              </Routes>

              <Footer />
            </BrowserRouter>
          </CartProvider>
        </div>

        );
}

        export default App;
