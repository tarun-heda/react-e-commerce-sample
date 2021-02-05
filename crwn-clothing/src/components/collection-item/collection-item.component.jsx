import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addCartItem } from '../../redux/cart/cart.action';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage : `url(${imageUrl})`}}>
            </div>
            <CustomButton inverted onClick={() => (addCartItem(item))}>ADD TO CART</CustomButton>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ `$${price}` }</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  addCartItem: cartItem => dispatch(addCartItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);