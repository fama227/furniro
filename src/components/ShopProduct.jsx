import React from 'react';
import './ShopProduct.css';

function ShopProduct({ product, addToCart }) {
  const { id, image, title, description, originalPrice, discountedPrice, discount, isNew } = product;
  
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product);  
  };

  return (
    <div className="shop-product">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        
        {/* Badges */}
        {discount && <span className="discount-badge">-{discount}%</span>}
        {isNew && <span className="new-badge">New</span>}

        {/* Hover Overlay */}
        <div className="product-overlay">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
          
          <div className="overlay-actions">
            <div className="action-item">
              <i className="fa-solid fa-share-nodes"></i> Share
            </div>
            <div className="action-item">
              <i className="fa-solid fa-retweet"></i> Compare
            </div>
            <div className="action-item">
              <i className="fa-solid fa-heart"></i> Like
            </div>
          </div>
        </div>
      </div>

      <div className="product-details">
        <h3>{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-pricing">
          <span className="current-price">
            Rp {(discountedPrice || originalPrice || 0).toLocaleString()}
          </span>
          
          {discountedPrice && originalPrice && (
            <span className="original-price">Rp {originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;