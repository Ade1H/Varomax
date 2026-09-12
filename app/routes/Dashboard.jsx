import React, { useEffect, useState } from 'react';

export function meta() {
  return [
    {
      title: "Client Portal & Dashboard | Varomax",
    },
    {
      name: "description",
      content:
        "Access your Varomax dashboard to view purchase history, manage account settings, and track order fulfillment.",
    },
    {
      name: "robots",
      content: "noindex, follow",
    },
  ];
}

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('auth_token');

      if (!token) {
        setError('You are not signed in.');
        setLoading(false);
        return;
      }

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

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('account_type');
    localStorage.removeItem('user_id');
    window.location.href = '/reseller';
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">Loading portal...</div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-red-50 text-red-700 rounded">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-yellow-50 text-yellow-800 rounded">
        No dashboard data available.
      </div>
    );
  }

  // Treat both 'business' and 'reseller' as company accounts
  const isBusiness =
    data.account_type === 'business' || data.account_type === 'reseller';

  const ordersList = isBusiness
    ? data.company_orders || []
    : data.recent_orders || [];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {isBusiness ? 'Company Business Portal' : 'Private Customer Portal'}
        </h2>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full uppercase">
            {data.account_type} {isBusiness && data.role && `(${data.role})`}
          </span>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {isBusiness ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Company Orders</h3>
          {ordersList.length === 0 ? (
            <p className="text-gray-500">No company purchase history found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm">
                    <th className="p-3 border-b">Order ID</th>
                    <th className="p-3 border-b">PO Number</th>
                    <th className="p-3 border-b">Total</th>
                    <th className="p-3 border-b">Payment</th>
                    <th className="p-3 border-b">Fulfillment</th>
                    <th className="p-3 border-b">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersList.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 text-sm">
                      <td className="p-3 border-b font-medium">#{order.id}</td>
                      <td className="p-3 border-b">{order.po_number || 'N/A'}</td>
                      <td className="p-3 border-b">
                        {order.total_amount} {order.currency}
                      </td>
                      <td className="p-3 border-b">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.payment_status === 'paid'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {order.payment_status}
                        </span>
                      </td>
                      <td className="p-3 border-b">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.fulfillment_status === 'processing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {order.fulfillment_status}
                        </span>
                      </td>
                      <td className="p-3 border-b text-gray-400">
                        {order.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
          {ordersList.length === 0 ? (
            <p className="text-gray-500">You haven't placed any orders yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm">
                    <th className="p-3 border-b">Order ID</th>
                    <th className="p-3 border-b">Total</th>
                    <th className="p-3 border-b">Payment</th>
                    <th className="p-3 border-b">Fulfillment</th>
                    <th className="p-3 border-b">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersList.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 text-sm">
                      <td className="p-3 border-b font-medium">#{order.id}</td>
                      <td className="p-3 border-b">
                        {order.total_amount} {order.currency}
                      </td>
                      <td className="p-3 border-b">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.payment_status === 'paid'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {order.payment_status}
                        </span>
                      </td>
                      <td className="p-3 border-b">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.fulfillment_status === 'processing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {order.fulfillment_status}
                        </span>
                      </td>
                      <td className="p-3 border-b text-gray-400">
                        {order.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}