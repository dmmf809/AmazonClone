import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './style.css';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <div className='signin'>
        <Link to='/'>
          <img
            className='signin__logo'
            src={process.env.PUBLIC_URL + '/assets/amazon-signIn.png'}
            alt='Amazon'
          />
        </Link>
        <div className='signin__container'>
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail address:</h5>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password:</h5>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='signIn__button'
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to <span>AMAZON'S FAKE CLONE</span>{' '}
            Conditions of Use and Privacy Notice.
          </p>
        </div>
        <p className='signUp__msg'>New to Amazon?</p>
        <Link to='/register'>
          <button className='register__button'>
            Create your Amazon Account
          </button>
        </Link>
        <p className='tag'>© 2021 Amazon Fake Clone</p>
      </div>
    </>
  );
};

export default LogIn;
