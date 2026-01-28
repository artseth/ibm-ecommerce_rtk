import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ShoppingCart.css';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';

const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.cartItems)
const totalAmount = cartItems.reduce ((total, item) => total + item.price * item.quantity, 0);

const handleRemoveItem = ItemId => {
    dispatch(removeItemFromCart(ItemId));
};

const handleClearCart = () => {
    dispatch(clearCart());
};

const handleIncreaseQuantity = ItemId => {
    dispatch(increaseItemQuantity(ItemId));
};

const handleDecreaseQuantity = ItemId => {
    dispatch(decreaseItemQuantity(ItemId));
};

const ShoppingCart = () => {

    return(
        <>
            <div className='shopping-cart'>
                <h2 className='shopping-cart-title'>Shopping Cart</h2>
                <ul className='cart-items'>

                </ul>
                <button className='clear-cart-btn'>Clear Cart</button>

            </div>
        </>
    )
}