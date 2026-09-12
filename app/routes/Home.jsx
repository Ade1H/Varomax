import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import './VaromaxLanding.css';

export function meta() {
  return [
    {
      title: "Varomax | Premium Herbal Sublingual Troches for Performance & Stamina",
    },
    {
      name: "description",
      content:
        "Discover Varomax—fast-acting, all-natural herbal sublingual troches designed for performance, stamina, and vitality. No prescription required.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
}

const VaromaxLanding = ({ onAddToCart }) => {  // 👈 ADDED onAddToCart prop
  const { t } = useTranslation();
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
          <div className="hero-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div className="hero-text" style={{ textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                lineHeight: '1.2',
                marginBottom: '1rem'
              }}>
                {t('home.hero.title')}
              </h1>
              <p className="subtitle" style={{ 
                color: '#000000',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                marginBottom: '1.5rem'
              }}>
                {t('home.hero.subtitle')}
              </p>
              <div className="badges" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {[
                  t('home.hero.badges.fda'),
                  t('home.hero.badges.herbal'),
                  t('home.hero.badges.shipping'),
                  t('home.hero.badges.guarantee')
                ].map((badgeText, index) => (
                  <span key={index} style={{
                    background: 'rgba(129, 199, 132, 0.25)',
                    border: '1px solid #81c784',
                    color: '#2d6a4f',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '20px',
                    fontSize: 'clamp(12px, 1vw, 14px)',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    whiteSpace: 'nowrap'
                  }}>
                    {badgeText}
                  </span>
                ))}
              </div>
              <div className="stats" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <span className="stat-number" style={{
                    display: 'block',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 'bold',
                    color: '#2d6a4f'
                  }}>30 min</span>
                  <span className="stat-label" style={{
                    fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                    color: '#555'
                  }}>{t('home.hero.stats.feel')}</span>
                </div>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <span className="stat-number" style={{
                    display: 'block',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 'bold',
                    color: '#2d6a4f'
                  }}>36h</span>
                  <span className="stat-label" style={{
                    fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                    color: '#555'
                  }}>{t('home.hero.stats.lasts')}</span>
                </div>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <span className="stat-number" style={{
                    display: 'block',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 'bold',
                    color: '#2d6a4f'
                  }}>60 day</span>
                  <span className="stat-label" style={{
                    fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                    color: '#555'
                  }}>{t('home.hero.stats.guarantee')}</span>
                </div>
              </div>
              <button 
                className="btn-hero" 
                onClick={() => navigate('/shop')}  // 👈 CHANGED to navigate to shop
                style={{
                  padding: 'clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)',
                  fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                  fontWeight: 'bold',
                  background: '#2d6a4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(45, 106, 79, 0.3)',
                  width: '100%',
                  maxWidth: '300px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1b4332';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(45, 106, 79, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#2d6a4f';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(45, 106, 79, 0.3)';
                }}
              >
                {t('home.hero.cta')}
              </button>
            </div>
            <div className="product-grid" style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {heroProduct && (
                <div className="product-item featured" style={{ 
                  textAlign: 'left', 
                  margin: 0, 
                  background: 'transparent', 
                  border: 'none', 
                  boxShadow: 'none', 
                  padding: '1rem', 
                  width: '100%', 
                  maxWidth: '360px', 
                  boxSizing: 'border-box'
                }}>
                  {heroProduct.badge && <div className="product-badge">{heroProduct.badge}</div>}
                  
                  {heroProduct.image && (
                    <img 
                      src={heroProduct.image} 
                      alt={heroProduct.name} 
                      style={{ 
                        width: '100%', 
                        height: 'clamp(200px, 30vw, 280px)', 
                        objectFit: 'contain', 
                        borderRadius: '8px', 
                        marginBottom: '1.25rem', 
                        display: 'block' 
                      }} 
                    />
                  )}

                  <h3 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)', 
                    color: '#000000' 
                  }}>
                    {heroProduct.name}
                  </h3>
                  <p style={{ 
                    margin: '0 0 0.75rem 0', 
                    color: '#000000',
                    fontSize: 'clamp(0.9rem, 1vw, 1rem)'
                  }}>
                    {heroProduct.description || heroProduct.category}
                  </p>
                  
                  <div className="price" style={{ 
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)', 
                    fontWeight: 'bold', 
                    marginBottom: '0.75rem', 
                    color: '#000000' 
                  }}>
                    ฿{heroProduct.price} / pack
                  </div>
                  
                  {heroProduct.packSize && (
                    <p className="pack-size" style={{ 
                      fontWeight: '500', 
                      color: '#000000', 
                      fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)', 
                      margin: '0 0 1rem 0' 
                    }}>
                      {heroProduct.packSize}
                    </p>
                  )}

                  {heroProduct.features && heroProduct.features.length > 0 && (
                    <ul className="product-features" style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: '0 0 1rem 0', 
                      textAlign: 'left' 
                    }}>
                      {heroProduct.features.map((feature, index) => (
                        <li key={index} style={{ 
                          marginBottom: '4px', 
                          color: '#000000', 
                          fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)' 
                        }}>
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Add to Cart Button */}
                  <div className="product-card-buttons" style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    marginTop: '1rem' 
                  }}>
                    <button 
                      className="btn-add" 
                      onClick={() => {
                        if (onAddToCart) {
                          onAddToCart(heroProduct);
                        }
                        navigate('/shop');
                      }} 
                      style={{ 
                        flex: 1,
                        padding: 'clamp(10px, 1vw, 12px)',
                        fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                        fontWeight: '600',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#0056b3'}
                      onMouseLeave={(e) => e.target.style.background = '#007bff'}
                    >
                      {t('shopPage.addToCart')}
                    </button>
                  </div>
                </div>
              )}
            </div>
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
          <h2 style={{ color: '#fff' }}>{t('home.about.title')}</h2>
          <p className="about-text" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {t('home.about.description')}
          </p>
          <div className="about-grid">
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.about.cards.fda')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.about.cards.fdaDesc')}</p>
            </div>
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.about.cards.herbal')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.about.cards.herbalDesc')}</p>
            </div>
            <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.about.cards.lab')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.about.cards.labDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Varomax Detail */}
      <section className="about-detail">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>{t('home.detail.title')}</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 20px" }}>
            {t('home.detail.description')}
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
            {t('home.detail.certificate')}
          </p>
          <h3 style={{ textAlign: 'center' }}>{t('home.detail.ingredients')}</h3>
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
            {t('home.detail.ingredientsList', { returnObjects: true }).map((ingredient, index) => (
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
          <h3 style={{ textAlign: 'center' }}>{t('home.detail.howToUse')}</h3>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            {t('home.detail.howToUseDesc')}
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
          <h2 style={{ color: '#fff' }}>{t('home.whyChoose.title')}</h2>
          <div className="features-grid">
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.natural')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.naturalDesc')}</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.gentler')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.gentlerDesc')}</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.energy')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.energyDesc')}</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.noPrescription')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.noPrescriptionDesc')}</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.sustainable')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.sustainableDesc')}</p>
            </div>
            <div className="feature" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '8px', padding: '1.5rem', color: '#fff' }}>
              <h4 style={{ color: '#fff' }}>{t('home.whyChoose.features.fast')}</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{t('home.whyChoose.features.fastDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>{t('home.faq.title')}</h2>
          <p>{t('home.faq.subtitle')}</p>

          <div className="faq-list">
            {t('home.faq.items', { returnObjects: true }).map((item, index) => (
              <div className="faq-item" key={index}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="faq-medical-note">
            <p><strong>{t('home.faq.medicalNote').split('.')[0]}.</strong> {t('home.faq.medicalNote').split('.').slice(1).join('.')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaromaxLanding;