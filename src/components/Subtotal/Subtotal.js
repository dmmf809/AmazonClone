import CurrencyFormat from 'react-currency-format';
import './style.css';

const Subtotal = () => {
  return (
    <>
      <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className='subtotal__title'>
                Subtotal ( items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        <button>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default Subtotal;
