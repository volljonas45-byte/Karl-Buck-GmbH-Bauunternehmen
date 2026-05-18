'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const leistungen = [
  {
    tag: 'Neubau',
    title: 'Schlüsselfertig ins Eigenheim',
    text: 'Massivbauweise, Haustechnik, Energiestandard — von der Bodenplatte bis zur Schlüsselübergabe.',
    img: '/assets/img/schluesselfertig_02_klein.jpg',
    href: '/leistungen/neubau',
  },
  {
    tag: 'Sanierung',
    title: 'Energetisch sanieren & wertsteigern',
    text: 'Trockenlegen, Schimmel, Fassade und Dämmung — fachgerecht, mit staatlicher Förderberatung.',
    img: '/assets/img/fassadensanierung_01_klein.jpg',
    href: '/leistungen/sanierung',
  },
  {
    tag: 'Umbau',
    title: 'Erweitern, umbauen, stabilisieren',
    text: 'Wenn das Haus zu klein wird. Anbauten, Erweiterungen, Garagen und Außenanlagen.',
    img: '/assets/img/umbauten_01_gross.jpg',
    href: '/leistungen/umbau',
  },
];

export default function LeistungenGrid() {
  return (
    <section style={{ background: '#111827', padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <RevealOnScroll>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Leistungen
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}>
                Alles aus einer Hand —<br />seit 1920.
              </h2>
            </div>
            <Link
              href="/leistungen"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >
              Alle Leistungen
              <ArrowRight size={16} />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {leistungen.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <Link
                href={item.href}
                style={{
                  display: 'block',
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '3/2',
                  textDecoration: 'none',
                  background: '#1C1C1E',
                }}
                onMouseEnter={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLElement;
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.tag}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)',
                }} />

                {/* Red top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: '#D4192B',
                }} />

                {/* Content */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.75rem 1.75rem 1.75rem',
                }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#D4192B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {item.text}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px' }}>
                    Mehr erfahren
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
