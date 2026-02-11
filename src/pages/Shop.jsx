import React, { useState, useEffect } from 'react';
import ShopHero from '../components/ShopHero';
import ShopProductGrid from '../components/ShopProductGrid';
import ShopFeatures from '../components/ShopFeatures';
import FuniroFooter from '../components/FuniroFooter';
import './Shop.css';

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    setLoading(true);
    fetch('api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  
  const processedProducts = products.length > 0 
    ? [...products]
        .sort((a, b) => {
          const priceA = a.originalPrice || 0;
          const priceB = b.originalPrice || 0;
          if (sortBy === 'price-low') return priceA - priceB;
          if (sortBy === 'price-high') return priceB - priceA;
          return 0;
        })
        .slice(0, showCount || 16)
    : [];

  return (
    <div className="shop-page">
      <ShopHero />

      <div className="filter-utility-bar">
        <div className="utility-left">
          <div className="filter-item">
            <i className="fa-solid fa-sliders"></i>
            <span>Filter</span>
          </div>
          <div className="view-icons">
            <i className="fa-solid fa-grid-2"></i> 
            <i className="fa-solid fa-list"></i>
          </div>
          <div className="results-divider">
            {loading ? "Loading..." : `Showing 1–${processedProducts.length} of ${products.length} results`}
          </div>
        </div>

        <div className="utility-right">
          <div className="control-group">
            <span>Show</span>
            <input 
              type="number" 
              className="show-input" 
              value={showCount} 
              onChange={(e) => setShowCount(Number(e.target.value))}
            />
          </div>
          <div className="control-group">
            <span>Sort by</span>
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      

      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
            Loading Furniture...
        </div>
      ) : (
        <ShopProductGrid products={processedProducts} addToCart={addToCart} />
      )}
      
      <ShopFeatures />
      <FuniroFooter />
    </div>
  );
}

export default Shop;