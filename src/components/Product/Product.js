import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props)
   const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className="product-info">
            <p className='product-name'>{name}</p>
            <p className='product-name'>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
          </div>
          <button className='cart-btn'>
            <p>Add to Cart</p>
          </button>
        </div>
    );
};

export default Product;