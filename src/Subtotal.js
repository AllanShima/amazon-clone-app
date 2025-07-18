import React from 'react'
import "./Subtotal.css"
import { NumericFormat } from "react-number-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  // const totalPrice = basket.reduce((accumulator, currentItem) => accumulator + currentItem?.price, 0); // My part of the homework

  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
            <>
                <p>
                    {/* Also part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
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

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
