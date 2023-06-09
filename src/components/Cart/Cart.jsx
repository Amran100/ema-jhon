import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for(const product of cart){
        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price *product.quantity
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = totalPrice*7/100

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Shipping :${totalShipping}</p>
                <p>Tax :${tax.toFixed(2)}</p>
                <h6>Grand Total :${grandTotal.toFixed(2)}</h6>
                <button  className='clear-cart-btn'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
        </div>
    );
};

export default Cart;