import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopProduct from './ShopProduct';
import './ShopProductGrid.css';

function ShopProductGrid({ products, addToCart }) { 
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };


  if (!products || products.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>No products available</div>;
  }

  return (
    <div className="shop-product-grid">
      {products.map((product) => (
        <div 
          key={product.id} 
          onClick={() => handleProductClick(product)} 
          className="product-card-wrapper"
        >
          <ShopProduct
            product={product}      
            addToCart={addToCart} 
          />
        </div>
      ))}
    </div>
  );
}

export default ShopProductGrid;