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

        <a
          href='https://www.amazon.ca/gp/product/B07MJM4F44/ref=cacbcc_maple_vc_en_unrec_acq_m?pr=concacbcc&inc=cacbccunrec&ts=4lpxmbor6nubqhsn0dsrrwxwq951r6o&plattr=math&place=vc&imp=47dfc680-8c65-407d-8067-3a1794227ccd'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn more
        </a>
      </div>
      <div className='checkout'>
        <div className='checkout__left'>
          <p className='checkout__title'>Your Amazon Cart</p>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
