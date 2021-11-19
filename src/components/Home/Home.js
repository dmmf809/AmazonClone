import Products from '../Products/Products';
import './style.css';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <img
            src={process.env.PUBLIC_URL + '/assets/amazon-banner.jpg'}
            alt='Home Banner'
            className='home__image'
          />
          <div className='home__row'>
            <Products
              title='The Lean Startup'
              price={27.44}
              image={process.env.PUBLIC_URL + '/assets/book.png'}
              rating={5}
            />
            <Products
              title='PHISINIC Stand Mixer, 5.8-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer (Red)'
              price={129.99}
              image={process.env.PUBLIC_URL + '/assets/mixer.jpg'}
              rating={4}
            />
          </div>
          <div className='home__row'>
            <Products
              title='Samsung Monitor T55 32 Inch |32" Curved Monitor (LC32T550FDNXZA)'
              price={249.99}
              image={process.env.PUBLIC_URL + '/assets/curved-monitor.jpg'}
              rating={4}
            />
            <Products
              title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
              price={23.68}
              image={process.env.PUBLIC_URL + '/assets/book2.jpg'}
              rating={5}
            />
            <Products
              title='BLACK+DECKER HNVC215B10 Hand Vacuum, White'
              price={32.98}
              image={process.env.PUBLIC_URL + '/assets/portable-vacuum.jpg'}
              rating={5}
            />
          </div>
          <div className='home__row'>
            <Products
              title='RK ROYAL KLUDGE RK84 Pro 80% RGB Triple Mode BT5.0/2.4G/Wired Hot-Swappable Mechanical Keyboard, 84 Keys Wireless Bluetooth Gaming Keyboard with Aluminum Frame'
              price={149.99}
              image={process.env.PUBLIC_URL + '/assets/rk-keyboard.jpg'}
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
