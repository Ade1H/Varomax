import React from 'react';
import './VaromaxAbout.css'; // You'll need to create this CSS file

const VaromaxAbout = () => {
  return (
    <div className="varomax-about">
      {/* Header */}
      {/* <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">Varomax</div>
            <nav>
              <a href="/">Home</a>
              <a href="/about-us" className="active">About</a>
              <a href="#products">Products</a>
              <a href="#faq">FAQ</a>
              <a href="#buy" className="btn-primary">Buy Now</a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Varomax</h1>
            <p className="tagline" style={{ color: '#000000' }} >Natural support for men's performance, made properly and sold honestly.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <p className="mission-text">
              Most men chasing better performance get pushed towards one of two things: a synthetic 
              prescription drug, with the GP visit and the side effects, or a dodgy, unregulated pill 
              off some forecourt shelf that hides what is actually in it. We did not like either option.
            </p>
            <p className="mission-text">
              Varomax exists to give men a third one: an honest, regulated, fully transparent natural 
              route – supplements you can actually read the label of. Varomax supports firmer erections 
              and helps you last longer.
            </p>
            <div className="mission-note">
              <p>
                <strong>We are not a pharmacy, and we do not pretend to be.</strong> These are food 
                supplements that work with your own physiology, not medicines. We would rather say that 
                plainly than over-promise, because in this corner of the market, trust is the only thing 
                worth having.
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
  padding: '2.5rem 2rem',
  marginBottom: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden',
  position: 'relative'
}}>
  {/* Overlay för att göra texten läsbar */}
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
      fontSize: '1.75rem',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '2rem'
    }}>
      Standards you can check
    </h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    }}>
      {[
        {
          title: 'Thai-FDA Registered',
          desc: 'A registered herbal formula, No. 30-1-13758-5-0069, made to regulated standards.'
        },
        {
          title: '100% Herbal',
          desc: 'Plant-based actives, no synthetic prescription compounds, and non-habit forming.'
        },
        {
          title: 'Lab-Tested',
          desc: 'A quality-checked formula with a fully disclosed ingredient list. No proprietary blends.'
        },
        {
          title: 'Made in Thailand',
          desc: 'Produced in Thailand, home to many of the botanicals in the formula.'
        },
        {
          title: 'Discreet Delivery',
          desc: 'Plain, unbranded packaging. What you order stays your business.'
        },
        {
          title: '60-Day Money-Back',
          desc: 'Not satisfied? A full refund within 60 days, with no awkward questions.'
        }
      ].map((item, index) => (
        <div key={index} style={{
          background: 'rgba(16, 77, 60, 0.7)',
          borderRadius: '16px',
          padding: '1.5rem',
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
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(129, 199, 132, 0.2)',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            <span style={{ color: '#81c784', fontSize: '1.5rem' }}>✓</span>
          </div>
          
          <h3 style={{
            color: '#81c784',
            fontSize: '1.1rem',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            {item.title}
          </h3>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.95rem',
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
            <h2>Why we went natural</h2>
            <p>
              So we built the opposite of a hidden pill. Every active in Varomax is printed on the 
              label, in full, with no proprietary blends to duck behind. You see exactly what you are 
              taking, and how much.
            </p>
            <p>
              Varomax is sublingual: it dissolves under the tongue, so the herbal extracts absorb 
              directly rather than being broken down in the gut. That is why it tends to work faster 
              than a capsule you swallow – in about 30 minutes – and why we built the product this 
              way instead of as another bottle of pills. 
            </p>
            <p>
              If you want the full side-by-side, see Varomax vs Viagra.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to try the natural route?</h2>
            <p>Browse the range, or see exactly how Varomax compares to the prescription option.</p>
            <div className="cta-buttons">
              <a href="#products" className="btn-primary">Browse Products</a>
              <a href="#compare" className="btn-secondary">See Comparison</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
     
    </div>
  );
};

export default VaromaxAbout;