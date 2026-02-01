import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import ShopFeatures from '../components/ShopFeatures'; 
import FuniroFooter from '../components/FuniroFooter';
import shophero from '../assets/shophero.png';

function Checkout({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Pakistan',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  // UPDATED: Calculate total based on Price x Quantity
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discountedPrice || item.originalPrice || 0;
    const qty = item.quantity || 1;
    return acc + (price * qty);
  }, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Safety check: Don't submit if cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderPayload = {
      customer: formData,
      items: cartItems,
      totalAmount: subtotal,
      paymentMethod: document.querySelector('input[name="payment"]:checked')?.id || 'bank'
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      if (response.ok) {
        // Clear cart in App.js state
        if (setCartItems) {
          setCartItems([]);
        }
        // Redirect to Success Page
        navigate('/success'); 
      } else {
        const errorData = await response.json();
        alert("Error from server: " + (errorData.message || "Failed to place order"));
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("SERVER ERROR: Please ensure you have 'node server.js' running in your second terminal!");
    }
  };

  return (
    <div className="checkout-page-wrapper">
      <div className="cart-hero-section" style={{ backgroundImage: `url(${shophero})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Checkout</h1>
          <div className="hero-breadcrumb">
             <span className="home-link">Home</span> &gt; <span>Checkout</span>
          </div>
        </div>
      </div>

      <div className="checkout-main-container">
        <form className="checkout-flex-layout" onSubmit={handlePlaceOrder}>
          
          <div className="billing-details-column">
            <h2 className="section-title">Billing details</h2>
            <div className="billing-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label>Street address</label>
                <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Town / City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="order-summary-column">
            <div className="summary-header-row">
               <span className="summary-header-label">Product</span>
               <span className="summary-header-label">Subtotal</span>
            </div>

            {cartItems.map((item) => (
               <div className="summary-product-item" key={item.id}>
                 <span className="summary-item-name">
                    {item.title} <span className="item-qty">x {item.quantity || 1}</span>
                 </span>
                 <span className="summary-item-price">
                    Rs. {((item.discountedPrice || item.originalPrice || 0) * (item.quantity || 1)).toLocaleString()}
                 </span>
               </div>
            ))}

            <div className="summary-data-row total-row">
               <span>Total</span>
               <span className="gold-text-total">Rs. {subtotal.toLocaleString()}</span>
            </div>

            <hr className="divider" />

            <div className="payment-methods">
               <div className="method-item">
                 <input type="radio" name="payment" id="bank" defaultChecked />
                 <label htmlFor="bank">Direct Bank Transfer</label>
                 <p className="method-description">Make your payment directly into our bank account.</p>
               </div>
               <div className="method-item radio-only">
                 <input type="radio" name="payment" id="cod" />
                 <label htmlFor="cod">Cash On Delivery</label>
               </div>
            </div>

            <button type="submit" className="place-order-btn">Place order</button>
          </div>
        </form>
      </div>

      <ShopFeatures />
      <FuniroFooter />
    </div>
  );
}

export default Checkout;