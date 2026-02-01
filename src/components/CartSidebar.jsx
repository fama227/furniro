import React from 'react';
import { Link } from 'react-router-dom';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose, cartItems, onRemove }) {
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discountedPrice || item.originalPrice || 0;
    const quantity = item.quantity || 1;
    return acc + (price * quantity);
  }, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <i className="fa-solid fa-bag-shopping-slash close-icon" onClick={onClose}></i>
        </div>
        <hr />

        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <p className="empty-msg">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => {
              const displayPrice = item.discountedPrice || item.originalPrice || 0;
              return (
                <div key={index} className="cart-item">
                  <div className="cart-img-bg">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>{item.quantity || 1} x <span className="gold-text">Rs. {displayPrice.toLocaleString()}</span></p>
                  </div>
                  <i className="fa-solid fa-circle-xmark remove-btn" onClick={() => onRemove(index)}></i>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <span className="gold-text">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <hr />
          <div className="cart-buttons">
            <Link to="/cart" onClick={onClose} className="btn-link">
              <button className="btn-outline">Cart</button>
            </Link>
            
            <Link to="/checkout" onClick={onClose} className="btn-link">
              <button className="btn-outline">Checkout</button>
            </Link>
            
            <button className="btn-outline">Comparison</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;