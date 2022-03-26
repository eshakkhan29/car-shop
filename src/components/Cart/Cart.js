import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const {name, image} = cart;
    return (
        <div className=' m-3'>
            <div className='d-flex align-items-center'>
                <img className='cart-image me-2' src={image}  alt="" />
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Cart;