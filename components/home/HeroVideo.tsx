'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0A0A0A',
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/img/schluesselfertig_02_klein.jpg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.45,
        }}
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, #0A0A0A, transparent)',
        }}
      />

      {/* Red bottom accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#D4192B', zIndex: 2 }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          paddingTop: '120px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: '32px', height: '2px', background: '#D4192B', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Biberach-Stafflangen · Seit 1920
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 9vw, 7.5rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
            maxWidth: '820px',
          }}
        >
          WIR BAUEN.{' '}
          <span style={{ color: '#D4192B' }}>MASSIV.</span>
          <br />
          SEIT 1920.
        </h1>

        {/* Subline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.7,
            maxWidth: '500px',
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          Familienunternehmen in dritter Generation. Massivbauweise, Energiesanierung und handwerkliche Präzision.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/leistungen"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: '#D4192B',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#A8121F'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#D4192B'; }}
          >
            Leistungen entdecken
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/kontakt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'background 0.2s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
          >
            <Phone size={15} />
            Jetzt anfragen
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: 'clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }} />
          Scrollen
        </div>
      </div>
    </section>
  );
}
