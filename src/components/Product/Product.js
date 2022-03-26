import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({data, addToCart}) => {
    const {name, price, image, id} = data;
    return (
        <div className='col'>
            <div className="card">
                <img src={image} className="card-img-top card-image" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text"><b>price:</b> {price}</p>
                    <p className="card-text"><b>id:</b> {id}</p>
                    <button onClick={() => addToCart(data)} className="btn btn-warning">Add to Cart
                    <span className='ms-2'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;