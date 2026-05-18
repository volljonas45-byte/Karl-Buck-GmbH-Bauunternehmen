'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const sections = [
  {
    tag: 'Neubau',
    title: 'Ihr massives Traumhaus — schlüsselfertig.',
    text: 'Von der Bodenplatte bis zur Schlüsselübergabe. Massivbauweise, moderne Haustechnik, energieeffiziente Standards und Gewerbebau — alles aus einer Hand.',
    points: ['Schlüsselfertig Bauen', 'Energieeffizient Bauen (KfW/BAFA)', 'Gewerbebau & Hallen'],
    href: '/leistungen/neubau',
    img: '/assets/img/schluesselfertig_02_klein.jpg',
    imgLeft: true,
    dark: false,
  },
  {
    tag: 'Sanierung',
    title: 'Fachgerecht sanieren & wertsteigern.',
    text: 'Feuchtigkeitsschäden, Schimmel, Energieverluste — wir sanieren Ihr Gebäude nachhaltig. Mit Förderberatung für KfW- und BAFA-Programme inklusive.',
    points: ['Trockenlegen & Bautenschutz', 'Schimmelsanierung', 'Fassaden- & Kellerabdichtung'],
    href: '/leistungen/sanierung',
    img: '/assets/img/fassadensanierung_01_klein.jpg',
    imgLeft: false,
    dark: false,
  },
  {
    tag: 'Umbau & Erweiterung',
    title: 'Wenn das Haus zu klein wird.',
    text: 'Träume erfüllen — Werte erhalten. Anbauten, Aufstockungen, Garagenbau und Außenanlagen. Kompetente Planung und zuverlässige Ausführung aus einer Hand.',
    points: ['Erweiterungen & Anbauten', 'Mauerwerksstabilisierung', 'Garagen & Außenanlagen'],
    href: '/leistungen/umbau',
    img: '/assets/img/umbauten_01_gross.jpg',
    imgLeft: true,
    dark: true,
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Leistungen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Alles aus einer Hand.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Neubau, Sanierung oder Umbau — Buck GmbH bietet das komplette Leistungsspektrum für Ihr Bauprojekt in der Region Biberach.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={i}
          style={{
            background: s.dark ? '#111827' : (i % 2 === 0 ? '#FFFFFF' : '#F5F5F7'),
            padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)',
            borderTop: s.dark ? 'none' : '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
              direction: s.imgLeft ? 'ltr' : 'rtl',
            }}>
              {/* Image */}
              <RevealOnScroll delay={50}>
                <div style={{ direction: 'ltr', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', aspectRatio: '4/3', background: '#ddd' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </RevealOnScroll>

              {/* Text */}
              <RevealOnScroll delay={100}>
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{s.tag}</span>
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    fontWeight: 700,
                    color: s.dark ? '#fff' : '#1D1D1F',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    marginBottom: '1.25rem',
                  }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: '16px', color: s.dark ? 'rgba(255,255,255,0.55)' : '#6B7280', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {s.text}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {s.points.map((p, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: s.dark ? 'rgba(255,255,255,0.7)' : '#374151' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4192B', flexShrink: 0 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 26px',
                      background: '#D4192B',
                      color: '#fff',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#A8121F'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#D4192B'; }}
                  >
                    Mehr erfahren
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
