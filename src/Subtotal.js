import React from 'react'
import "./Subtotal.css"
import { NumericFormat } from "react-number-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  // const totalPrice = basket.reduce((accumulator, currentItem) => accumulator + currentItem?.price, 0); // My part of the homework
  const getTotalProducts = (basket) => {
      return basket?.reduce((amount, item) => item.amount + amount, 0);
  }
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
            <>
                <p>
                    {/* Also part of the homework */}
                    Subtotal ({getTotalProducts(basket)}): <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/> 
                    This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
