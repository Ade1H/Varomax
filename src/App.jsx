import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop'; // Använd denna istället
import FAQ from './components/FAQ';
import Checkout from './components/Checkout';
import VaromaxVsViagra from './components/VaromaxVsViagra';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
// Ta bort importen av VaromaxLanding
import { products } from './data/products';

export default function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('Varomax_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('Varomax_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleDecrease = (productId) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemove = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCompleteOrder = (formData) => {
    alert(`Thank you for your order, ${formData.name}! A confirmation has been sent to ${formData.email}.`);
    setCart([]);
  };

  return (
    <div className="app">
      <Navbar cartCount={totalItems} />

      <Routes>
        {/* Använd Shop istället för VaromaxLanding */}
        <Route path="/" element={
          <>
            <Shop products={products} onAddToCart={handleAddToCart} />
            <FAQ />
          </>
        } />

        {/* Varomax vs Viagra Comparison Page */}
        <Route path="/vs-viagra" element={<VaromaxVsViagra />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={
          <Cart 
            cart={cart} 
            totalItems={totalItems} 
            totalPrice={totalPrice} 
            handleDecrease={handleDecrease} 
            handleAddToCart={handleAddToCart} 
            handleRemove={handleRemove} 
          />
        } />

        {/* Checkout Page */}
        <Route path="/checkout" element={
          <Checkout 
            cart={cart} 
            totalPrice={totalPrice} 
            onBack={() => {}} 
            onComplete={handleCompleteOrder} 
          />
        } />
      </Routes>

      <Footer />
    </div>
  );
}