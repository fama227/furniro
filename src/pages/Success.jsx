import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

function Success() {
  return (
    <div className="success-page-container">
      <div className="success-card">
        <div className="checkmark-wrapper">
          <span className="checkmark-icon">✔</span>
        </div>
        
        <div className="order-id-badge">Order Confirmed</div>
        
        <h1>Thank You for Your Purchase!</h1>
        <p>
          Your stylish new furniture is being prepared for delivery. 
          We've sent a confirmation email with all the details of your order.
        </p>

        <Link to="/shop">
          <button className="back-shop-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;