import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props)
  const {handleAddToCart, product} = props;
   const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className="product-info">
            <p className='product-name'>{name}</p>
            <p className='product-name'>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
          </div>
          <button onClick={() => handleAddToCart(product)} className='cart-btn'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;