import React from 'react';

import { clearCartItem, removeItem, addCartItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
    const { name, price, quantity, imageUrl } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} className='image' alt='item'>
            </img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => (dispatch(removeItem(cartItem)))}>&#10094;</div>
             <span className='value'>{quantity}</span>   
            <div className='arrow' onClick={() => (dispatch(addCartItem(cartItem))) }>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => (dispatch(clearCartItem(cartItem)))}>
            &#10005;
        </div>
    </div>
)}

export default CheckoutItem;