'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const highlights = [
  'Familienunternehmen in dritter Generation',
  'Markus Buck – Bauingenieur (FH), Energieberater & Sachverständiger',
  '12 qualifizierte Mitarbeiter vor Ort',
  'Massivbauweise als Standard',
  'Regionaler Spezialist für Biberach & Umgebung',
];

export default function AboutTeaser() {
  return (
    <section style={{ background: '#F5F5F7', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'center',
      }}>

        {/* Image collage */}
        <RevealOnScroll>
          <div style={{ position: 'relative', paddingBottom: '3rem', paddingRight: '3rem' }}>
            {/* Main image */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
              aspectRatio: '4/3',
              background: '#ddd',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/schluesselfertig_01_klein.jpg"
                alt="Buck Bauunternehmen – Neubau"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Second image overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '55%',
              aspectRatio: '4/3',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              border: '4px solid #F5F5F7',
              background: '#ddd',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/erweiterungen_02_klein.jpg"
                alt="Buck Bauunternehmen – Erweiterung"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-1rem',
              background: '#D4192B',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(212,25,43,0.35)',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>1920</div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '3px' }}>Gegründet</div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Text */}
        <RevealOnScroll delay={150}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Über uns</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#1D1D1F',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}>
              Ein erfolgreiches Familienunternehmen.
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: '2rem',
              fontWeight: 400,
            }}>
              Unser inhabergeführtes Unternehmen mit Sitz in Biberach-Stafflangen wurde 1920 von Franz Buck gegründet. Heute führt Markus Buck das Unternehmen in dritter Generation — mit dem gleichen Anspruch an Qualität und handwerkliche Präzision.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>
                  <div style={{ width: '22px', height: '22px', background: 'rgba(212,25,43,0.1)', border: '1px solid rgba(212,25,43,0.25)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <Check size={12} color="#D4192B" />
                  </div>
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/ueber-uns"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                background: '#1D1D1F',
                color: '#fff',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#333'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1D1D1F'; }}
            >
              Mehr über uns
              <ArrowRight size={15} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
