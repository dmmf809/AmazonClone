import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './style.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //configures the new user's displayName which is a property from .user.updateProfile
        auth.user.updateProfile({ displayName: name }).then(() => {
          //successfully created a new user with email and password
          if (auth) {
            navigate('/');
            console.log(auth);
          }
        });
      })
      .catch((error) => alert(error.message));
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
          <h1 className='register__title'>Create account</h1>
          <form>
            <h5>Your name</h5>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h5>Email</h5>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='signIn__button'
              onClick={handleRegister}
            >
              Create your Amazon account
            </button>
          </form>

          <p>
            By creating an account, you agree to{' '}
            <span>AMAZON'S FAKE CLONE</span> Conditions of Use and Privacy
            Notice.
          </p>
          <br />
          <hr />
          <p className='existingAccount'>
            Already have an account?{' '}
            <Link to='/signin' className='signInPage'>
              <span className='signInPage__text'>Sign In</span>
            </Link>
          </p>
        </div>
        <p className='tag'>© 2021 Amazon Fake Clone</p>
      </div>
    </>
  );
};

export default Register;
