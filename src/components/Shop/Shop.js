import './Shop.css'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb'

const Shop = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [dispalyProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProduct)
    }
    let totalQuantity = 0
    for ( const product of cart){
        if(!product.quantity){
          product.quantity = 1
        }
        totalQuantity = totalQuantity + product.quantity
        }
    return (
        <div>
            <div className='search-container'>
                <input onChange={handleSearch} type="text" placeholder='Search  here for products.....' />
                <a href="/review" className='cart-icon'>
                    {cartIcon} <span className='cart-count'>{totalQuantity}</span>
                </a>
            </div>
            <div className='shop-container'>
                <div>
                    {dispalyProducts.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        product={product}
                        key={product.key}
                    >
                    </Product>)}
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;