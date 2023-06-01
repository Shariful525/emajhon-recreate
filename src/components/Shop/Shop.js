import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')    
            .then(res => res.json())
        .then(data => setProducts(data))
    })

const addToCart = (product) => {
    console.log(product);
    
    const newCart = [...cart, product];
    setCart(newCart)
    }




    return (
        <div className='shop_container'> 
            <div className='product_container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart_container'>
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;