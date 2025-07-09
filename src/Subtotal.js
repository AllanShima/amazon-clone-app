import React from 'react'
import "./Subtotal.css"
import { NumericFormat } from "react-number-format"

function Subtotal() {
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
            <>
                <p>
                    {/* Also part of the homework */}
                    Subtotal ({value} items): <strong>0</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0} // part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
