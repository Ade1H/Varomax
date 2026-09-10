import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Shop({ onAddToCart, products = [] }) {
  const { t } = useTranslation();

  return (
    <main id="shop" className="product-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '0.25rem', fontSize: '2.5rem' }}>
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
                  <button className="btn-add" onClick={() => onAddToCart(product)} style={{ width: '100%', padding: '8px', fontSize: '0.9rem' }}>
                    {t('shopPage.addToCart')}
                  </button>
                  
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <a 
                      href="https://www.lazada.co.th/shop/bullport-th?path=index.htm&lang=en&pageTypeId=1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        flex: 1, 
                        textAlign: 'center', 
                        padding: '0px 2px', 
                        fontSize: '1rem', 
                        lineHeight: 1,
                        backgroundColor: '#0f146d', 
                        color: '#fff', 
                        textDecoration: 'none', 
                        borderRadius: '3px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img src="/lazada.png" alt="Lazada" style={{ height: '1.8em', marginRight: '2px', objectFit: 'contain' }} /> Lazada
                    </a>
                    <a 
                      href="https://s.shopee.co.th/5AsKbTxjf6?share_channel_code=5" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        flex: 1, 
                        textAlign: 'center', 
                        padding: '0px 2px', 
                        fontSize: '1rem', 
                        lineHeight: 1,
                        backgroundColor: '#ffffff', 
                        color: '#ee4d2d', 
                        textDecoration: 'none', 
                        borderRadius: '3px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ee4d2d'
                      }}
                    >
                      <img src="/shopee.png" alt="Shopee" style={{ height: '2.2em', marginRight: '2px', objectFit: 'contain' }} /> Shopee
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}