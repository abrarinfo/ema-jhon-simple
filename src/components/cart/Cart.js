import React from 'react';
import './cart.css'

const Cart = (props) => {

    // cart
    const cart = props.cart;

    // function for make number round
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    // total price
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // let totalPrice = 0;
    // for(let i = 0; i < cart.length; i++) {
    //     const prd = cart[i];
    //     totalPrice = totalPrice + prd.price;
    // }

    // shipping
    let Shipping = 0;
    if (totalPrice > 100) {
        Shipping = 0;
    }
    else if (totalPrice > 50) {
        Shipping = 6.99;
    }
    else if (totalPrice > 0) {
        Shipping = 10.99;

    }

    // tax
    const tax = totalPrice / 10;

    // grand total
    const grandTotal =  formatNumber(totalPrice + Shipping + Number(tax));

    return (
        <div>
            <h2>Order Summery</h2>
            <p>Items Ordered: <b>{cart.length}</b></p>
            <p>Product Price: <b>${formatNumber(totalPrice)}</b></p>
            <p>Shipping And Handling: <b>${Shipping}</b></p>
            <p>Tax + VAT: <b>${formatNumber(tax)}</b></p>
            <hr/>
            <h3 style={{color: 'red', fontWeight: '500'}}>Total Price: <b>${grandTotal}</b></h3>
        </div>
    );
};

export default Cart;