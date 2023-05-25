import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Logo from './assets/Logo.jpg'


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/QuienesSomos">Quienes Somos</Link></li> 
        <li><Link to="/Asesoramiento">Asesoramiento</Link></li>
        <li><Link to="/ItemListContainer">Compra Online</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
