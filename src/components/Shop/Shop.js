import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Choose from '../Choose/Choose';

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
            return alert('you can`t add more product')
        }
        else{
            setCart(newCart);
        }
    }
    const chooseOne = (cart) =>{
        if (cart.length === 0) {
            return alert('pless add to cart')
        }
        const random = Math.round(Math.random()*3);
        const oneItem = cart[random];
        setChoose(oneItem);
    }
    return (
        <div className='row'>
            <div className='product row row-cols-lg-3 g-4 p-lg-5 p-3 mt-0 col-lg-9 col-8'>
                {
                    car.map(car => <Product 
                        key = {car.id} 
                        data = {car}
                        addToCart = {addToCart}
                        ></Product>)
                }
            </div>
            <div className='cart col-lg-3 col-4 pt-5'>
                <h2 className='text-center text-warning'>Selected Product</h2>
                {
                    cart.map(cart => <Cart
                        key = {cart.id}
                        cart = {cart}
                        choose = {choose}
                        ></Cart>)
                }
                <div>
                    <button onClick={ () => chooseOne(cart)} className='btn btn-success mt-4 d-block'>Choose one for me</button>
                    <button className='btn btn-success mt-4'>Choose Again</button>
                    <Choose
                        choose = {choose}
                    ></Choose>
                </div>
            </div>
        </div>
    );
};

export default Shop;