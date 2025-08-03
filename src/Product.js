import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, amount }) {
  const [{ basket, user }, dispatch] = useStateValue(); // array destructuring

  // console.log("This is the basket: ", basket);

  // This is calculated directly in the render or when needed, ensuring it's always up-to-date
  const currentProductInBasket = basket.find(item => item.id === id);
  const quantityInBasket = currentProductInBasket?.amount || 0;

  const addToBasket = () => {
    // dispatch the item onto the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      // You should not pass amount here. The reducer handles the increment.
      // Simply pass the new item data, and the reducer will set the initial amount to 1.
      },
    });
  };

  return (
    <div className='product'>
      {/* Title */}
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (<p key={i}>🌟</p>))}
        </div>
      </div>
      
      <img src={image} alt=""></img>
        
      <button onClick={addToBasket}>Add to Basket</button>
      {quantityInBasket > 0 && <p>Quantity in basket: {quantityInBasket}</p>}
    </div>
  )
}

export default Product;
