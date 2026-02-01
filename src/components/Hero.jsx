import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero"> 
      <div className="hero-outer-card">
        
        <div className="text-content-wrapper">
          <p className="label">New Arrival</p>
          <h1>Discover Our<br />New Collection</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <button className="btn">BUY NOW</button>
      </div>
    </section>
  );
}

export default Hero;