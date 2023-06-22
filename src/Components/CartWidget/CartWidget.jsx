
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
    return (

        <div className="social-icons">
             <Link className="menu-link" to="/Cart">
            <FaCartPlus />
            <span>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget