import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './style.css';

const Checkout = () => {
  return (
    <>
      <div className='checkout__ad'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/15/credit/img19/CBCC/maple/cacbcc-vc_cardcircle-np._CB463993881_.png'
          alt='Advertisement'
        />
        <span>
          You could{' '}
          <strong style={{ color: '#0079af' }}>get 5% back at Amazon.ca</strong>
          , grocery stores, and restaurants fot 6 months upon approval for the{' '}
          <strong>Amazon.ca Rewards Mastercard.</strong>
        </span>

        <button>Learn more</button>
      </div>
      <div className='checkout'>
        <div className='checkout__left'>
          <h2 className='checkout__title'>Your Amazon Cart</h2>
        </div>
        <div className='checkout__right'>
          <Subtotal />
          <h2>Your subtotal:</h2>
        </div>
      </div>
    </>
  );
};

export default Checkout;
