import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import ShopFeatures from '../components/ShopFeatures'; 
import FuniroFooter from '../components/FuniroFooter';
import shophero from '../assets/shophero.png';

function Cart({ cartItems, onRemove, setCartItems }) {
  
  // 1. Logic to increase quantity
  const increaseQty = (index) => {
    const newItems = [...cartItems];
    newItems[index].quantity = (newItems[index].quantity || 1) + 1;
    setCartItems(newItems);
  };

  // 2. Logic to decrease quantity
  const decreaseQty = (index) => {
    const newItems = [...cartItems];
    if ((newItems[index].quantity || 1) > 1) {
      newItems[index].quantity -= 1;
      setCartItems(newItems);
    }
  };

  // 3. Calculate Subtotal dynamically based on quantity
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = item.originalPrice || 0;
      const qty = item.quantity || 1;
      return acc + (price * qty);
    }, 0);
  };

  const grandTotal = calculateTotal();

  return (
    <div className="cart-page-wrapper">
      <div className="cart-hero-section" style={{ backgroundImage: `url(${shophero})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Cart</h1>
          <div className="hero-breadcrumb">
            <Link to="/" className="home-link">Home</Link> 
            <span className="separator">&gt;</span> 
            <span className="current-page">Cart</span>
          </div>
        </div>
      </div>

      <div className="cart-main-container">
        <div className="cart-flex-layout">
          
          <div className="cart-items-column">
            <table className="cart-dynamic-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty-msg">Your cart is empty.</td>
                  </tr>
                ) : (
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-cell">
                        <div className="cart-product-img-box">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <span className="product-name-text">{item.title}</span>
                      </td>
                      <td className="gray-text">Rs. {item.originalPrice?.toLocaleString()}</td>
                      <td>
                        {/* Interactive Quantity Box */}
                        <div className="quantity-control-container">
                          <button className="qty-btn" onClick={() => decreaseQty(index)}>-</button>
                          <span className="qty-number">{item.quantity || 1}</span>
                          <button className="qty-btn" onClick={() => increaseQty(index)}>+</button>
                        </div>
                      </td>
                      <td className="black-text">
                        Rs. {((item.originalPrice || 0) * (item.quantity || 1)).toLocaleString()}
                      </td>
                      <td>
                        <i 
                          className="fa-solid fa-trash delete-trash-icon" 
                          onClick={() => onRemove(index)}
                        ></i>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="cart-totals-side-card">
            <h2 className="totals-title">Cart Totals</h2>
            <div className="totals-row-item">
              <span className="label">Subtotal</span>
              <span className="val gray-text">Rs. {grandTotal.toLocaleString()}</span>
            </div>
            <div className="totals-row-item">
              <span className="label">Total</span>
              <span className="val gold-text">Rs. {grandTotal.toLocaleString()}</span>
            </div>
            <Link to="/checkout">
              <button className="cart-checkout-btn">Check Out</button>
            </Link>
          </div>
        </div>
      </div>

      <ShopFeatures />
      <FuniroFooter />
    </div>
  );
}

export default Cart;