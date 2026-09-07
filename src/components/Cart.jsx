import { Link } from 'react-router-dom';

export default function Cart({ cart, totalItems, totalPrice, handleDecrease, handleAddToCart, handleRemove }) {
  return (
    <div 
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(13, 122, 95, 0.05), rgba(79, 195, 247, 0.03))',
        borderTop: '2px solid rgba(13, 122, 95, 0.3)',
        borderBottom: '2px solid rgba(13, 122, 95, 0.3)',
        textAlign: 'left'
      }}
    >
      <h3 style={{
        fontSize: '22px',
        fontWeight: 600,
        color: '#000202ff',
        margin: '0 0 1rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
         Your cart ({totalItems} items)
      </h3>

      {cart.length === 0 ? (
        <p style={{
          color: 'var(--text)',
          fontSize: '16px',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1rem 0'
          }}>
            {cart.map(item => (
              <li 
                key={item.id} 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <span style={{
                  fontWeight: 500,
                  color: 'var(--text-h)',
                  flex: '1 1 150px'
                }}>
                  {item.name} ({item.packSize})
                </span>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <button 
                    onClick={() => handleDecrease(item.id)} 
                    style={{
                      background: 'var(--code-bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-h)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 600
                    }}
                  >
                    −
                  </button>

                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-h)',
                    minWidth: '24px',
                    textAlign: 'center'
                  }}>
                    {item.quantity}
                  </span>

                  <button 
                    onClick={() => handleAddToCart(item)} 
                    style={{
                      background: 'var(--code-bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-h)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 600
                    }}
                  >
                    +
                  </button>

                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontWeight: 600,
                    minWidth: '70px',
                    textAlign: 'right',
                    color: '#0d7a5f',
                    fontSize: '16px'
                  }}>
                    ฿{item.price * item.quantity}
                  </span>

                  <button 
                    onClick={() => handleRemove(item.id)} 
                    style={{
                      background: 'transparent',
                      color: '#ef9a9a',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      padding: '4px 8px'
                    }}
                  >
                    ✕ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '2px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <strong style={{
              fontSize: '20px',
              color: 'var(--text-h)'
            }}>
              Total to pay:{' '}
              <span style={{
                color: '#0d7a5f',
                fontSize: '24px'
              }}>
                ฿{totalPrice}
              </span>
            </strong>

            <Link 
              to="/checkout" 
              style={{
                background: 'linear-gradient(135deg, #1a3a6b, #2a5a9a)',
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                display: 'inline-block'
              }}
            >
              💳 Proceed to checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}