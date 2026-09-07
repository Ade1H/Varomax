import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './VaromaxLanding.css';

const VaromaxLanding = () => {
  const navigate = useNavigate();

  // Grab the main product (e.g., Varomax) for the hero card
  const heroProduct = products && products.length > 0 ? products[0] : {
    id: 1,
    name: 'Varomax',
    price: 22,
    packSize: '4 sublingual troches per pack',
    image: '/varomax-box.webp',
    description: 'For performance & stamina'
  };

  return (
    <div className="varomax-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>Varomax – Natural Support for Stronger Erections and Lasting Longer</h1>
             <p className="subtitle" style={{ color: '#000000' }}>
  Welcome to Varomax. Your path to enhanced pleasure.
</p>
              <div className="badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {[
                  'Thai FDA-Registered', 
                  '100% Herbal Formula', 
                  'Discreet Worldwide Shipping', 
                  '60-Day Money-Back Guarantee'
                ].map((badgeText, index) => (
                  <span key={index} style={{
                    background: 'rgba(129, 199, 132, 0.25)',
                    border: '1px solid #81c784',
                    color: '#2d6a4f',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    {badgeText}
                  </span>
                ))}
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">30 min</span>
                  <span className="stat-label">Feel it in about</span>
                </div>
                <div className="stat">
                  <span className="stat-number">36h</span>
                  <span className="stat-label">Effect lasts up to</span>
                </div>
                <div className="stat">
                  <span className="stat-number">60 day</span>
                  <span className="stat-label">Money-back guarantee</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Herbal, no synthetics</span>
                </div>
              </div>
              <button className="btn-hero" onClick={() => navigate('/')}>Buy 2, Get 1 Free!</button>
            </div>
<div className="product-grid" style={{ display: 'flex', justifyContent: 'center' }}>
  {heroProduct && (
    <div className="product-item featured" style={{ textAlign: 'left', margin: 0, background: 'transparent', border: 'none', boxShadow: 'none', padding: '1rem', width: '100%', maxWidth: '360px', boxSizing: 'border-box' }}>
      {heroProduct.badge && <div className="product-badge">{heroProduct.badge}</div>}
      
      {heroProduct.image && (
        <img 
          src={heroProduct.image} 
          alt={heroProduct.name} 
          style={{ width: '100%', height: '280px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1.25rem', display: 'block' }} 
        />
      )}

      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '20px', color: '#000000' }}>{heroProduct.name}</h3>
      <p style={{ margin: '0 0 0.75rem 0', color: '#000000' }}>{heroProduct.description || heroProduct.category}</p>
      
      <div className="price" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.75rem', color: '#000000' }}>฿{heroProduct.price} / pack</div>
      
      {heroProduct.packSize && (
        <p className="pack-size" style={{ fontWeight: '500', color: '#000000', fontSize: '14px', margin: '0 0 1rem 0' }}>
          {heroProduct.packSize}
        </p>
      )}

      {heroProduct.features && heroProduct.features.length > 0 && (
        <ul className="product-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', textAlign: 'left' }}>
          {heroProduct.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '4px', color: '#000000', fontSize: '14px' }}>✓ {feature}</li>
          ))}
        </ul>
      )}

      <div className="product-card-buttons" style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
        <button className="btn-add" onClick={() => onAddToCart(heroProduct)} style={{ flex: 1 }}>
          Add to cart
        </button>
      </div>
    </div>
  )}
</div>
            {/* <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
  {products && products.map(product => (
    <div key={product.id} className="product-item featured" style={{ textAlign: 'left', margin: 0, background: 'transparent', border: 'none', boxShadow: 'none', padding: '1rem', width: '100%', maxWidth: '360px', boxSizing: 'border-box' }}>
      {product.badge && <div className="product-badge">{product.badge}</div>}
      
      {product.image && (
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '280px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1.25rem', display: 'block' }} 
        />
      )}

      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '20px', color: '#000000' }}>{product.name}</h3>
      <p style={{ margin: '0 0 0.75rem 0', color: '#000000' }}>{product.description || product.category}</p>
      
      <div className="price" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.75rem', color: '#000000' }}>฿{product.price} / pack</div>
      
      {product.packSize && (
        <p className="pack-size" style={{ fontWeight: '500', color: '#000000', fontSize: '14px', margin: '0 0 1rem 0' }}>
          {product.packSize}
        </p>
      )}

      {product.features && product.features.length > 0 && (
        <ul className="product-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', textAlign: 'left' }}>
          {product.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '4px', color: '#000000', fontSize: '14px' }}>✓ {feature}</li>
          ))}
        </ul>
      )}

      <div className="product-card-buttons" style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
        <button className="btn-add" onClick={() => onAddToCart(product)} style={{ flex: 1 }}>
          Add to cart
        </button>
      </div>
    </div>
  ))}
</div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="about" 
        style={{ 
          background: `
            linear-gradient(135deg, rgba(5, 38, 29, 0.9) 0%, rgba(11, 49, 38, 0.85) 50%, rgba(16, 77, 60, 0.9) 100%), 
            url('/back.jpeg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '4rem 0', 
          color: '#fff' 
        }}
      >
        <div className="container">
          <h2 style={{ color: '#fff' }}>A natural men's performance supplement you can trust</h2>
          <p className="about-text" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            We are committed to providing a safe and natural solution for men who want to improve 
            their intimate wellbeing.
          </p>
          <div className="about-grid">
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Thai FDA Registered</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Registered herbal formula, made to regulated standards.</p>
            </div>
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>100% Herbal Formula</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Plant-based actives, no synthetic Rx compounds.</p>
            </div>
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Lab-Tested Quality</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Quality control in laboratory to ensure purity and potency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Varomax Detail */}
      <section className="about-detail">
  <div className="container">
    <h2 style={{ textAlign: 'center' }}>About Varomax</h2>
    <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 20px" }}>
      A natural sublingual formula for men's performance and stamina, made with time-tested 
      herbal extracts. No synthetic compounds. Non-habit forming. Discreet, plain packaging.
    </p>
    <p
  className="certificate"
  style={{
    textAlign: "center",
    margin: "0 auto 30px",
    fontWeight: "bold",
    color: "black",
  }}
