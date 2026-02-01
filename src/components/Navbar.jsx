import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="logo-container">
          
          <img src="/logo.png.png" alt="Furniro Logo" className="main-logo-img" />
          <span className="logo-text">Furniro</span>
        </Link>
      </div>

     
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    
      <div className="navbar-icons">
        <img src="/icon1.png" alt="User" className="nav-custom-icon" />
        <img src="/searchicon.png" alt="Search" className="nav-custom-icon" />
        <img src="/hearticon.png" alt="Wishlist" className="nav-custom-icon" />
        
        <Link to="/cart" className="cart-icon-wrapper">
          <img src="/carticon.png" alt="Cart" className="nav-custom-icon" />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;