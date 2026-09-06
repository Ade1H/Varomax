import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav 
      className="navbar"
      style={{
        background: `
          linear-gradient(135deg, rgba(17, 52, 104, 0.95), rgba(15, 32, 67, 0.98)),
          url('/back2.jpeg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        borderBottom: '1px solid rgba(42, 90, 154, 0.3)',
        boxShadow: '0 4px 20px rgba(5, 12, 24, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}
    >
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img 
          src="/loogo.png" 
          alt="Varomax Logo" 
          style={{ 
            height: '100px', 
            width: '150px', 
            objectFit: 'contain',
            borderRadius: '400px',
            
            
          }} 
        />
      </Link>
      <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/Home" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
        <Link to="/vs-viagra" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', transition: 'color 0.2s' }}>Varomax vs Viagra</Link>
        <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', transition: 'color 0.2s' }}>Shop</Link>
        <Link to="/checkout" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', transition: 'color 0.2s' }}>Checkout</Link>
        <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', transition: 'color 0.2s' }}>About</Link>
      </div>
      <Link 
        to="/Cart" 
        className="cart" 
        style={{ 
          textDecoration: 'none', 
          color: '#fff', 
          background: 'rgba(26, 58, 107, 0.6)', 
          border: '1px solid rgba(42, 90, 154, 0.6)', 
          padding: '0.5rem 1rem', 
          borderRadius: '6px',
          fontWeight: '500',
          backdropFilter: 'blur(4px)'
        }}
      >
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
}