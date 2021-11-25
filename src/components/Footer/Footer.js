import './style.css';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scroll(0, 0);
  };
  return (
    <>
      <div className='footer__top-button' onClick={handleClick}>
        Back to top
      </div>
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__heading'>
            <h3>Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Amazon and Our Planet</li>
              <li>Investor Relations</li>
              <li> Press Releases</li>
            </ul>
          </div>
          <div className='footer__heading'>
            <h3>Make Money ith Us</h3>
            <ul>
              <li>Sell on Amazon</li>
              <li>Amazon Associates</li>
              <li>Sell on Amazon Handmade</li>
              <li> Advertise Your Products</li>
              <li> Independently Publish with Us</li>
              <li> Host an Amazon Hub</li>
            </ul>
          </div>
          <div className='footer__heading'>
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>Amazon.ca Rewards Mastercard</li>
              <li>Shop with Points</li>
              <li>Sell on Amazon Handmade</li>
              <li>Reload Your Balance</li>
              <li> Amazon Currency Converter</li>
              <li>Gift Cards</li>
              <li>Amazon Cash</li>
            </ul>
          </div>
          <div className='footer__heading'>
            <h3>Let Us Help You</h3>
            <ul>
              <li> COVID-19 and Amazon</li>
              <li>Shipping Rates &amp; Policies</li>
              <li>Amazon Prime</li>
              <li>Reload Your Balance</li>
              <li>Returns Are Easy</li>
              <li>Manage your Content and Devices</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='footer__extension'>
          <img
            className='footer__logo'
            src={process.env.PUBLIC_URL + '/assets/amazon-logo.png'}
          />
          <div className='footer__language'>
            <LanguageIcon className='footer__icon' /> <span>English</span>
          </div>
        </div>
        <div className='footer__copyright'>© 2021, AMAZON FAKE CLONE</div>
      </div>
    </>
  );
};

export default Footer;
