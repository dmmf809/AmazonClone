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
              </>
            }
          ></Route>
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
