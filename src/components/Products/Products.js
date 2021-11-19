import './style.css';

function Products({ title, image, price, rating }) {
  return (
    <>
      <div className='product'>
        <div className='product__info'>
          <p>{title}</p>
          <p className='product__size'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt='Images' />
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default Products;
