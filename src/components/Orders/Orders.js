import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { db } from '../../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import Items from './Items';
import './style.css';

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      //Information from the firebase databas
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        //sends/updates real time response
        .onSnapshot((snapshot) => {
          return setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <>
      <div className='orders'>
        <h1>Your Orders</h1>
        {!user ? (
          navigate('/signin')
        ) : (
          <div className='orders__items'>
            {orders?.map((items, i) => (
              <Items key={i} items={items} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
