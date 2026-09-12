import React from 'react';
import { useTranslation } from 'react-i18next';
import './VaromaxAbout.css';

export function meta() {
  return [
    {
      title: "About Varomax | Our Story & Quality Standards",
    },
    {
      name: "description",
      content:
        "Learn about Varomax, made in Thailand, and our approach to herbal ingredients, transparency, and quality standards.",
    },
    {
      property: "og:title",
      content: "About Varomax | Our Story & Quality Standards",
    },
    {
      property: "og:description",
      content:
        "Learn about Varomax, made in Thailand, and our approach to herbal ingredients, transparency, and quality standards.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "https://varomax.nu/back.jpeg",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
}

const VaromaxAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="varomax-about">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>{t('aboutPage.title')}</h1>
            <p className="tagline" style={{ color: '#000000' }}>
              {t('aboutPage.tagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <p className="mission-text">
              {t('aboutPage.mission.text1')}
            </p>
            <p className="mission-text">
              {t('aboutPage.mission.text2')}
            </p>
            <div className="mission-note">
              <p>
                <strong>{t('aboutPage.mission.note').split('.')[0]}.</strong> {t('aboutPage.mission.note').split('.').slice(1).join('.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
 <section style={{
  backgroundImage: 'url(/back.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)',
  marginBottom: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden',
  position: 'relative'
}}>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(11, 49, 38, 0.85)',
    zIndex: 1
  }}></div>
  
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  }}>
    <h2 style={{
      color: '#ffffff',
      fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)'
    }}>
      {t('aboutPage.standards.title')}
    </h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'clamp(1rem, 2vw, 1.5rem)'
    }}>
      {Array.isArray(t('aboutPage.standards.items', { returnObjects: true })) && 
        t('aboutPage.standards.items', { returnObjects: true }).map((item, index) => (
        <div key={index} style={{
          background: 'rgba(16, 77, 60, 0.7)',
          borderRadius: '16px',
          padding: 'clamp(1.1rem, 2vw, 1.5rem)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(16, 77, 60, 0.9)';
          e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.4)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(16, 77, 60, 0.7)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.background = 'rgba(16, 77, 60, 0.9)';
          e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.4)';
          e.currentTarget.style.transform = 'scale(0.98)';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.background = 'rgba(16, 77, 60, 0.7)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'clamp(40px, 5vw, 48px)',
            height: 'clamp(40px, 5vw, 48px)',
            borderRadius: '50%',
            background: 'rgba(129, 199, 132, 0.2)',
            marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)'
          }}>
            <span style={{ color: '#81c784', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>✓</span>
          </div>
          
          <h3 style={{
            color: '#81c784',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
            fontWeight: 700,
            marginBottom: 'clamp(0.3rem, 0.8vw, 0.5rem)'
          }}>
            {item.title}
          </h3>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            lineHeight: 1.6,
            margin: 0
          }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Natural Section */}
      <section className="why-natural">
        <div className="container">
          <div className="why-natural-content">
            <h2>{t('aboutPage.whyNatural.title')}</h2>
            <p>{t('aboutPage.whyNatural.text1')}</p>
            <p>{t('aboutPage.whyNatural.text2')}</p>
            <p>{t('aboutPage.whyNatural.text3')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaromaxAbout;