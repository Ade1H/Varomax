import React from 'react';

export default function Shop({ onAddToCart, products = [] }) {
  const handleDirectBuy = (product) => {
    if (product.stripeLink) {
      window.location.href = product.stripeLink;
    } else {
      alert("Payment link is missing for this product.");
    }
  };

  return (
    <main id="shop" className="product-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>SHOP</h2>
        <p className="offer-text" style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Buy 2, get 1 free on every product. Free shipping over €100, discreet packaging.
        </p>
<div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
  {products && products.map(product => (
    <div key={product.id} className={`product-item ${product.featured ? 'featured' : ''}`} style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '1rem', margin: '0 auto', width: '100%', maxWidth: '360px', boxSizing: 'border-box' }}>
      {product.badge && <div className="product-badge">{product.badge}</div>}
      
      {product.image && (
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', marginBottom: '1rem' }} 
        />
      )}

      <h3 style={{ fontSize: '1.3rem', color: '#000000', marginBottom: '0.4rem' }}>{product.name}</h3>
      <p style={{ fontSize: '0.95rem', color: '#000000', lineHeight: '1.4', marginBottom: '0.8rem' }}>{product.description || product.category}</p>
      
      <div className="price" style={{ fontSize: '1.15rem', color: '#000000', fontWeight: 'bold', marginBottom: '0.4rem' }}>€{product.price} / pack</div>

      {product.packSize && (
        <p className="pack-size" style={{ fontWeight: '500', color: '#000000', fontSize: '0.9rem', margin: '0.4rem 0' }}>
          {product.packSize}
        </p>
      )}

      {product.features && product.features.length > 0 && (
        <ul className="product-features" style={{ listStyle: 'none', padding: 0, margin: '0.8rem 0', textAlign: 'left' }}>
          {product.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '3px', color: '#000000', fontSize: '0.9rem' }}>✓ {feature}</li>
          ))}
        </ul>
      )}

      <div className="product-card-buttons" style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
        <button className="btn-add" onClick={() => onAddToCart(product)} style={{ flex: 1, padding: '10px', fontSize: '0.95rem' }}>
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