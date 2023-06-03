import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    //other way to fix decimal
    // let tax = total * 0.1;
    // let inTax = tax.toFixed(3)

    const grandTotal = total + shipping + tax;


    return (
        <div className='cart_style'>
               <h4>Order Summary</h4>
            <p>Selected Items {quantity}</p>
            <p>Total Price ${total}</p>
            <p>Total Shipping ${shipping}</p>
            <p>Tax ${tax}</p>
            <h4>Grand Total ${grandTotal}</h4>
            
        </div>
    );
};

export default Cart;