import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import SignIn from './components/SignIn/SignIn';
import Register from './components/SignIn/Register';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider/StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Footer from './components/Footer/Footer';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51JzTrjKC8udb4pibOQcB6JuUwafUbQeTEU5nMUi69nhyuIWZbmukZljl12IKjwDxzoBpnmB49s8LwZZaMstFBqIf00bIAWOLhL'
);

function App() {
  const [{}, dispatch] = useStateValue();

  //Identifies who the current logged in user is
  useEffect(
    () => {
      //onAuthStateChanged - once the app loads this useEffect is attatched
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          //user just logged in or was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        } else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      });
    },
    //will only run once when the component loads since the [] is empty
    []
  );
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route
            path='/payment'
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>

                <Footer />
              </>
            }
          ></Route>
          <Route
            path='/orders'
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
