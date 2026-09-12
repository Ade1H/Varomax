import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('Varomax_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Helper to sync state changes back to localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('Varomax_cart', JSON.stringify(newCart));
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

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
                    {t(`products.${productKey}.name`)} ({t(`products.${productKey}.packSize`)})
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
                      ฿{item.price * item.quantity}
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