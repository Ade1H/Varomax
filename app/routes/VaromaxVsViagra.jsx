import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function meta() {
  return [
    {
      title: "Varomax vs. Viagra | Compare Effectiveness, Safety & Benefits",
    },
    {
      name: "description",
      content:
        "Compare Varomax and Viagra side by side. Explore key differences in ingredients, efficacy, side effects, and natural health advantages.",
    },
  ];
}

export default function ComparePage() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Varomax added to your cart!');
  };

  return (
    <div style={{
      background: '#f8f9fa',
      minHeight: '100vh',
      color: '#1a1a2e',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Hero Section */}
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#2e211aff',
            lineHeight: '1.2'
          }}>
            {t('vsViagraPage.title')}
          </h1>
        </header>

        {/* Introduction */}
        <section style={{ marginBottom: '2.5rem' }}>
          <p style={{ lineHeight: '1.6', color: '#495057', fontSize: '0.95rem' }}>
            {t('vsViagraPage.introduction.text1')}
          </p>
          <p style={{ lineHeight: '1.6', color: '#495057', marginTop: '1rem', fontSize: '0.95rem' }}>
            {t('vsViagraPage.introduction.text2')}
          </p>
        </section>

        {/* Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {t('vsViagraPage.badges', { returnObjects: true }).map((badge, i) => (
            <span key={i} style={{
              background: 'rgba(129, 199, 132, 0.25)',
              border: '1px solid #81c784',
              color: '#2d6a4f',
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Main Comparison Table */}
        <div style={{
          overflowX: 'auto',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: '20px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundImage: 'linear-gradient(rgba(11, 49, 38, 0.9), rgba(11, 49, 38, 0.9)), url(/back.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '20px',
            overflow: 'hidden',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <thead>
              <tr style={{ background: 'rgba(16, 77, 60, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, color: '#ffffff' }}>{t('vsViagraPage.comparison.feature')}</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700, color: '#81c784' }}>{t('vsViagraPage.comparison.varomax')}</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700, color: '#ffffff' }}>{t('vsViagraPage.comparison.viagra')}</th>
              </tr>
            </thead>
            <tbody>
              {t('vsViagraPage.comparison.rows', { returnObjects: true }).map((row, i) => (
                <tr key={i} style={{ borderBottom: i < 4 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 500, textAlign: 'left', color: '#ffffff' }}>{row.feature}</td>
                  <td style={{ padding: '0.8rem 1rem', textAlign: 'center' }}>
                    <span style={{
                      display: 'inline-block',
                      background: row.varomax === 'Yes' ? 'rgba(129, 199, 132, 0.25)' : 'transparent',
                      color: row.varomax === 'Yes' ? '#81c784' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: row.varomax === 'Yes' ? 700 : 400,
                      padding: row.varomax === 'Yes' ? '4px 12px' : 0,
                      borderRadius: '20px'
                    }}>
                      {row.varomax}
                    </span>
                  </td>
                  <td style={{ padding: '0.8rem 1rem', textAlign: 'center' }}>
                    <span style={{
                      display: 'inline-block',
                      background: row.viagra === 'Yes' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      color: row.viagra === 'Yes' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: row.viagra === 'Yes' ? 600 : 400,
                      padding: row.viagra === 'Yes' ? '4px 12px' : 0,
                      borderRadius: '20px'
                    }}>
                      {row.viagra}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Message Box */}
        <div style={{
          background: '#ffffff',
          borderLeft: '4px solid #2d6a4f',
          borderTop: '1px solid #e9ecef',
          borderRight: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef',
          padding: '1.5rem',
          borderRadius: '16px',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <p style={{ margin: 0, lineHeight: '1.7', color: '#495057' }}>
            <strong style={{ color: '#1a1a2e' }}>{t('vsViagraPage.keyMessage.text')}</strong>
          </p>
        </div>

        {/* How Varomax Works */}
        <section style={{
          backgroundImage: 'linear-gradient(rgba(11, 49, 38, 0.9), rgba(11, 49, 38, 0.9)), url(/back.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2.5rem 2rem',
          marginBottom: '2.5rem',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden'
        }}>
          <h2 style={{ 
            color: '#ffffff', 
            marginBottom: '2rem', 
            fontWeight: 700,
            fontSize: '1.75rem'
          }}>{t('vsViagraPage.howItWorks.title')}</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {t('vsViagraPage.howItWorks.items', { returnObjects: true }).map((item, i) => (
              <div key={i} style={{ 
                background: 'rgba(16, 77, 60, 0.6)', 
                padding: '1.5rem', 
                borderRadius: '16px', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all 0.3s ease'
              }}>
                <h4 style={{ 
                  marginBottom: '0.5rem', 
                  color: '#81c784',
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}>{item.title}</h4>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  margin: 0,
                  lineHeight: 1.5
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Viagra Not Your Only Option */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1a1a2e', marginBottom: '1rem', fontWeight: 700 }}>{t('vsViagraPage.viagraNotOnly.title')}</h2>
          <p style={{ lineHeight: '1.7', color: '#495057' }}>
            {t('vsViagraPage.viagraNotOnly.text1')}
          </p>
          <p style={{ lineHeight: '1.7', color: '#495057', marginTop: '1rem' }}>
            {t('vsViagraPage.viagraNotOnly.text2')}
          </p>
        </section>

        {/* Medical Disclaimer */}
        <div style={{
          background: '#ffffff',
          borderLeft: '4px solid #f39c12',
          borderTop: '1px solid #e9ecef',
          borderRight: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef',
          padding: '1.5rem',
          borderRadius: '16px',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#495057', lineHeight: '1.7' }}>
            <strong style={{ color: '#1a1a2e' }}>{t('vsViagraPage.medicalDisclaimer.title')}</strong> {t('vsViagraPage.medicalDisclaimer.text')}
          </p>
        </div>

        {/* FAQ Section */}
        <section style={{
          backgroundImage: 'linear-gradient(rgba(11, 49, 38, 0.9), rgba(11, 49, 38, 0.9)), url(/back.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '1.75rem',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            color: '#ffffff', 
            marginBottom: '1.5rem', 
            fontWeight: 700 
          }}>
            {t('vsViagraPage.faq.title')}
          </h2>

          {t('vsViagraPage.faq.items', { returnObjects: true }).map((faq, index) => (
            <div key={index} style={{
              borderBottom: index < 4 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
              padding: '1rem 0'
            }}>
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#81c784'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                {faq.question}
                <span style={{ 
                  fontSize: '1.2rem', 
                  color: '#81c784',
                  fontWeight: 700
                }}>
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>
              {activeFaq === index && (
                <div style={{
                  padding: '0.5rem 0 0.5rem 1rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.7',
                  borderLeft: '3px solid #81c784',
                  marginTop: '0.5rem',
                  background: 'rgba(16, 77, 60, 0.4)',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '0.95rem'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}