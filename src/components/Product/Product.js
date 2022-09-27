import React from 'react';

const Product = (props) => {
   const {name, img, seller, price, rating} = props.product;
    return (
        <div>
          <img src={img} alt="" />
        </div>
    );
};

export default Product;