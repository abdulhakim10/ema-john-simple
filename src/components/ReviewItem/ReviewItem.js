import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {name, price, img, quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-detail">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;