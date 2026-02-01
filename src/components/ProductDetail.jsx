import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css';


import descrip1 from '../assets/descrip1.png';
import descrip2 from '../assets/descrip2.png';


import FuniroFooter from './FuniroFooter'; 
import ShopProduct from './ShopProduct'; 

function ProductDetail({ addToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return <div className="loading">Loading...</div>;

  const handleAddToCart = () => {
    if (addToCart) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

 
  const handleProductCardClick = (e, productData) => {
    
    if (e.target.closest('.add-to-cart-btn') || e.target.closest('.overlay-actions')) {
      return; 
    }
    navigate(`/product/${productData.id}`, { state: { product: productData } });
  };

  return (
    <div className="product-detail-page">
      {/* 1. Breadcrumb Section */}
      <div className="breadcrumb-wrapper">
        <div className="custom-container">
          <div className="breadcrumb-content">
            <Link to="/">Home</Link> 
            <i className="fa-solid fa-chevron-right breadcrumb-icon"></i>
            <Link to="/shop">Shop</Link> 
            <i className="fa-solid fa-chevron-right breadcrumb-icon"></i>
            <span className="breadcrumb-divider">|</span>
            <span className="breadcrumb-current">{product.title}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Product Hero Section */}
      <div className="custom-container main-content">
        <div className="product-images-grid">
          <div className="thumbnails-stack">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={product.image} alt="thumb" />
            ))}
          </div>
          <div className="hero-image-box">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className="product-info-panel">
          <h1 className="display-title">{product.title}</h1>
          <p className="display-price">
            Rs. {(product.discountedPrice || product.originalPrice || 0).toLocaleString()}.00
          </p>
          
          <div className="rating-container">
            <span className="stars-gold">★★★★★</span>
            <span className="review-stat">| 5 Customer Reviews</span>
          </div>

          <p className="product-short-desc">{product.description}</p>

          <div className="selection-group">
            <label>Size</label>
            <div className="size-buttons">
              <button className="active">L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
          </div>

          <div className="selection-group">
            <label>Color</label>
            <div className="color-dots">
              <span className="dot-purple"></span>
              <span className="dot-black"></span>
              <span className="dot-gold"></span>
            </div>
          </div>

          <div className="button-actions">
            <div className="quantity-toggle">
              <span onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</span> 
              {quantity} 
              <span onClick={() => setQuantity(q => q + 1)}>+</span>
            </div>
            <button className="cart-add-btn" onClick={handleAddToCart}>Add To Cart</button>
            <button className="compare-add-btn">+ Compare</button>
          </div>

          <hr className="detail-separator" />

          <div className="product-metadata">
            <div className="meta-row"><span className="label">SKU</span> <span>: SS001</span></div>
            <div className="meta-row"><span className="label">Category</span> <span>: {product.category || 'Sofas'}</span></div>
            <div className="meta-row"><span className="label">Tags</span> <span>: Sofa, Chair, Home, Shop</span></div>
            <div className="meta-row share-row">
              <span className="label">Share</span> 
              <span className="share-icons">
                : <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tabs Section */}
      <section className="product-description-tabs">
        <div className="tab-navigation">
          <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
          <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Additional Information</button>
          <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews [5]</button>
        </div>

        <div className="tab-pane custom-container">
          {activeTab === 'description' && (
            <div className="fade-in">
              <p className="tab-text-main">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker...
              </p>
              <div className="tab-visuals">
                <div className="visual-box"><img src={descrip1} alt="detail 1" /></div>
                <div className="visual-box"><img src={descrip2} alt="detail 2" /></div>
              </div>
            </div>
          )}
          {activeTab === 'info' && <p className="tab-text-main">Additional technical information about the {product.title}.</p>}
          {activeTab === 'reviews' && <p className="tab-text-main">Customer reviews for this product.</p>}
        </div>
      </section>

      <hr className="section-divider" />

      {/* 4. Related Products Section */}
      <section className="related-products-section custom-container">
        <h2 className="related-title">Related Products</h2>
        <div className="related-products-grid">
          
          {/* Product 1 */}
          <div onClick={(e) => handleProductCardClick(e, { 
            id: 1, 
            title: 'Syltherine', 
            image: '/p1.png', 
            originalPrice: 3500000,
            discountedPrice: 2500000,
            discount: 30,
            description: 'Stylish cafe chair' 
          })}>
            <ShopProduct 
              product={{
                id: 1, 
                title: 'Syltherine', 
                image: '/p1.png', 
                originalPrice: 3500000,
                discountedPrice: 2500000,
                discount: 30,
                description: 'Stylish cafe chair'
              }}
              addToCart={addToCart} 
            />
          </div>

          {/* Product 2 */}
          <div onClick={(e) => handleProductCardClick(e, { 
            id: 2, 
            title: 'Leviosa', 
            image: '/p2.png', 
            originalPrice: 2500000,
            discountedPrice: 2500000,
            description: 'Stylish cafe chair' 
          })}>
            <ShopProduct 
              product={{
                id: 2, 
                title: 'Leviosa', 
                image: '/p2.png', 
                originalPrice: 2500000,
                discountedPrice: 2500000,
                description: 'Stylish cafe chair'
              }}
              addToCart={addToCart}  
            />
          </div>

          {/* Product 3 */}
          <div onClick={(e) => handleProductCardClick(e, { 
            id: 3, 
            title: 'Lolito', 
            image: '/p3.png', 
            originalPrice: 14000000,
            discountedPrice: 7000000,
            discount: 50,
            description: 'Luxury big sofa' 
          })}>
            <ShopProduct 
              product={{
                id: 3, 
                title: 'Lolito', 
                image: '/p3.png', 
                originalPrice: 14000000,
                discountedPrice: 7000000,
                discount: 50,
                description: 'Luxury big sofa'
              }}
              addToCart={addToCart} 
            />
          </div>

          {/* Product 4 */}
          <div onClick={(e) => handleProductCardClick(e, { 
            id: 4, 
            title: 'Respira', 
            image: '/p4.png', 
            originalPrice: 500000,
            discountedPrice: 500000,
            isNew: true,
            description: 'Outdoor bar table' 
          })}>
            <ShopProduct 
              product={{
                id: 4, 
                title: 'Respira', 
                image: '/p4.png', 
                originalPrice: 500000,
                discountedPrice: 500000,
                isNew: true,
                description: 'Outdoor bar table'
              }}
              addToCart={addToCart} 
            />
          </div>

        </div>
        
        <div className="btn-center">
          <Link to="/shop">
            <button className="show-more-btn">Show More</button>
          </Link>
        </div>
      </section>

      <FuniroFooter />
    </div>
  );
}

export default ProductDetail;