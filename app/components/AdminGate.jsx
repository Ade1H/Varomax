import React, { useState, useEffect } from 'react';

export default function AdminGate({ children }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const t   = sessionStorage.getItem('admin_token');
    const exp = sessionStorage.getItem('admin_token_expires');
    if (t && exp && new Date(exp) > new Date()) {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://varomax.nu/api/check_admin.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Access denied');

      sessionStorage.setItem('admin_token', data.token);
      sessionStorage.setItem('admin_token_expires', data.expires);
      setUnlocked(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (unlocked) return children;

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.icon}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="16" height="11" rx="2" stroke="#0d7a5f" strokeWidth="1.7" />
            <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="#0d7a5f" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="12" cy="15.5" r="1.4" fill="#0d7a5f" />
          </svg>
        </div>

        <h2 style={styles.title}>Restricted Access</h2>
        <p style={styles.subtitle}>
          This portal is for authorized users only.
          Enter the access password to continue.
        </p>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Access Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            style={styles.input}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Verifying...' : 'Unlock Portal'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
    background: 'linear-gradient(180deg, #f6f8f7 0%, #eef2f0 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: '#fff',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
    border: '1px solid #eaeaea',
    textAlign: 'center',
  },
  icon: { marginBottom: '1rem' },
  title: { fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem' },
  subtitle: { fontSize: '14px', color: '#64748b', margin: '0 0 1.5rem', lineHeight: 1.5 },
  error: {
    padding: '10px 12px',
    marginBottom: '1rem',
    background: '#fef2f2',
    color: '#b91c1c',
    fontSize: '13px',
    fontWeight: 500,
    borderRadius: '8px',
    border: '1px solid #fecaca',
    textAlign: 'left',
  },
  form: { display: 'flex', flexDirection: 'column', textAlign: 'left' },
  label: { fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
    marginBottom: '1rem',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    fontWeight: 600,
    color: '#fff',
    background: '#0d7a5f',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(13, 122, 95, 0.25)',
  },
};