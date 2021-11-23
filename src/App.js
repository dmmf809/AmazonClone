import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import SignIn from './components/SignIn/SignIn';

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
