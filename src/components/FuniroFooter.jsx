import React from 'react';
import './Footer.css';

const FuniroFooter = () => {
  return (
    <footer className="funiro-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand-section">
            <h1 className="footer-brand">Funiro.</h1>
            <address className="footer-address">
              400 University Drive Suite 200<br />
              Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Shop</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Help</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Payment Options</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-container">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="newsletter-input"
              />
              <button className="newsletter-button">SUBSCRIBE</button>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">2023 funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FuniroFooter;