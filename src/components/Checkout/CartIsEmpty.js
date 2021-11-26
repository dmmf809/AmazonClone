import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

const CartIsEmpty = () => {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className='checkout__cart-empty'>
        <img
          src={process.env.PUBLIC_URL + '/assets/empty-cart.svg'}
          alt='Amazon cart is empty'
        />
        <div className='checkout__cart-empty-info'>
          {user ? (
            <>
              <p>Hello, {user.displayName}!</p>
              <p>Your Amazon Cart is empty</p>
              <a href='/'>Shop today's deals</a>
            </>
          ) : (
            <>
              <p>Your Amazon Cart is empty</p>
              <a href='/'>Shop today's deals</a>
              <br />
              <Link to='/signin'>
                <button className='checkout__signIn'>
                  Sign in to your account
                </button>
              </Link>
              <Link to='/register'>
                <button className='checkout__signUp'>Sign up now</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartIsEmpty;
