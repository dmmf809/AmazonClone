import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
