import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(t('contact.fillFields') || 'Please fill in all required fields.');
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('https://varomax.nu/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to send message.');

      setStatus({ loading: false, success: t('contact.success'), error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Fel vid anrop till servern:', error);
      setStatus({ loading: false, success: null, error: t('contact.error') });
    }
  };

  return (
    <div 
      style={{ 
        padding: '2rem', 
        textAlign: 'left', 
        maxWidth: '600px', 
        margin: '2rem auto',
        background: '#ffffff',
        color: '#000000',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ 
        color: '#000000',
        fontSize: '28px',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #000000',
        paddingBottom: '0.5rem'
      }}>
        {t('contact.title')}
      </h2>

      {status.success && (
        <div style={{ padding: '12px', marginBottom: '1rem', background: '#e6f4ea', color: '#137333', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>
          {status.success}
        </div>
      )}
      {status.error && (
        <div style={{ padding: '12px', marginBottom: '1rem', background: '#fce8e6', color: '#c5221f', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('contact.name')}
          </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '6px', 
              border: '1px solid #ccc', 
              background: '#ffffff', 
              color: '#000000',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('contact.email')}
          </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '6px', 
              border: '1px solid #ccc', 
              background: '#ffffff', 
              color: '#000000',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('contact.message')}
          </label>
          <textarea 
            name="message" 
            rows="4"
            value={formData.message} 
            onChange={handleChange} 
            required 
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '6px', 
              border: '1px solid #ccc', 
              background: '#ffffff', 
              color: '#000000',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          type="submit" 
          disabled={status.loading}
          style={{ 
            marginTop: '0.5rem', 
            padding: '14px', 
            width: '100%', 
            cursor: 'pointer',
            background: '#0d7a5f',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '18px',
            opacity: status.loading ? 0.7 : 1
          }}
        >
          {status.loading ? t('contact.sending') : t('contact.send')}
        </button>
      </form>
    </div>
  );
}