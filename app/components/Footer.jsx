import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer 
      className="footer"
      style={{
       background: `
          linear-gradient(135deg, rgba(17, 52, 104, 0.95), rgba(15, 32, 67, 0.98)),
          url('/back2.jpeg')
        
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 0',
        color: '#fff',
        borderTop: '1px solid rgba(42, 90, 154, 0.3)',
        boxShadow: 'inset 0 4px 20px rgba(5, 12, 24, 0.6)'
      }}
    >
      <div className="container">
        <div className="footer-content" style={{ textAlign: 'center' }}>
          <div className="footer-logo" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '0.5px' }}>Varomax</div>
          <p className="footer-disclaimer" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.5' }}>
            {t('footer.disclaimer')}
          </p>
          <div className="footer-badges" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(26, 58, 107, 0.4)', border: '1px solid rgba(42, 90, 154, 0.5)', padding: '0.5rem 1rem', borderRadius: '6px', color: '#fff', backdropFilter: 'blur(4px)' }}>
              {t('footer.badges.fda')}
            </span>
            <span style={{ background: 'rgba(26, 58, 107, 0.4)', border: '1px solid rgba(42, 90, 154, 0.5)', padding: '0.5rem 1rem', borderRadius: '6px', color: '#fff', backdropFilter: 'blur(4px)' }}>
              {t('footer.badges.herbal')}
            </span>
            <span style={{ background: 'rgba(26, 58, 107, 0.4)', border: '1px solid rgba(42, 90, 154, 0.5)', padding: '0.5rem 1rem', borderRadius: '6px', color: '#fff', backdropFilter: 'blur(4px)' }}>
              {t('footer.badges.lab')}
            </span>
          </div>
          <p className="footer-copy" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}