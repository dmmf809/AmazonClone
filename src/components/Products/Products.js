import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    //shoots an action into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(`Item added to Amazon Cart!`, {
      draggable: false,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
      pauseOnHover: false,
      closeOnClick: false,
      closeButton: false,
      pauseOnFocusLoss: false,
    });
  };

  return (
    <>
      <div className='product'>
        <ToastContainer transition={Slide} />

        <div className='product__info'>
          <p>{title}</p>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>
        <img className='product__img' src={image} alt={title} />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default Products;
