const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51JzTrjKC8udb4pibUmJLnnaf2fQ16enfJMsVw0PPnX9rwRPOeSolgGEm62cMGUcr2w8gKEQppKR3ezfz1YJtYXgs0087YNvcFb'
);

//Set up an API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true })); //safety
app.use(express.json()); //send requests

//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received!!', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'cad',
  });
  //OK- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-83b6b/us-central1/api
