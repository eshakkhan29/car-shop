import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [car, setCar] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCar(data))
    },[])
    const addToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    }

    return (
        <div className='row'>
            <div className='product row row-cols-lg-3 g-4 p-5 mt-0 col-lg-9 col-8'>
                {
                    car.map(car => <Product 
                        key={car.id} 
                        data={car}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className='cart col-lg-3 col-4'>
                {
                    cart.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;