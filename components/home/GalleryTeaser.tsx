'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const photos = [
  { src: '/assets/img/schluesselfertig_02_klein.jpg', label: 'Neubau', span: 'col' },
  { src: '/assets/img/fassadensanierung_01_klein.jpg', label: 'Fassadensanierung', span: '' },
  { src: '/assets/img/gewerbe_04_klein.jpg', label: 'Gewerbebau', span: '' },
  { src: '/assets/img/erdarbeiten_01_klein.jpg', label: 'Erdarbeiten', span: '' },
  { src: '/assets/img/ener_referenzen_01_klein.jpg', label: 'Energiesanierung', span: '' },
  { src: '/assets/img/umbauten_01_gross.jpg', label: 'Umbau', span: 'col' },
];

export default function GalleryTeaser() {
  return (
    <section style={{ background: '#0A0A0A', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <RevealOnScroll>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Unsere Projekte
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}>
                Von der Idee<br />zum Gebäude.
              </h2>
            </div>
            <Link
              href="/referenzen"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#D4192B',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              Alle Referenzen
              <ArrowRight size={16} />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '12px',
        }}>
          {photos.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div
                className="gallery-item"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: i === 0 || i === 5 ? '4/3' : '3/2',
                  background: '#1C1C1E',
                  gridColumn: i === 0 ? 'span 2' : i === 5 ? 'span 2' : 'span 1',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {p.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
