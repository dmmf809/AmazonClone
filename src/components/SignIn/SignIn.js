import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {};

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
            <input type='text' value={email} onChange={handleEmail} />
            <h5>Password:</h5>
            <input type='password' value={password} onChange={handlePassword} />
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
            Conditions of Use and Privacy Notice
          </p>
        </div>
        <p className='signUp__msg'>New to Amazon?</p>
        <button className='register__button' onClick={handleRegister}>
          Create your Amazon Account
        </button>
        <p className='tag'>© 2021 Amazon Fake Clone</p>
      </div>
    </>
  );
};

export default LogIn;
