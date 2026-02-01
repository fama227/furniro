import React from 'react';

function ProductCard({ product, addToCart }) {
  const { title, description, discountedPrice, originalPrice, discount, isNew, image } = product;
  
  const formatPrice = (num) => num ? `Rp ${num.toLocaleString('id-ID')}` : "";

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);  
  };

  return (
    <div className="product-card">
      <div className="image-box">
        <img src={image} alt={title} />
        
        {discount && <span className="badge red">-{discount}%</span>}
        {isNew && <span className="badge green">New</span>}

        <div className="overlay">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <div className="overlay-icons">
            <span>Share</span>
            <span>Compare</span>
            <span>Like</span>
          </div>
        </div>
      </div>

      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          <span>{formatPrice(discountedPrice || originalPrice)}</span>
          {originalPrice && discountedPrice && (
            <small>{formatPrice(originalPrice)}</small>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;