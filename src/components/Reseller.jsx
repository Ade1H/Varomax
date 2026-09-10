import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Reseller({ onLoginSuccess }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [dashboardData, setDashboardData] = useState(null);
  const [loadingDashboard, setLoadingDashboard] = useState(true);
  const [dashboardError, setDashboardError] = useState(null);

  const token = localStorage.getItem('auth_token');

  useEffect(() => {
    if (!token) {
      setLoadingDashboard(false);
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const response = await fetch('https://varomax.nu/api/dashboard.php', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Failed to load dashboard data');
        }

        setDashboardData(result);
      } catch (err) {
        setDashboardError(err.message);
      } finally {
        setLoadingDashboard(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    setLoginError(null);

    try {
      const response = await fetch('https://varomax.nu/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to log in');
      }

      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('account_type', data.account_type);

      if (onLoginSuccess) {
        onLoginSuccess(data);
      } else {
        window.location.reload();
      }
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoadingLogin(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('account_type');
    localStorage.removeItem('user_id');
    window.location.reload();
  };

  if (token) {
    if (loadingDashboard) {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666', fontSize: '16px' }}>
          {t('reseller.loadingPortal')}
        </div>
      );
    }
    if (dashboardError) {
      return (
        <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '1rem 1.25rem', background: '#fce8e6', color: '#c5221f', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textAlign: 'center' }}>
          {dashboardError}
        </div>
      );
    }
    if (!dashboardData) return null;

    const isBusiness = dashboardData.account_type === 'business';
    const ordersList = isBusiness ? dashboardData.company_orders : dashboardData.recent_orders;

    return (
      <div 
        style={{ 
          padding: '2.5rem 2rem', 
          textAlign: 'left', 
          maxWidth: '800px', 
          margin: '2rem auto', 
          background: '#ffffff', 
          color: '#000000',
          borderRadius: '12px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '2px solid #eaeaea', paddingBottom: '1rem' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', margin: 0 }}>
            {isBusiness ? t('reseller.companyPortal') : t('reseller.privatePortal')}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ padding: '4px 10px', background: '#e6f4ea', color: '#0d7a5f', fontSize: '12px', fontWeight: 700, borderRadius: '20px', textTransform: 'uppercase' }}>
              {dashboardData.account_type} {isBusiness && `(${dashboardData.role})`}
            </span>
            <button
              onClick={handleLogout}
              style={{ padding: '6px 14px', background: '#f4f4f4', border: '1px solid #ccc', color: '#333', fontSize: '13px', fontWeight: 600, borderRadius: '6px', cursor: 'pointer' }}
            >
              {t('reseller.signOut')}
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '1rem' }}>
            {isBusiness ? t('reseller.companyOrders') : t('reseller.recentOrders')}
          </h3>

          {(!ordersList || ordersList.length === 0) ? (
            <p style={{ color: '#666', fontSize: '15px' }}>
              {isBusiness ? t('reseller.noCompanyHistory') : t('reseller.noOrdersYet')}
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', color: '#555', fontSize: '13px', borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '10px 12px' }}>{t('reseller.orderId')}</th>
                    {isBusiness && <th style={{ padding: '10px 12px' }}>{t('reseller.poNumber')}</th>}
                    <th style={{ padding: '10px 12px' }}>{t('reseller.total')}</th>
                    <th style={{ padding: '10px 12px' }}>{t('reseller.payment')}</th>
                    <th style={{ padding: '10px 12px' }}>{t('reseller.fulfillment')}</th>
                    <th style={{ padding: '10px 12px' }}>{t('reseller.date')}</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersList.map((order) => (
                    <tr key={order.id} style={{ borderBottom: '1px solid #eee', fontSize: '14px' }}>
                      <td style={{ padding: '12px', fontWeight: 600, color: '#000' }}>#{order.id}</td>
                      {isBusiness && (
                        <td style={{ padding: '12px', color: '#333' }}>
                          {order.po_number || t('reseller.notAvailable')}
                        </td>
                      )}
                      <td style={{ padding: '12px', color: '#333' }}>{order.total_amount} {order.currency}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          padding: '3px 8px', 
                          borderRadius: '4px', 
                          fontSize: '12px', 
                          fontWeight: 600,
                          background: order.payment_status === 'paid' ? '#e6f4ea' : '#fef7e0',
                          color: order.payment_status === 'paid' ? '#137333' : '#b06000'
                        }}>
                          {t(`reseller.status.${order.payment_status}`, { defaultValue: order.payment_status })}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          padding: '3px 8px', 
                          borderRadius: '4px', 
                          fontSize: '12px', 
                          fontWeight: 600,
                          background: order.fulfillment_status === 'processing' ? '#e8f0fe' : '#f1f3f4',
                          color: order.fulfillment_status === 'processing' ? '#1967d2' : '#3c4043'
                        }}>
                          {t(`reseller.status.${order.fulfillment_status}`, { defaultValue: order.fulfillment_status })}
                        </span>
                      </td>
                      <td style={{ padding: '12px', color: '#777', fontSize: '13px' }}>{order.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 2rem', textAlign: 'center', maxWidth: '550px', margin: '2rem auto', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '0.5rem', color: '#000000', fontWeight: 700 }}>
        {t('reseller.title')}
      </h2>
      <p style={{ fontSize: '15px', color: '#555', marginBottom: '2rem', lineHeight: '1.5' }}>
        {t('reseller.subtitle')}
      </p>

      <div style={{ textAlign: 'left', background: '#fafafa', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e0e0e0', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000000', marginBottom: '1rem' }}>
          {t('reseller.signInTitle')}
        </h3>

        {loginError && (
          <div style={{ padding: '10px 12px', marginBottom: '1rem', background: '#fce8e6', color: '#c5221f', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>
            {loginError}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#000000' }}>
              {t('reseller.emailLabel')} *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              {t('reseller.passwordLabel')} *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            disabled={loadingLogin}
            style={{ 
              marginTop: '0.5rem', 
              padding: '12px', 
              width: '100%', 
              cursor: 'pointer',
              background: '#0d7a5f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '16px',
              opacity: loadingLogin ? 0.7 : 1
            }}
          >
            {loadingLogin ? t('reseller.signingIn') : t('reseller.signInBtn')}
          </button>
        </form>
      </div>

      <div>
        <button 
          onClick={() => navigate('/contact')}
          style={{ 
            padding: '14px', 
            width: '100%', 
            cursor: 'pointer', 
            background: 'transparent', 
            color: '#0d7a5f', 
            border: '2px solid #0d7a5f', 
            borderRadius: '8px', 
            fontWeight: 600, 
            fontSize: '16px',
            transition: 'all 0.2s'
          }}
        >
          {t('reseller.option2')}
        </button>
      </div>
    </div>
  );
}