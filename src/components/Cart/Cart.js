import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props

      let totalQuantity = 0
      let total = 0
      for ( const product of cart){
        if(!product.quantity){
          product.quantity = 1
        }
        totalQuantity = totalQuantity + product.quantity
        total = total + product.price*product.quantity
        }
      
      const shipping = cart.reduce((previous , product) =>previous +product.shipping,0)
      const totalBeforeTax = total+ shipping;
      const tax = total*0.1
      const orderTotal =totalBeforeTax  + tax;
    return (
            <div className='cart-container'>
                <h2>Order Summery</h2>
                <h4>Items Ordered : {totalQuantity}</h4>
                <p><small>Items : ${total > 0? total.toFixed(2) : total}</small></p>
                <p><small>Shipping & Handling: ${shipping > 0 ? shipping.toFixed(2): shipping}</small></p>
                <p><small>Total before tax: ${totalBeforeTax> 0 ? totalBeforeTax.toFixed(2) : totalBeforeTax}</small></p>
                <p><small>Estimated Tax: ${tax > 0? tax.toFixed(2): tax}</small></p>
                <h3>Order Total: {orderTotal > 0? orderTotal.toFixed(2) :orderTotal}</h3>
                <button className ='review-order-btn'>Review your order</button>
            </div>
    );
};

export default Cart;