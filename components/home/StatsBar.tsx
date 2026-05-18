import RevealOnScroll from '@/components/ui/RevealOnScroll';

const stats = [
  { value: '1920', label: 'Gegründet', sub: 'Franz Buck' },
  { value: '100+', label: 'Jahre Erfahrung', sub: 'Expertise' },
  { value: '12', label: 'Mitarbeiter', sub: 'Qualifiziert' },
  { value: '3.', label: 'Generation', sub: 'Markus Buck' },
  { value: 'Biberach', label: 'Heimat', sub: 'Stafflangen' },
];

export default function StatsBar() {
  return (
    <section style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0',
        }}>
          {stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem 1rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#D4192B',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.4rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)',
                  letterSpacing: '0.02em',
                  marginBottom: '2px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.28)',
                  letterSpacing: '0.06em',
                }}>
                  {stat.sub}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
