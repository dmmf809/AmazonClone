import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

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
  };

  return (
    <>
      <div className='product'>
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
        <img src={image} alt={title} />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default Products;
