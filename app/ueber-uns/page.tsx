import { Check } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CtaBanner from '@/components/home/CtaBanner';

const timeline = [
  { year: '1920', title: 'Gründung durch Franz Buck', text: 'Franz Buck gründet das Bauunternehmen in Biberach-Stafflangen. Handwerk, Qualität und Verlässlichkeit sind von Anfang an die Grundwerte des Unternehmens.' },
  { year: '~1960', title: 'Karl Buck übernimmt die Führung', text: 'Karl Buck führt das Unternehmen in zweiter Generation weiter und baut den Kundenstamm in der Region Biberach konsequent aus.' },
  { year: '1994', title: 'Markus Buck — dritte Generation', text: 'Markus Buck, Bauingenieur (FH), Energieberater und Sachverständiger, übernimmt die Leitung und modernisiert das Unternehmen für die Anforderungen der Zukunft.' },
  { year: 'Heute', title: 'Stark aufgestellt & regional verwurzelt', text: 'Mit 12 qualifizierten Mitarbeitern und jahrzehntelanger Erfahrung ist Buck GmbH einer der verlässlichsten Baupartner in der Region Biberach.' },
];

const values = [
  { title: 'Massivbauweise', text: 'Wir bauen solide — mit bewährten Materialien und präziser Ausführung.' },
  { title: 'Energieeffizienz', text: 'Zukunftsfähige Standards, staatliche Förderung optimal nutzen.' },
  { title: 'Regionalität', text: 'Wir sind aus der Region und kennen die lokalen Anforderungen.' },
  { title: 'Sachverstand', text: 'Markus Buck ist geprüfter Sachverständiger und Energieberater.' },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`,
          background: '#111827',
          borderBottom: '3px solid #D4192B',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Über uns</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Ein erfolgreiches<br />Familienunternehmen.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Drei Generationen, ein Anspruch: solide Bauqualität und persönlicher Service in Biberach und Umgebung.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.03em', marginBottom: '3.5rem' }}>
              Unsere Geschichte
            </h2>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1px 1fr',
                    gap: '0 2rem',
                    paddingBottom: i < timeline.length - 1 ? '2.5rem' : '0',
                  }}
                >
                  {/* Year */}
                  <div style={{ textAlign: 'right', paddingTop: '4px' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: '#D4192B', letterSpacing: '-0.02em' }}>{item.year}</span>
                  </div>
                  {/* Line + dot */}
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '1px', background: 'rgba(0,0,0,0.1)', position: 'absolute', top: 0, bottom: 0 }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D4192B', position: 'relative', zIndex: 1, marginTop: '5px', flexShrink: 0 }} />
                  </div>
                  {/* Content */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1D1D1F', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.75, fontWeight: 400 }}>{item.text}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#F5F5F7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Unsere Werte</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.03em' }}>
                Was uns ausmacht
              </h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={{ padding: '2rem', background: '#FFFFFF', height: '100%', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '32px', height: '32px', background: 'rgba(212,25,43,0.08)', border: '1px solid rgba(212,25,43,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                    <Check size={16} color="#D4192B" />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1D1D1F', marginBottom: '0.6rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7, fontWeight: 400 }}>{v.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Geschäftsführer */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <RevealOnScroll>
            <div style={{ width: '80px', height: '80px', background: 'rgba(212,25,43,0.08)', border: '2px solid rgba(212,25,43,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem', fontWeight: 800, color: '#D4192B' }}>
              MB
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              Markus Buck
            </h2>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Geschäftsführer · Bauingenieur (FH) · Energieberater · Sachverständiger
            </p>
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8, fontWeight: 400 }}>
              Als Ihr persönlicher Ansprechpartner bei allen Fragen des Bauens und Sanierens stehe ich Ihnen mit Fachwissen und Erfahrung zur Seite. Wir freuen uns, Sie als Kunden begrüßen zu dürfen.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
