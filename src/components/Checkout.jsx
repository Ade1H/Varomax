import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // 1. Added import

export default function Checkout({ cart, totalPrice, onBack, onComplete }) {
  const { t } = useTranslation();
  const navigate = useNavigate(); // 2. Initialize hook

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'TH' // Default country set to Thailand
  });

  const countries = [
    { code: 'TH', name: 'Thailand' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.zip || !formData.country) {
      alert(t('checkoutPage.validation.required'));
      return;
    }

    onComplete(formData);

    try {
      const userId = localStorage.getItem('user_id') || localStorage.getItem('auth_token');

      const response = await fetch('https://varomax.nu/create-checkout.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          totalPrice: totalPrice, 
          customer: formData,
          cart: cart,
          user_id: userId
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(t('checkoutPage.error.serverError') || 'Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Server error:', error);
      alert(t('checkoutPage.error.network'));
    }
  };

  return (
    <div 
      style={{ 
        padding: '2rem', 
        textAlign: 'left', 
        maxWidth: '600px', 
        margin: '0 auto',
        background: '#ffffff',
        color: '#000000',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      {/* 3. Updated button handler to trigger routing */}
      <button 
        onClick={() => {
          if (onBack) onBack(); // Keeps optional state cleanup if needed
          navigate('/shop');  // Adjust path to match your shop route (e.g., '/shop' or '/')
        }} 
        style={{ 
          marginBottom: '1.5rem', 
          background: 'transparent', 
          border: '1px solid #ccc', 
          padding: '8px 16px', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          color: '#000000',
          fontSize: '14px',
          fontWeight: 600
        }}
      >
        {t('checkoutPage.backToShop')}
      </button>
      
      <h2 style={{ 
        color: '#000000',
        fontSize: '28px',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #000000',
        paddingBottom: '0.5rem'
      }}>
        {t('checkoutPage.title')}
      </h2>

      <div 
        style={{ 
          background: '#f4f4f4',
          padding: '1.25rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '1px solid #ccc',
          color: '#000000'
        }}
      >
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#000000' }}>
          {t('checkoutPage.yourOrder')} ({cart.reduce((sum, i) => sum + i.quantity, 0)} {t('checkoutPage.items')})
        </h4>
        <p style={{ margin: 0, fontSize: '18px', color: '#000000' }}>
          <strong>{t('checkoutPage.totalToPay')} ฿{totalPrice}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('checkoutPage.form.fullName')} *
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

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              {t('checkoutPage.form.email')} *
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
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              {t('contact.phone') || t('checkoutPage.form.phone')} *
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
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
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('checkoutPage.form.address')} *
          </label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
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

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              {t('checkoutPage.form.city')} *
            </label>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
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
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              {t('checkoutPage.form.postalCode')} *
            </label>
            <input 
              type="text" 
              name="zip" 
              value={formData.zip} 
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
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            {t('checkoutPage.form.country')} *
          </label>
          <select 
            name="country" 
            value={formData.country} 
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
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <button 
          type="submit" 
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
            fontSize: '18px'
          }}
        >
          {t('checkoutPage.submit')}
        </button>
      </form>
    </div>
  );
}