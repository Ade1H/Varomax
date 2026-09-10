import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import VaromaxVsViagra from './components/VaromaxVsViagra';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Reseller from './components/Reseller';

import { products } from './data/products';

export default function App() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('Varomax_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [token, setToken] = useState(() => localStorage.getItem('auth_token'));

  useEffect(() => {
    localStorage.setItem('Varomax_cart', JSON.stringify(cart));
  }, [cart]);

  const handleRegisterSuccess = () => {
    setToken(localStorage.getItem('auth_token'));
  };

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
    alert(t('checkoutPage.success.message', { 
      name: formData.name, 
      email: formData.email 
    }));
    setCart([]);
  };

  return (
    <div className="app">
      <Navbar cartCount={totalItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
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
        <Route path="/checkout" element={
          <Checkout 
            cart={cart} 
            totalPrice={totalPrice} 
            onBack={() => {}} 
            onComplete={handleCompleteOrder} 
          />
        } />
        <Route path="/reseller" element={<Reseller />} />

        {/* Portal renders Dashboard if token exists, otherwise shows Register page */}
        <Route path="/portal" element={
          token ? (
            <Dashboard />
          ) : (
            <Register 
              onRegisterSuccess={handleRegisterSuccess} 
              onSwitchToLogin={() => {}} 
            />
          )
        } />
      </Routes>

      <Footer />
    </div>
  );
}