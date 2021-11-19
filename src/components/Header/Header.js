import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src={process.env.PUBLIC_URL + '/assets/amazon-logo.png'}
            alt='Amazon Logo'
          />
        </Link>

        <div className='header__search'>
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header__searchIcon' />
        </div>
        <div className='header__nav'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello, Guest</span>
            <span className='header__optionLineTwo'>Sign in</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>&amp; Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </div>
        <Link to='/checkout'>
          <div className='header__optionCart'>
            <ShoppingCartOutlinedIcon />
            <span className='header__optionLineTwo header__cartCount'>0</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
