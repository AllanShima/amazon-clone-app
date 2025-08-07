// Building an express.js server to handle API requests
require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({ origin: true })); // app.cors does not work
app.use(express.json()); // Parse JSON bodies

// API Routes
// Handling the payment request from the frontend (payment.js)
app.post('/payments/create', async (req, res) => {
    try {
        const total = req.query.total;
        if (!total || total <= 0) {
            return res.status(400).send({ error: 'Invalid or missing total.' });
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // amount in subunits
            currency: "usd",
        });
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create payment intent.' });
    }
});

app.get('/', (req, res) => res.status(200).send('Hello from the server! (It works!)'));

exports.api = functions.https.onRequest(app);