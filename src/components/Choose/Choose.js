import React from 'react';

const Choose = ({choose}) => {
    const {image, name, price} = choose;
    return (
        <div>
            <div>
            <div className="card border-0 mt-4">
                <img src={image} className="card-img-top card-image" alt="" />
                <div className="card-body p-0 mt-3">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Choose;