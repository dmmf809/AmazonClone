import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className='checkout__product'>
      <img className='checkout__product-image' src={image} alt={title} />
      <div className='checkout__product-info'>
        <p className='checkout__product-title'>{title}</p>
        <p className='checkout__product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkout__product-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className='checkout__product-button' onClick={removeFromCart}>
          {' '}
          Delete
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
