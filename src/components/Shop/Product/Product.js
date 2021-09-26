import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { img, name, price, seller, stock } = props.product
    return (
            <div className='product-container'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                    <h3>{name}</h3>
                    <p><small>by:</small>{seller}</p>
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick={ ()=>props.handleAddToCart(props.product)} className='addToCart-btn'>{cartIcon}add to cart</button>
                </div>
            </div>
    );
};

export default Product;