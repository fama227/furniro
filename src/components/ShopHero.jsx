import React from 'react';
import './ShopHero.css';

function ShopHero() {
  return (
    <div className="shop-hero">
      <div className="shop-hero-content">
        <h1>Shop</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; Shop
        </p>
      </div>
    </div>
  );
}

export default ShopHero;
