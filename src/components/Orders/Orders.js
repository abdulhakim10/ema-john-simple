import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    // console.log(products)

    // remove item handler
    const handleRemoveItem = id => {
        const remainingItem = cart.filter(product => product._id !== id);
        setCart(remainingItem);

        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-items'>
                {
                    cart.map(product => <ReviewItem 
                    key={product._id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to='/'>Shop More</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;