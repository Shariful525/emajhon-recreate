import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, ratings } = props.product;
    // const {addToCart} = props;
    return (
        <div className='product_details'>
            <img src={img} alt="" />
                <div className='product_price_other'>
                    <h4 className='product_name'>{name}</h4>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Seller: {ratings} starts</small></p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='button_cart'>
                <p>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;