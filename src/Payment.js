import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { getBasketTotal } from "./reducer";
import { NumericFormat } from 'react-number-format';

import axios from './axios';

import { db } from './firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate(); // used to be able to programmatically change the url (was called useHistory)

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        const getClientSecret = async () => {
            const total = Math.round(getBasketTotal(basket) * 100);
            console.log(getBasketTotal(basket))
            if (total > 0) {
                try {
                    const response = await axios({
                        method: 'post',
                        url: `/payments/create?total=${total}`, // Send total as a URL query parameter
                    });
                    setClientSecret(response.data.clientSecret);
                } catch (error) {
                    console.error('Error fetching client secret:', error.response.data);
                    setError('Could not process payment. Please try again.');
                }
            }
        };

        getClientSecret();
    }, [basket]);

    useEffect(() => {  
        window.scrollTo(0, 0);
    }, []);

    console.log('The secret is >>> ', clientSecret);

    const handleSubmit = async event => {
        // processes the payment by sending the card details to Stripe's API

        event.preventDefault();
        setProcessing(true);

        // Check if the clientSecret is a valid string before proceeding
        if (!stripe || !elements || !clientSecret) {
            console.error("Stripe.js has not loaded yet, or clientSecret is missing.");
            console.log("Stripe:", stripe);
            console.log("Elements:", elements);
            console.log("Client Secret:", clientSecret);
            return;
        }

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({ paymentIntent }) => {
            // paymentIntent = payment confirmation (object that comes from Stripe API)

            // Firestore logic - refatorado para o Firebase v9+ (modular)

            const userDocRef = doc(db, "users", user?.uid); // Referência do documento do usuário
            const ordersCollectionRef = collection(userDocRef, "orders"); // Referência para a subcoleção de pedidos
            const orderDocRef = doc(ordersCollectionRef, paymentIntent.id); // Referência para o pedido específico

            // Writes the data to the databse
            await setDoc(orderDocRef, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            });

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true }); // swapping the page instead of coming back to /payment
        })
    }

    const handleChange = event => {
        // It listens for changes in the CardElement
        // and display any errors as the customer types their card details

        setDisabled(event.empty); // If the event is empty, then disable the button
        setError(event.error ? event.error.message : ""); // If theres an error, display the error or nothing
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment Section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {/* For every single item inside of basket, return  */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}    
                                amount={item.amount}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe stuff */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <NumericFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded || !clientSecret}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
