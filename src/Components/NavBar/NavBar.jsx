import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Logo from './assets/Logo.jpg';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact="true" to="/" >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/QuienesSomos">
            Quienes Somos
          </NavLink>
        </li>
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <div className="dropdown-container">
            Plantas
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/productos/Facil" >
                    Faciles
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/productos/Moderado" >
                    Moderadas
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/productos/Dificil" >
                    Dificiles
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/Compra" >
            Compra Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacto" >
            Contacto
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
