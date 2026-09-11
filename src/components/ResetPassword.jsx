import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const token = params.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://varomax.nu/api/reset_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Reset failed');
      setMessage(data.message + ' Redirecting to login...');
      setTimeout(() => navigate('/reseller'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div style={{ maxWidth: 480, margin: '3rem auto', padding: '2rem', background: '#fce8e6', color: '#c5221f', borderRadius: 12 }}>
        Invalid or missing reset token.
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 480, margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: '1rem' }}>Set a new password</h2>

      {error && <div style={{ padding: 10, marginBottom: 16, background: '#fce8e6', color: '#c5221f', borderRadius: 6 }}>{error}</div>}
      {message && <div style={{ padding: 10, marginBottom: 16, background: '#e6f4ea', color: '#137333', borderRadius: 6 }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>New password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 6, marginBottom: 16, boxSizing: 'border-box' }}
        />

        <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Confirm new password</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          minLength={8}
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 6, marginBottom: 16, boxSizing: 'border-box' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: 12, background: '#0d7a5f', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Saving...' : 'Reset password'}
        </button>
      </form>
    </div>
  );
}