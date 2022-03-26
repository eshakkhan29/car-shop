import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Choose from '../Choose/Choose';
import Question from '../Question/Question';

const Shop = () => {
    const [car, setCar] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);
    useEffect( () =>{
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCar(data))
    },[])
    const addToCart = (data) => {
        const newCart = [...cart, data];
        if (cart.length === 4) {
            return alert("you can't add more product")
        }
        else{
            setCart(newCart);
        }
    }
    const chooseOne = (cart) =>{
        if (cart.length === 0 || cart.length !== 4) {
            return alert('pleas add to cart')
        }
        const random = Math.round(Math.random()*3);
        const oneItem = cart[random];
        setChoose(oneItem);
    }
    const emptyCart = [];
    const emptyChoose = [];
    const clearCart = () => {
        setCart(emptyCart);
        setChoose(emptyChoose);
    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-lg-9 order-lg-0 order-2 row row-cols-lg-3 row-cols-1 g-3 pe-0'>
                {
                    car.map(car => <Product 
                        key = {car.id} 
                        data = {car}
                        addToCart = {addToCart}
                        ></Product>)
                }
            </div>
            <div className='col-lg-3 order-lg-1 order-1'>
                <h2 className='text-center text-success'>Selected Product</h2>
                {
                    cart.map(cart => <Cart
                        key = {cart.id}
                        cart = {cart}
                        ></Cart>)
                }
                <div className='text-center'>
                    <button onClick={ () => chooseOne(cart)} className='btn btn-success mt-4 me-3'>Choose One</button>
                    <button onClick={clearCart} className='btn btn-warning mt-4'>Choose Again</button>
                    <Choose
                        choose = {choose}
                    ></Choose>
                </div>
            </div>
            </div>
            <Question></Question>
        </div>
    );
};

export default Shop;