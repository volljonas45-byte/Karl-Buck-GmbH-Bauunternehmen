'use client';

import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)',
    }}>
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/img/gewerbebau_gross.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,5,0.82)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Kostenlose Erstberatung
          </span>
          <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '1.2rem',
          maxWidth: '620px',
        }}>
          Ihr Bauprojekt beginnt mit einem Gespräch.
        </h2>

        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem', fontWeight: 300 }}>
          Wir beraten Sie gerne – unverbindlich und persönlich. Rufen Sie uns an oder schreiben Sie uns.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="tel:+4973515538"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              padding: '15px 32px',
              background: '#D4192B',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#A8121F'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#D4192B'; }}
          >
            <Phone size={16} />
            0 73 51 / 55 38-0
          </a>
          <Link
            href="/kontakt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              padding: '15px 32px',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
          >
            Kontaktformular
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
