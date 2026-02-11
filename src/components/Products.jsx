// Products.jsx (Home Page Section)
import { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from './ProductCard';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('api/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 8)))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard 
            key={item.id}
            product={item}        
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
export default Products;