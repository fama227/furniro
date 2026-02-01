import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from "./components/ProductDetail";
import CartSidebar from './components/CartSidebar';  
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './pages/Success';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // UPDATED: Logic to prevent duplicate rows and handle quantity
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <Router>
     
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />  
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/product/:productId"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemove={removeFromCart} setCartItems={setCartItems} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;