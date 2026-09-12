import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function meta() {
  return [
    {
      title: "Reset Password | Varomax",
    },
    {
      name: "description",
      content:
        "Request a password reset link for your Varomax account to regain secure access.",
    },
    {
      name: "robots",
      content: "noindex, follow",
    },
  ];
}

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch('https://varomax.nu/api/forgot_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send reset link');
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: '1rem' }}>Forgot your password?</h2>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>
        Enter your email and we’ll send you a reset link.
      </p>

      {error && <div style={{ padding: 10, marginBottom: 16, background: '#fce8e6', color: '#c5221f', borderRadius: 6 }}>{error}</div>}
      {message && <div style={{ padding: 10, marginBottom: 16, background: '#e6f4ea', color: '#137333', borderRadius: 6 }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 6, marginBottom: 16, boxSizing: 'border-box' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: 12, background: '#0d7a5f', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Sending...' : 'Send reset link'}
        </button>
      </form>
    </div>
  );
}