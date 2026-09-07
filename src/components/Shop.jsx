import React from 'react';

export default function Shop({ onAddToCart, products = [] }) {
  return (
    <main id="shop" className="product-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '0.25rem', fontSize: '2.5rem' }}>SHOP</h2>
        <p className="offer-text" style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>
          Buy 2, get 1 free on every product. Free shipping over ฿2000, discreet packaging.
        </p>
        <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          {products && products.map(product => (
            <div key={product.id} className={`product-item ${product.featured ? 'featured' : ''}`} style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0.5rem', margin: '0px', width: '100%', maxWidth: '320px', boxSizing: 'border-box' }}>
              {product.badge && <div className="product-badge" style={{ marginBottom: '0.25rem' }}>{product.badge}</div>}
              
              {product.image && (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '180px', objectFit: 'contain', display: 'block', margin: '0 0 0.5rem 0', padding: '0px' }} 
                />
              )}

              <h3 style={{ fontSize: '1.2rem', color: '#000000', margin: '0 0 0.25rem 0', padding: '0px' }}>{product.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#000000', lineHeight: '1.2', margin: '0 0 0.25rem 0', padding: '0px' }}>{product.description || product.category}</p>
              
              <div className="price" style={{ fontSize: '1.1rem', color: '#000000', fontWeight: 'bold', margin: '0 0 0.25rem 0', padding: '0px' }}>฿{product.price} / pack</div>

              {product.packSize && (
                <p className="pack-size" style={{ fontWeight: '500', color: '#000000', fontSize: '0.85rem', margin: '0 0 0.25rem 0', padding: '0px' }}>
                  {product.packSize}
                </p>
              )}

              {product.features && product.features.length > 0 && (
                <ul className="product-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 0.25rem 0', textAlign: 'left' }}>
                  {product.features.map((feature, index) => (
                    <li key={index} style={{ margin: '0 0 2px 0', padding: '0px', color: '#000000', fontSize: '0.85rem' }}>✓ {feature}</li>
                  ))}
                </ul>
              )}

              <div className="product-card-buttons" style={{ display: 'flex', gap: '0px', marginTop: '8px', padding: '0px' }}>
                <button className="btn-add" onClick={() => onAddToCart(product)} style={{ flex: 1, padding: '8px', fontSize: '0.9rem' }}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}