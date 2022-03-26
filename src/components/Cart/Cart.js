import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const {name, image} = cart;
    return (
        <div className='d-flex align-items-center m-3'>
            <img className='cart-image me-2' src={image}  alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;