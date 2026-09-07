import { useState } from 'react';

export default function Checkout({ cart, totalPrice, onBack, onComplete }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert('Please fill in all required fields.');
      return;
    }

    onComplete(formData);

    try {
      const response = await fetch('https://varomax.nu/create-checkout.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          totalPrice: totalPrice, 
          customer: formData 
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Fel: ' + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Fel vid anrop till servern:', error);
      alert('Ett nätverksfel uppstod. Försök igen.');
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
      <button 
        onClick={onBack} 
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
        ← Back to shop
      </button>
      
      <h2 style={{ 
        color: '#000000',
        fontSize: '28px',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #000000',
        paddingBottom: '0.5rem'
      }}>
        Checkout
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
          Your order ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
        </h4>
        <p style={{ margin: 0, fontSize: '18px', color: '#000000' }}>
          <strong>Total to pay: ฿{totalPrice}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            Full Name *
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
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            Email Address *
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
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
            Shipping Address *
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
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              City *
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
                outline: 'none'
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              Postal Code *
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
                outline: 'none'
              }}
            />
          </div>
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
          Proceed to Stripe 💳
        </button>
      </form>
    </div>
  );
}