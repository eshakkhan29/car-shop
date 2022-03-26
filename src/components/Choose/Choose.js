import React from 'react';

const Choose = ({choose}) => {
    console.log(choose);
    const {image, name, price} = choose;
    return (
        <div>
            <div>
            <div className="card border-0 p-4">
                <img src={image} className="card-img-top card-image" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Choose;