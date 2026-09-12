import React from 'react';
import { useTranslation } from 'react-i18next';
import { products as productsData } from '../data/products'; // Adjust path if needed

export function meta() {
  return [
    {
      title: "Shop Varomax Products | High-Quality Formulations",
    },
    {
      name: "description",
      content:
        "Browse and purchase official Varomax products. Enjoy premium quality, secure checkout, and fast global delivery options.",
    },
  ];
}

export default function Shop() {
  const { t } = useTranslation();
  const products = productsData;

  const handleAddToCart = (product) => {
    const savedCart = localStorage.getItem('varomax_cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    
    localStorage.setItem('varomax_cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <main id="shop" className="product-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '0.25rem', fontSize: '2.5rem', color: '#000000' }}>
          {t('shopPage.title')}
        </h2>
        <p className="offer-text" style={{ textAlign: 'center', marginBottom: '1rem', color: '#0e0d0dff' }}>
          {t('shopPage.offerText')}
        </p>
        <p className="offer-text" style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          color: '#0e0101ff',
          fontWeight: 'bold'
        }}>
          {t('shopPage.discreetText')}
        </p>

        {/* Global Marketplace Banner */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px', 
          marginBottom: '2rem',
          padding: '1rem',
          background: '#fafafa',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          maxWidth: '500px',
          marginInline: 'auto'
        }}>
          <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#333' }}>
            {t('shopPage.shopeeLazadaText')}
          </p>
          <div style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '320px' }}>
            <a 
              href="https://www.lazada.co.th/shop/bullport-th?path=index.htm&lang=en&pageTypeId=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                padding: '8px 12px', 
                fontSize: '0.95rem', 
                backgroundColor: '#0f146d', 
                color: '#fff', 
                textDecoration: 'none', 
                borderRadius: '6px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <img src="/lazada.png" alt="Lazada" style={{ height: '1.4em', objectFit: 'contain' }} /> Lazada
            </a>
            <a 
              href="https://s.shopee.co.th/5AsKbTxjf6?share_channel_code=5" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                padding: '8px 12px', 
                fontSize: '0.95rem', 
                backgroundColor: '#ffffff', 
                color: '#ee4d2d', 
                textDecoration: 'none', 
                borderRadius: '6px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                border: '1px solid #ee4d2d'
              }}
            >
              <img src="/shopee.png" alt="Shopee" style={{ height: '1.6em', objectFit: 'contain' }} /> Shopee
            </a>
          </div>
        </div>

        <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          {products && products.map((product) => {
            const productKey = product.id === 1 ? 'varomax' : 'varomax4';
            
            return (
              <div key={product.id} className={`product-item ${product.featured ? 'featured' : ''}`} style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0.5rem', margin: '0px', width: '100%', maxWidth: '320px', boxSizing: 'border-box' }}>
                {product.badge && <div className="product-badge" style={{ marginBottom: '0.25rem' }}>{product.badge}</div>}
                
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '180px', objectFit: 'contain', display: 'block', margin: '0 0 0.5rem 0', padding: '0px' }} 
                  />
                )}

                <h3 style={{ fontSize: '1.2rem', color: '#000000', margin: '0 0 0.25rem 0', padding: '0px' }}>
                  {t(`products.${productKey}.name`)}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#000000', lineHeight: '1.2', margin: '0 0 0.25rem 0', padding: '0px' }}>
                  {t(`products.${productKey}.category`)}
                </p>
                
                <div className="price" style={{ fontSize: '1.1rem', color: '#000000', fontWeight: 'bold', margin: '0 0 0.25rem 0', padding: '0px' }}>
                  ฿{product.price} / {t(`products.${productKey}.packSize`)}
                </div>

                {product.features && product.features.length > 0 && (
                  <ul className="product-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 0.25rem 0', textAlign: 'left' }}>
                    {product.features.map((feature, idx) => (
                      <li key={idx} style={{ margin: '0 0 2px 0', padding: '0px', color: '#000000', fontSize: '0.85rem' }}>✓ {feature}</li>
                    ))}
                  </ul>
                )}

                <div className="product-card-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', padding: '0px' }}>
                  <button className="btn-add" onClick={() => handleAddToCart(product)} style={{ width: '100%', padding: '10px', fontSize: '0.95rem', cursor: 'pointer', background: '#0d7a5f', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
                    {t('shopPage.addToCart')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}