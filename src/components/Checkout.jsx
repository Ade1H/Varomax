import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Checkout({ cart = [], totalPrice = 0, onComplete }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Thailand',
    phone: '',
    notes: ''
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = t('checkoutPage.validation.required');
    if (!formData.email.trim()) newErrors.email = t('checkoutPage.validation.required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('checkoutPage.validation.email');
    if (!formData.address.trim()) newErrors.address = t('checkoutPage.validation.required');
    if (!formData.city.trim()) newErrors.city = t('checkoutPage.validation.required');
    if (!formData.phone.trim()) newErrors.phone = t('checkoutPage.validation.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        if (onComplete) onComplete(formData);
      }, 1500);
    }
  };

  const handleBackToCart = () => {
    navigate('/shop');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>{t('checkoutPage.empty.title')}</h2>
        <p>{t('checkoutPage.empty.message')}</p>
        <button 
          onClick={handleBackToCart}
          style={{
            padding: '12px 24px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '1rem'
          }}
        >
          {t('checkoutPage.empty.shopNow')}
        </button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ color: '#2d6a4f' }}>{t('checkoutPage.success.title')}</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>{t('checkoutPage.success.message')}</p>
        <button 
          onClick={handleContinueShopping}
          style={{
            padding: '12px 24px',
            background: '#2d6a4f',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '1rem'
          }}
        >
          {t('checkoutPage.success.continue')}
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
        {t('checkoutPage.title')}
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Order Summary */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>{t('checkoutPage.orderSummary')}</h3>
          <div style={{ 
            background: '#f8f9fa', 
            borderRadius: '8px', 
            padding: '1.5rem',
            border: '1px solid #e9ecef'
          }}>
            {cart.map(item => (
              <div key={item.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid #e9ecef'
              }}>
                <span>{item.name} × {item.quantity}</span>
                <span>฿{item.price * item.quantity}</span>
              </div>
            ))}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontWeight: 'bold',
              paddingTop: '1rem',
              borderTop: '2px solid #dee2e6',
              marginTop: '0.5rem'
            }}>
              <span>{t('checkoutPage.total')}</span>
              <span>฿{totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Shipping Form */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>{t('checkoutPage.form.title')}</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                {t('checkoutPage.form.fullName')} *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t('checkoutPage.form.placeholder.fullName')}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.fullName ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              {errors.fullName && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>{errors.fullName}</p>}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                {t('checkoutPage.form.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('checkoutPage.form.placeholder.email')}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.email ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              {errors.email && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>{errors.email}</p>}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                {t('checkoutPage.form.phone')} *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('checkoutPage.form.placeholder.phone')}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.phone ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              {errors.phone && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>{errors.phone}</p>}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                {t('checkoutPage.form.address')} *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t('checkoutPage.form.placeholder.address')}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: errors.address ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              {errors.address && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>{errors.address}</p>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  {t('checkoutPage.form.city')} *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder={t('checkoutPage.form.placeholder.city')}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: errors.city ? '1px solid #dc3545' : '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.city && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '4px' }}>{errors.city}</p>}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  {t('checkoutPage.form.postalCode')}
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder={t('checkoutPage.form.placeholder.postalCode')}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                {t('checkoutPage.form.notes')}
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder={t('checkoutPage.form.placeholder.notes')}
                rows="2"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={handleBackToCart}
                style={{
                  padding: '12px 24px',
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  flex: 1
                }}
              >
                {t('checkoutPage.backToCart')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '12px 24px',
                  background: '#2d6a4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  flex: 2,
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Processing...' : t('checkoutPage.placeOrder')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}