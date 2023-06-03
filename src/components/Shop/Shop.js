import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')    
            .then(res => res.json())
        .then(data => setProducts(data))
    })

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart)
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct)

                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
            setCart(savedCart)
        }
},[products])


const addToCart = (selectedProduct) => {
    console.log(selectedProduct);

    let newCart = [];

    const exists = cart.find(product => product.id === selectedProduct.id)
    if (!exists) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
    }
    else {
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
    
    
    setCart(newCart)
    //Add to local storage
    addToDb(selectedProduct.id)
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