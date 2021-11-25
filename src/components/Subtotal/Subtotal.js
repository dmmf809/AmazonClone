import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router';
import { getCartTotal } from '../StateProvider/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ cart, user }] = useStateValue();

  const handleClick = () => {
    if (user) {
      navigate('/payment');
    } else {
      navigate('/signin');
    }
  };

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
        <button onClick={handleClick}>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default Subtotal;
