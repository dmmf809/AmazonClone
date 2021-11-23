import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../StateProvider/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className='subtotal__title'>
                Subtotal ({cart.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
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
