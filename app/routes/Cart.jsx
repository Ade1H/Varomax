import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function meta() {
  return [
    { title: "Your Shopping Cart | Varomax" },
    { name: "description", content: "Review your selected herbal products and proceed to checkout." },
    { name: "robots", content: "noindex, follow" },
  ];
}

export default function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);

  // Load from localStorage using the correct lowercase key 'varomax_cart'
  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem('varomax_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]);
      }
    } catch (err) {
      console.error('Failed to read cart:', err);
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();

    const handleStorageChange = () => loadCart();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    try {
      localStorage.setItem('varomax_cart', JSON.stringify(newCart));
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (err) {
      console.error('Failed to save cart:', err);
    }
  };

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    updateCart(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
    updateCart(updatedCart);
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    updateCart(updatedCart);
  };

  const totalItems = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const totalPrice = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);

  return (
    <div 
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(13, 122, 95, 0.05), rgba(79, 195, 247, 0.03))',
        borderTop: '2px solid rgba(13, 122, 95, 0.3)',
        borderBottom: '2px solid rgba(13, 122, 95, 0.3)',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '2rem auto'
      }}
    >
      <h3 style={{
        fontSize: '22px',
        fontWeight: 600,
        color: '#000202ff',
        margin: '0 0 1rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {t('cartPage.title')} ({totalItems} {t('cartPage.items')})
      </h3>

      {cart.length === 0 ? (
        <p style={{
          color: 'var(--text)',
          fontSize: '16px',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          {t('cartPage.empty')}
        </p>
      ) : (
        <>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1rem 0'
          }}>
            {cart.map(item => {
              const productKey = item.id === 1 ? 'varomax' : 'varomax4';

              return (
                <li 
                  key={item.id} 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--border)',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}
                >
                  <span style={{
                    fontWeight: 500,
                    color: 'var(--text-h)',
                    flex: '1 1 150px'
                  }}>
                    {t(`products.${productKey}.name`, { defaultValue: item.name || 'Product' })} ({t(`products.${productKey}.packSize`, { defaultValue: item.packSize || '' })})
                  </span>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}>
                    <button 
                      onClick={() => handleDecrease(item.id)} 
                      style={{
                        background: '#f0f0f0',
                        border: '1px solid #ccc',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 600
                      }}
                    >
                      −
                    </button>

                    <span style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      minWidth: '24px',
                      textAlign: 'center'
                    }}>
                      {item.quantity}
                    </span>

                    <button 
                      onClick={() => handleAddToCart(item)} 
                      style={{
                        background: '#f0f0f0',
                        border: '1px solid #ccc',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 600
                      }}
                    >
                      +
                    </button>

                    <span style={{
                      fontWeight: 600,
                      minWidth: '70px',
                      textAlign: 'right',
                      fontSize: '16px'
                    }}>
                      ฿{Number(item.price) * Number(item.quantity)}
                    </span>

                    <button 
                      onClick={() => handleRemove(item.id)} 
                      style={{
                        background: 'transparent',
                        color: '#f40808ff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '4px 8px'
                      }}
                    >
                      ✕ {t('cartPage.remove')}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '2px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <strong style={{ fontSize: '20px' }}>
              {t('cartPage.total')}{' '}
              <span style={{ color: '#010201ff', fontSize: '24px' }}>
                ฿{totalPrice}
              </span>
            </strong>

            <Link 
              to="/checkout" 
              style={{
                background: 'linear-gradient(135deg, #1a3a6b, #2a5a9a)',
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                display: 'inline-block'
              }}
            >
              💳 {t('cartPage.checkout')}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}