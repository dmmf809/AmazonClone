import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import './style.css';

const Orders = () => {
  const [{ cart, users }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Information from the firebase database
    db.collection('users')
      .doc(users?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      //sends/updates real time response
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  return (
    <>
      <div className='orders'>
        <h1>Your Orders</h1>
        {}
      </div>
    </>
  );
};

export default Orders;
