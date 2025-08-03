import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, amount, hideButton }) {
    const [{ basket }, dispatch] = useStateValue(); // array destructuring

    const quantityInBasket = amount; // Use the amount prop directly

    const removeFromBasket = () => {
        if (quantityInBasket > 1) {
            // If amount is more than 1, decrement it
            dispatch({
                type: 'DECREMENT_ITEM_QUANTITY', // New action type
                id: id,
            });
        } else {
            // If amount is 1 or less, remove the item completely
            dispatch({
                type: 'REMOVE_FROM_BASKET', // Existing action type
                id: id,
            });
        }
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image}/>
        
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    
                    {Array(rating) // Render the stars
                    .fill()
                    .map(() => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                <p>Quantity in basket: {quantityInBasket}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct
