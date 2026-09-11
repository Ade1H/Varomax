import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    password: '',
    vat_number: '',
    org_number: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    postal_code: '',
    country: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      company_name: '',
      contact_person: '',
      email: '',
      password: '',
      vat_number: '',
      org_number: '',
      phone: '',
      website: '',
      address: '',
      city: '',
      postal_code: '',
      country: '',
    });
    setError(null);
    setSuccess(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    const requiredFields = ['address', 'city', 'postal_code', 'country'];
    const missing = requiredFields.filter((f) => !formData[f].trim());
    if (missing.length > 0) {
      setError('Please fill in: ' + missing.join(', '));
      return;
    }

    setLoading(true);

    try {
      const payload = { ...formData, account_type: 'reseller' };

      const response = await fetch('https://varomax.nu/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register reseller');
      }

      // ✅ Do NOT store token or trigger any redirect.
      // Registration just creates the account; the reseller logs in separately.
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={styles.successWrap}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#0d7a5f" strokeWidth="1.5" />
              <path
                d="M7 12.5l3.2 3.2L17 9"
                stroke="#0d7a5f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 style={styles.successTitle}>Registration Complete</h2>
          <p style={styles.successText}>
            The reseller account has been created successfully. They can now log in at{' '}
            <strong>/reseller</strong>.
          </p>
          <button
            onClick={resetForm}
            style={{
              marginTop: '1.5rem',
              padding: '10px 20px',
              background: '#0d7a5f',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Register Another Company
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Register Reseller Company</h1>
          <p style={styles.subtitle}>
            Join the Varomax reseller network. Fill in your company details below.
          </p>
        </div>

        {error && (
          <div style={styles.error}>
            <span style={styles.errorIcon}>!</span>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} style={styles.form}>
          <SectionTitle>Account</SectionTitle>

          <Field label="Company Name" required>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Field>

          <Field label="Contact Person" required>
            <input
              type="text"
              name="contact_person"
              value={formData.contact_person}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Field>

          <Field label="Email Address" required>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Field>

          <Field label="Password" required hint="Minimum 8 characters">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              style={styles.input}
            />
          </Field>

          <SectionTitle>Company Details</SectionTitle>

          <div style={styles.row2}>
            <Field label="VAT Number">
              <input
                type="text"
                name="vat_number"
                value={formData.vat_number}
                onChange={handleChange}
                placeholder="SE123456789001"
                style={styles.input}
              />
            </Field>
            <Field label="Org. Number">
              <input
                type="text"
                name="org_number"
                value={formData.org_number}
                onChange={handleChange}
                style={styles.input}
              />
            </Field>
          </div>

          <div style={styles.row2}>
            <Field label="Phone" required>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </Field>
            <Field label="Website">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://example.com"
                style={styles.input}
              />
            </Field>
          </div>

          <Field label="Address" required>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Field>

          <div style={styles.row3}>
            <Field label="City" required>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </Field>
            <Field label="Postal Code" required>
              <input
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </Field>
            <Field label="Country" required>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
            onMouseEnter={(e) =>
              !loading && (e.currentTarget.style.background = '#0a5f49')
            }
            onMouseLeave={(e) =>
              !loading && (e.currentTarget.style.background = '#0d7a5f')
            }
          >
            {loading ? 'Registering...' : 'Register Reseller Company'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------- Small helper components ---------- */

function SectionTitle({ children }) {
  return (
    <div style={styles.sectionTitle}>
      <span>{children}</span>
      <span style={styles.sectionLine} />
    </div>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>
        {label} {required && <span style={styles.required}>*</span>}
      </label>
      {children}
      {hint && <span style={styles.hint}>{hint}</span>}
    </div>
  );
}

/* ---------- Inline styles ---------- */

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '3rem 1rem',
    background: 'linear-gradient(180deg, #f6f8f7 0%, #eef2f0 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '640px',
    background: '#ffffff',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 10px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
    border: '1px solid #eaeaea',
  },
  header: { marginBottom: '1.75rem' },
  title: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.3px',
  },
  subtitle: {
    marginTop: '0.5rem',
    fontSize: '14px',
    color: '#64748b',
    lineHeight: 1.5,
  },
  error: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 14px',
    marginBottom: '1.25rem',
    background: '#fef2f2',
    color: '#b91c1c',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '8px',
    border: '1px solid #fecaca',
  },
  errorIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#b91c1c',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    flexShrink: 0,
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '0.75rem',
    marginBottom: '0.25rem',
    color: '#0d7a5f',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  sectionLine: { flex: 1, height: '1px', background: '#e2e8f0' },
  field: { display: 'flex', flexDirection: 'column' },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#334155',
    marginBottom: '6px',
  },
  required: { color: '#ef4444' },
  hint: { fontSize: '12px', color: '#94a3b8', marginTop: '4px' },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    color: '#0f172a',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  row3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' },
  button: {
    marginTop: '1rem',
    padding: '12px 20px',
    fontSize: '15px',
    fontWeight: 600,
    color: '#ffffff',
    background: '#0d7a5f',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    boxShadow: '0 4px 12px rgba(13, 122, 95, 0.25)',
  },
  buttonDisabled: { opacity: 0.6, cursor: 'not-allowed', boxShadow: 'none' },
  successWrap: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
    background: 'linear-gradient(180deg, #f6f8f7 0%, #eef2f0 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  successCard: {
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
    background: '#ffffff',
    padding: '3rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
    border: '1px solid #eaeaea',
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  successTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#0d7a5f',
    margin: '0 0 0.5rem',
  },
  successText: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: 1.5,
    margin: 0,
  },
};