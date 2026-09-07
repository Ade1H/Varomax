import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
 <button 
  onClick={() => i18n.changeLanguage('en')}
  style={{
    background: i18n.language === 'en' ? '#0d7a5f' : 'transparent',
    color: '#ffffff !important', // 👈 Added !important
    border: '1px solid #ccc',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 600
  }}
>
  EN
</button>

<button 
  onClick={() => i18n.changeLanguage('th')}
  style={{
    background: i18n.language === 'th' ? '#0d7a5f' : 'transparent',
    color: '#ffffff !important', // 👈 Added !important
    border: '1px solid #ccc',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 600
  }}
>
  TH
</button>
    </div>
  );
}