import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../StateProvider/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import CartIsEmpty from './CartIsEmpty';
import CheckoutProduct from './CheckoutProduct';
import './style.css';

const Checkout = () => {
  const [{ cart }] = useStateValue();

  return (
    <>
      <div className='checkout__ad'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/15/credit/img19/CBCC/maple/cacbcc-vc_cardcircle-np._CB463993881_.png'
          alt='Advertisement'
        />
        <span>
          You could{' '}
          <strong style={{ color: '#0079af' }}>get 5% back at Amazon.ca</strong>
          , grocery stores, and restaurants fot 6 months upon approval for the{' '}
          <strong>Amazon.ca Rewards Mastercard.</strong>
        </span>

        <a
          href='https://www.amazon.ca/gp/product/B07MJM4F44/ref=cacbcc_maple_vc_en_unrec_acq_m?pr=concacbcc&inc=cacbccunrec&ts=4lpxmbor6nubqhsn0dsrrwxwq951r6o&plattr=math&place=vc&imp=47dfc680-8c65-407d-8067-3a1794227ccd'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn more
        </a>
      </div>
      <div className='checkout'>
        {cart.length !== 0 ? (
          <>
            <div className='checkout__left'>
              <p className='checkout__title'>Your Amazon Cart</p>
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
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className='checkout__product-subtotal'>
                      Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>

            <div className='checkout__right'>
              <Subtotal />
            </div>
          </>
        ) : (
          <div className='checkout__left'>
            <CartIsEmpty />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
