import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    // console.log(products)

    // remove item hander
    const handleRemoveItem = id => {
        const remainingItem = cart.filter(product => product.id !== id);
        setCart(remainingItem);

        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-items'>
                {
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;