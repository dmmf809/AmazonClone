import './style.css';
import moment from 'moment'; //js date library, helps displaying, parsing, manipulating, and validating date/time
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Items = ({ items }) => {
  return (
    <>
      <div className='items'>
        <h2>Order</h2>
        {/*Timestamp from the time the order was created*/}
        <p>{moment.unix(items.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='items__id'>
          <small>{items.id}</small>
        </p>
        {items.data.cart?.map((item, i) => (
          <CheckoutProduct
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
            hideButton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3 className='order__total'>
                Order Total:
                <strong>{value}</strong>
              </h3>
            </>
          )}
          decimalScale={2}
          /*Revert it back to subunits */
          value={items.data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </div>
    </>
  );
};

export default Items;
