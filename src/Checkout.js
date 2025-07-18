import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/I/11RNLXhvOXL.jpg' alt='Advertisement banner'/>
        
        <div>
            <h2 className='checkout__title'>
                Your Shopping Cart
            </h2>

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/* CheckoutProduct */}
            {/* BasketItem */}
            {/* BasketItem */}
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
