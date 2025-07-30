import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

import { forwardRef } from 'react';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__spacer'></div>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/I/11RNLXhvOXL.jpg' alt='Advertisement banner'/>
        
        <div>
            <h3 className='checkout__user'>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>
                Your Shopping Cart
            </h2>

            <FlipMove >
              {basket.map(item => (
                <div key={item.id}>
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    amount={item.amount}
                  />                    
                </div>
              ))}                  
            </FlipMove>

        </div>    

      </div>

      <div className='checkout__right'>
        <h2>
            <Subtotal/>   
        </h2> 
      </div>

    
    </div>
  )
}

export default Checkout