>
  Made in Thailand · Thai FDA No: 30-1-13758-5-0069
</p>
    <h3 style={{ textAlign: 'center' }}>Ingredients</h3>
 <ul className="ingredients" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '0.75rem', 
      justifyContent: 'center', 
      listStyle: 'none', 
      padding: 0, 
      margin: '0 auto 20px',
      maxWidth: '700px'
    }}>
      {[
        'Cordyceps', 
        'Ginseng extract', 
        'Reishi Mushroom', 
        'Oyster extract', 
        'Coenzyme Q10', 
        'Zinc Amino Acid Chelate'
      ].map((ingredient, index) => (
        <li key={index} style={{ 
          background: 'rgba(129, 199, 132, 0.25)',
          border: '1px solid #81c784',
          color: '#2d6a4f',
          padding: '0.5rem 1.2rem',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          {ingredient}
        </li>
      ))}
    </ul>
    <h3 style={{ textAlign: 'center' }}>How to use</h3>
    <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
      Place one troche under the tongue about 30 minutes before. Do not exceed one per day.
    </p>
  </div>
</section>

      {/* Why Choose Varomax */}
      <section 
        id="why" 
        className="why-choose"
        style={{
          background: `
            linear-gradient(135deg, rgba(5, 38, 29, 0.9) 0%, rgba(11, 49, 38, 0.85) 50%, rgba(16, 77, 60, 0.9) 100%), 
            url('/back.jpeg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '4rem 0',
          color: '#fff'
        }}
      >
        <div className="container">
          <h2 style={{ color: '#fff' }}>Why choose Varomax over synthetic ED pills</h2>
          <div className="features-grid">
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Natural herbal ingredients</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Cordyceps, Ginseng extract, Reishi mushroom, Oyster extract, Coenzyme Q10 and Zinc Amino Acid Chelate.</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Gentler than synthetic ED pills</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Natural ingredients make Varomax gentler than synthetic ED alternatives.</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Energy, Varomax and vitality</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Beyond performance, the botanicals also support energy and overall wellbeing.</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>No Prescription Needed</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Available over the counter, without a doctor's prescription.</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Plant-based and sustainable</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Plant-based actives are more environmentally friendly than synthetic drug production.</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>Fast sublingual absorption</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Absorbed under the tongue, so it works faster than ordinary capsules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>Varomax – Your questions answered</h2>
          <p>Everything you want to know before you try Varomax.</p>

          <div className="faq-list">
            <div className="faq-item">
              <h4>How do I take Varomax?</h4>
              <p>Place one troche under your tongue about 30 minutes before. It dissolves and absorbs sublingually, so it acts faster than a capsule you swallow. Do not exceed one troche per day.</p>
            </div>
            <div className="faq-item">
              <h4>How fast does it work, and how long does it last?</h4>
              <p>Most users feel it within about 30 minutes, and the effect can last several hours. Individual response varies from person to person.</p>
            </div>
            <div className="faq-item">
              <h4>Is it safe? Are there side effects?</h4>
              <p>Varomax is a natural herbal food supplement and is non-habit forming. As with any supplement, if you take medication or have a heart condition, check with your doctor first. It is not a substitute for medical advice.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need a prescription?</h4>
              <p>No. Varomax is available over the counter, without a doctor's prescription.</p>
            </div>
            <div className="faq-item">
              <h4>Is delivery discreet?</h4>
              <p>Yes. Every order ships in plain, unbranded packaging with no mention of the contents, and we ship discreetly worldwide.</p>
            </div>
            <div className="faq-item">
              <h4>Is Varomax a natural alternative to Viagra?</h4>
              <p>Varomax is a herbal food supplement, not a medicine, so it does not replace any prescription treatment. What it gives you is a natural, no-prescription option for supporting stronger erections without synthetic drugs. It uses plant extracts rather than sildenafil, and you can buy it discreetly with no doctor's appointment.</p>
            </div>
            <div className="faq-item">
              <h4>Can Varomax help me last longer in bed?</h4>
              <p>Varomax is formulated to support both erection quality and stamina, which is unusual – most products target one or the other. It is not a numbing spray and not a drug, so it works with your own physiology rather than masking sensation. A lot of men use it as much for the lasting-longer side as the erection side.</p>
            </div>
          </div>

          <div className="faq-medical-note">
            <p><strong>One honest point.</strong> A supplement is support, not a substitute for medical care. If your ED came on suddenly, see a GP first – it can be an early warning for heart or circulation problems. For the everyday dips, stress, tiredness, age, a drink too many – a natural formula is a sensible place to start.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaromaxLanding;