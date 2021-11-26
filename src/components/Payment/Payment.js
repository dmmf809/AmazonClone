import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './style.css';
import { useEffect, useState } from 'react';
import { getCartTotal } from '../StateProvider/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { db } from '../../firebase';

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    //Generate the special stripe secret which allows the payment to go through
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //Stripe expects total in a currencies subunits i.e $10000 = $10
        url: `/payment/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        //NoSQL
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_CART',
        });
        navigate('/orders', { replace: true });
      });
  };

  const handleChange = (e) => {
    //Listens for changes in the CardElement
    //and display any errors as the customer types their card details
    setDisabled(e.empty); //disables button
    setError(e.error ? e.error.message : ''); //shows error or show nothing
  };
  return (
    <>
      <div className='payment'>
        <div className='payment__container'>
          <h1>Checkout ({<Link to='/checkout'>{cart?.length} items</Link>})</h1>
          {/*Payment section -- delivery address*/}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery address</h3>
            </div>
            <div className='payment__address'>
              <p>{user?.displayName}</p>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Calgary, AB</p>
            </div>
          </div>
          {/*Payment section -- review items*/}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Review items </h3>
            </div>
            <div className='payment__items'>
              {cart.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          {/*Payment section -- payment method*/}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
              {/*Stripe wil go here*/}
              <form onSubmit={handleSubmit}>
                <p>
                  Only use the following for transaction to be completed <br />
                  (Card number: 4242 4242 4242 4242 MM/YY: 02 / 42 CVC: 424 ZIP:
                  24242)
                </p>
                <CardElement onChange={handleChange} />
                <div className='payment__price-container'>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>
                          Order Total:
                          <strong>{value}</strong>
                        </h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                  </button>
                </div>
                {/*Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
