import Products from '../Products/Products';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <Carousel interval={4000} indicators={false}>
            <Carousel.Item>
              <img
                src={process.env.PUBLIC_URL + '/assets/amazon-banner.jpg'}
                alt='Home Banner'
                className='d-block w-100 home__image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={process.env.PUBLIC_URL + '/assets/amazon-banner2.jpg'}
                alt='Home Banner'
                className='home__image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={process.env.PUBLIC_URL + '/assets/amazon-banner3.jpg'}
                alt='Home Banner'
                className='home__image'
              />
            </Carousel.Item>
          </Carousel>
          <div className='home__row'>
            <Products
              id='haMeKsA4L'
              title='The Lean Startup'
              price={27.44}
              image={process.env.PUBLIC_URL + '/assets/book.png'}
              rating={5}
            />
            <Products
              id='jr7WLTXUQi'
              title='PHISINIC Stand Mixer, 5.8-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer (Red)'
              price={129.99}
              image={process.env.PUBLIC_URL + '/assets/mixer.jpg'}
              rating={4}
            />
          </div>
          <div className='home__row'>
            <Products
              id='qtWzONFhda'
              title='Samsung Monitor T55 32 Inch |32" Curved Monitor (LC32T550FDNXZA)'
              price={249.99}
              image={process.env.PUBLIC_URL + '/assets/curved-monitor.jpg'}
              rating={4}
            />
            <Products
              id='sLAdqVGdN6'
              title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
              price={23.68}
              image={process.env.PUBLIC_URL + '/assets/book2.jpg'}
              rating={5}
            />
            <Products
              id='T2Zu3BGM'
              title='BLACK+DECKER HNVC215B10 Hand Vacuum, White'
              price={32.98}
              image={process.env.PUBLIC_URL + '/assets/portable-vacuum.jpg'}
              rating={5}
            />
          </div>
          <div className='home__row'>
            <Products
              id='ppyXqjBiXN'
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
