import { useState } from 'react';

export default function ComparePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Varomax added to your cart!');
  };

  return (
    <div style={{
      background: '#f8f9fa',
      minHeight: '100vh',
      color: '#1a1a2e',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Banner - Buy 2 Get 1 Free */}
    {/* <div style={{
  background: 'rgba(7, 72, 43, 0.25)',
  color: '#ffffff',
  textAlign: 'center',
  padding: '0.75rem',
  borderRadius: '50px',
  marginBottom: '1.5rem',
  fontWeight: 600,
  fontSize: '14px',
  border: '1px solid rgba(45, 106, 79, 0.5)',
  backdropFilter: 'blur(10px)'
}}>
  Buy 2, get 1 free · Free worldwide shipping over €100
</div> */}

        {/* Hero Section */}
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#2e211aff',
            lineHeight: '1.2'
          }}>
            Varomax <span >vs</span> Viagra
          </h1>
        </header>

        {/* Introduction */}
        <section style={{ marginBottom: '2.5rem' }}>
          <p style={{ lineHeight: '1.6', color: '#495057', fontSize: '0.95rem' }}>
            If you are weighing up Varomax against Viagra, here is the honest starting point.
            Viagra is a prescription medicine (the active drug is sildenafil). Varomax is a natural, 
            herbal food supplement you can buy without a prescription. They are not the same thing, 
            and one does not replace the other.
          </p>
          <p style={{ lineHeight: '1.6', color: '#495057', marginTop: '1rem', fontSize: '0.95rem' }}>
            What Varomax offers is a natural route for men who would rather skip the synthetic, 
            prescription path, with support for both firmer erections and lasting longer. Below is a straight side by side, then where each one actually makes sense.
          </p>
        </section>

        {/* Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {['Thai-FDA Registered', '100% Herbal', 'Lab-Tested', '60-Day Money-Back'].map((badge, i) => (
            <span key={i} style={{
              background: '#ffffff',
              border: '1px solid #e9ecef',
              color: '#1a1a2e',
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Main Comparison Table */}
      <div style={{
  overflowX: 'auto',
  marginBottom: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  borderRadius: '20px'
}}>
  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    background: 'rgba(11, 49, 38, 0.95)',
    borderRadius: '20px',
    overflow: 'hidden',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }}>
    <thead>
      <tr style={{ background: 'rgba(16, 77, 60, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, color: '#ffffff' }}>Feature</th>
        <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700, color: '#81c784' }}>Varomax</th>
        <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700, color: '#ffffff' }}>Viagra</th>
      </tr>
    </thead>
    <tbody>
      {[
        ['Skip the prescription entirely', 'Yes', 'No'],
        ['Last longer, not just get hard', 'Yes', 'No'],
        ['Stay natural, no synthetic drug', 'Yes', 'No'],
        ['Discreet, no doctor\'s appointment', 'Yes', 'Sort of'],
        ['Keep the cost down', 'from €22', 'Rx + visit'],
        ['A clinically proven medicine', 'No', 'Yes']
      ].map((row, i) => (
        <tr key={i} style={{ borderBottom: i < 5 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none' }}>
          <td style={{ padding: '0.8rem 1rem', fontWeight: 500, textAlign: 'left', color: '#ffffff' }}>{row[0]}</td>
          <td style={{ padding: '0.8rem 1rem', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              background: row[1] === 'Yes' ? 'rgba(129, 199, 132, 0.25)' : 'transparent',
              color: row[1] === 'Yes' ? '#81c784' : 'rgba(255, 255, 255, 0.7)',
              fontWeight: row[1] === 'Yes' ? 700 : 400,
              padding: row[1] === 'Yes' ? '4px 12px' : 0,
              borderRadius: '20px'
            }}>
              {row[1]}
            </span>
          </td>
          <td style={{ padding: '0.8rem 1rem', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              background: row[2] === 'Yes' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              color: row[2] === 'Yes' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
              fontWeight: row[2] === 'Yes' ? 600 : 400,
              padding: row[2] === 'Yes' ? '4px 12px' : 0,
              borderRadius: '20px'
            }}>
              {row[2]}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Key Message Box */}
        <div style={{
          background: '#ffffff',
          borderLeft: '4px solid #2d6a4f',
          borderTop: '1px solid #e9ecef',
          borderRight: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef',
          padding: '1.5rem',
          borderRadius: '16px',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <p style={{ margin: 0, lineHeight: '1.7', color: '#495057' }}>
            <strong style={{ color: '#1a1a2e' }}>Viagra wins on one thing:</strong> it is a clinically proven prescription drug, and that is no small thing. 
            If that is exactly what you want, see your GP. But if you want the natural route, no prescription, support for 
            lasting longer, discreet delivery, and easier on the wallet, Varomax is built for you.
          </p>
        </div>

        {/* How Varomax Works */}
      <section style={{
  background: 'rgba(11, 49, 38, 0.95)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '2.5rem 2rem',
  marginBottom: '2.5rem',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden'
}}>
  <h2 style={{ 
    color: '#ffffff', 
    marginBottom: '2rem', 
    fontWeight: 700,
    fontSize: '1.75rem'
  }}>How Varomax works</h2>
  
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  }}>
    {[
      { title: 'Sublingual', desc: 'Dissolves under the tongue, skipping digestion.' },
      { title: 'Works in ~30 min', desc: 'Faster than a capsule you swallow.' },
      { title: 'Supports flow & stamina', desc: 'Herbal extracts support blood flow and lasting longer.' }
    ].map((item, i) => (
      <div key={i} style={{ 
        background: 'rgba(16, 77, 60, 0.6)', 
        padding: '1.5rem', 
        borderRadius: '16px', 
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.3s ease'
      }}>
        <h4 style={{ 
          marginBottom: '0.5rem', 
          color: '#81c784',  // Green accent like Varomax header
          fontWeight: 700,
          fontSize: '1.1rem'
        }}>{item.title}</h4>
        <p style={{ 
          fontSize: '0.95rem', 
          color: 'rgba(255, 255, 255, 0.8)', 
          margin: 0,
          lineHeight: 1.5
        }}>{item.desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* Viagra Not Your Only Option */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1a1a2e', marginBottom: '1rem', fontWeight: 700 }}>Viagra is not your only option</h2>
          <p style={{ lineHeight: '1.7', color: '#495057' }}>
            Viagra pulled off something clever. It convinced a whole generation that one little blue pill is the only answer, 
            so most men never look past it. It is a good medicine. It is also a synthetic, prescription-only drug that does a 
            single job: erections.
          </p>
          <p style={{ lineHeight: '1.7', color: '#495057', marginTop: '1rem' }}>
            There is another way. A natural, no-prescription option that supports firmer erections and helps you last longer, 
            working with your own physiology instead of a prescription pad. If you would rather skip the doctor and the 
            synthetic drug, that is Varomax.
          </p>
        </section>

        {/* Pricing Options */}
        <section style={{
  background: 'rgba(11, 49, 38, 0.95)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  marginBottom: '2.5rem',
  textAlign: 'center',
  overflow: 'hidden'
}}>
  <h2 style={{ 
    color: '#ffffff', 
    marginBottom: '1.5rem', 
    fontWeight: 700 
  }}>Try the natural route</h2>
  
  <p style={{ 
    color: 'rgba(255, 255, 255, 0.8)', 
    marginBottom: '2rem',
    fontSize: '1rem',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}>
    Pick your pack. Same Varomax either way, herbal support for firmer erections and lasting longer. 
    No prescription, discreet delivery.
  </p>
  
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto'
  }}>
    <div style={{
      borderRadius: '16px',
      padding: '1.5rem',
      position: 'relative',
      background: 'rgba(16, 77, 60, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.15)'
    }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '0.5rem', 
        color: '#81c784', 
        fontWeight: 700 
      }}>10-pack</h3>
      <p style={{ 
        fontSize: '2rem', 
        fontWeight: 800, 
        color: '#81c784', 
        margin: '0.5rem 0' 
      }}>€40</p>
      <p style={{ 
        fontSize: '0.9rem', 
        color: 'rgba(255, 255, 255, 0.7)' 
      }}>€4.00 per lozenge, save 27%</p>
    </div>
  </div>
  
  <p style={{ 
    fontSize: '0.9rem', 
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '1.5rem',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}>
    Both packs support firmer erections and help you last longer, something a blue pill does not.
  </p>
</section>
        {/* Medical Disclaimer */}
        <div style={{
          background: '#ffffff',
          borderLeft: '4px solid #f39c12',
          borderTop: '1px solid #e9ecef',
          borderRight: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef',
          padding: '1.5rem',
          borderRadius: '16px',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#495057', lineHeight: '1.7' }}>
            <strong style={{ color: '#1a1a2e' }}>One honest point.</strong> Viagra is a clinically proven prescription medicine. Varomax is a food supplement 
            that supports your own physiology, not a drug, and not a substitute for medical care. If your ED came on suddenly 
            or will not shift, see a GP first, as it can be an early warning for heart or circulation problems.
          </p>
        </div>

        {/* FAQ Section */}
       <section style={{
  background: 'rgba(11, 49, 38, 0.95)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '1.75rem',
  marginBottom: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden'
}}>
  <h2 style={{ 
    fontSize: '1.25rem', 
    color: '#ffffff', 
    marginBottom: '1.5rem', 
    fontWeight: 700 
  }}>
    Varomax vs Viagra: your questions
  </h2>

  {[
    {
      q: 'Is Varomax the same as Viagra?',
      a: 'No. Viagra is a prescription medicine (sildenafil); Varomax is a herbal food supplement. Different categories, different ingredients, bought in different ways. Varomax is the no-prescription, natural option.'
    },
    {
      q: 'Can I take Varomax instead of Viagra?',
      a: 'Varomax is a supplement, not a substitute for a medicine a doctor has prescribed. If you have been prescribed Viagra, follow that advice. If you are choosing a natural option without a prescription, Varomax is a reasonable starting point. Do not swap or combine prescribed medicines without speaking to your doctor.'
    },
    {
      q: 'Is Varomax a natural Viagra?',
      a: '"Natural Viagra" is a popular phrase, but it is not accurate in the strict sense: Varomax is a herbal supplement, not sildenafil. It supports erections and stamina naturally rather than acting as a synthetic drug. The appeal is the natural, no-prescription route, not a copy of the medicine.'
    },
    {
      q: 'Can I take Varomax and Viagra together?',
      a: 'Do not combine a supplement with a prescription ED medicine without talking to your doctor or pharmacist first. This matters most if you take nitrates or blood-pressure medication, or have a heart condition.'
    },
    {
      q: 'Is it safe with heart or blood-pressure medication?',
      a: 'Check with your doctor or pharmacist first. Varomax is a food supplement rather than a medicine, but ingredients that support blood flow can still matter when you are on cardiovascular medication. When in doubt, ask before you start.'
    }
  ].map((faq, index) => (
    <div key={index} style={{
      borderBottom: index < 4 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
      padding: '1rem 0'
    }}>
      <button
        onClick={() => toggleFaq(index)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '0.5rem 0',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#81c784'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
      >
        {faq.q}
        <span style={{ 
          fontSize: '1.2rem', 
          color: '#81c784',
          fontWeight: 700
        }}>
          {activeFaq === index ? '−' : '+'}
        </span>
      </button>
      {activeFaq === index && (
        <div style={{
          padding: '0.5rem 0 0.5rem 1rem',
          color: 'rgba(255, 255, 255, 0.85)',
          lineHeight: '1.7',
          borderLeft: '3px solid #81c784',
          marginTop: '0.5rem',
          background: 'rgba(16, 77, 60, 0.4)',
          borderRadius: '0 8px 8px 0',
          fontSize: '0.95rem'
        }}>
          {faq.a}
        </div>
      )}
    </div>
  ))}
</section>

        {/* Footer Disclaimer */}
        <footer style={{
          fontSize: '0.8rem',
          color: '#6c757d',
          textAlign: 'center',
          borderTop: '1px solid #e9ecef',
          paddingTop: '1.5rem',
          lineHeight: '1.6'
        }}>
          <p>
            Food supplement. Not intended to diagnose, treat, cure or prevent any disease. 
            Consult a healthcare professional before use, especially if you have a cardiovascular condition 
            or take nitrate medication.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Viagra is a registered trademark of Pfizer Inc. Varomax is not affiliated with, endorsed by, 
            or connected to Pfizer.
          </p>
        </footer>
      </div>
    </div>
  );
}