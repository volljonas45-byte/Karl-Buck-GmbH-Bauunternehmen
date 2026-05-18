'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CtaBanner from '@/components/home/CtaBanner';

type Kategorie = 'Alle' | 'Neubau' | 'Gewerbebau' | 'Sanierung' | 'Umbau';

const projekte: { tag: Kategorie; title: string; img: string }[] = [
  // Neubau / Schlüsselfertig
  { tag: 'Neubau', title: 'Einfamilienhaus — Schlüsselfertig', img: '/assets/img/schluesselfertig_01_klein.jpg' },
  { tag: 'Neubau', title: 'Modernes Wohnhaus', img: '/assets/img/schluesselfertig_02_klein.jpg' },
  { tag: 'Neubau', title: 'Energieeffizienzhaus KfW', img: '/assets/img/ener_referenzen_01_klein.jpg' },
  { tag: 'Neubau', title: 'Neubau Einfamilienhaus', img: '/assets/img/ener_referenzen_07_klein.jpg' },
  { tag: 'Neubau', title: 'Energetischer Neubau', img: '/assets/img/ener_referenzen_12_klein.jpg' },
  { tag: 'Neubau', title: 'Wohnhaus mit PV-Anlage', img: '/assets/img/ener_referenzen_13_klein.jpg' },
  { tag: 'Neubau', title: 'Einfamilienhaus Biberach', img: '/assets/img/ener_referenzen_14_klein.jpg' },

  // Gewerbebau
  { tag: 'Gewerbebau', title: 'Gewerbegebäude Biberach', img: '/assets/img/gewerbe_01_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Gewerbehalle Massivbau', img: '/assets/img/gewerbe_02_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Büro- und Betriebsgebäude', img: '/assets/img/gewerbe_03_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Produktionshalle', img: '/assets/img/gewerbe_04_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Gewerbeimmobilie', img: '/assets/img/gewerbe_05_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Lagerhalle Schlüsselfertig', img: '/assets/img/gewerbe_06_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Gewerbeprojekt Region Biberach', img: '/assets/img/gewerbe_07_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Betriebsgebäude Neubau', img: '/assets/img/gewerbe_08_klein.jpg' },
  { tag: 'Gewerbebau', title: 'Gewerbehalle Stahlbau', img: '/assets/img/gewerbe_09_klein.jpg' },

  // Sanierung
  { tag: 'Sanierung', title: 'Fassadensanierung Mehrfamilienhaus', img: '/assets/img/fassadensanierung_01_klein.jpg' },
  { tag: 'Sanierung', title: 'Fassade nach Komplettsanierung', img: '/assets/img/fassadensanierung_02_klein.jpg' },
  { tag: 'Sanierung', title: 'Fassadendämmung WDVS', img: '/assets/img/fassadensanierung_04_klein.jpg' },
  { tag: 'Sanierung', title: 'Keller- und Fundamentabdichtung', img: '/assets/img/fassadensanierung_05_klein.jpg' },
  { tag: 'Sanierung', title: 'Bautenschutz & Trockenlegen', img: '/assets/img/bautenschutz_01_klein.jpg' },
  { tag: 'Sanierung', title: 'Kellerabdichtung von innen', img: '/assets/img/bautenschutz_02_klein.jpg' },

  // Umbau & Außenanlagen
  { tag: 'Umbau', title: 'Anbau Einfamilienhaus', img: '/assets/img/umbauten_02_klein.jpg' },
  { tag: 'Umbau', title: 'Umbau und Erweiterung', img: '/assets/img/umbauten_06_klein.jpg' },
  { tag: 'Umbau', title: 'Erweiterungsbau Wohnhaus', img: '/assets/img/erweiterungen_02_klein.jpg' },
  { tag: 'Umbau', title: 'Geländemodellierung & Erdarbeiten', img: '/assets/img/erdarbeiten_01_klein.jpg' },
  { tag: 'Umbau', title: 'Außenanlagen Gestaltung', img: '/assets/img/erdarbeiten_02_klein.jpg' },
  { tag: 'Umbau', title: 'Einfahrt und Terrasse', img: '/assets/img/erdarbeiten_03_klein.jpg' },
  { tag: 'Umbau', title: 'Mauerwerkssanierung', img: '/assets/img/mauer_01_klein.jpg' },
  { tag: 'Umbau', title: 'Stützmauer und Einfriedung', img: '/assets/img/mauer_07_klein.jpg' },
  { tag: 'Umbau', title: 'Baumaßnahmen Außenbereich', img: '/assets/img/sonstig_bau_01_klein.jpg' },
];

const kategorien: Kategorie[] = ['Alle', 'Neubau', 'Gewerbebau', 'Sanierung', 'Umbau'];

const tagColor: Record<Kategorie, string> = {
  Alle: '#D4192B',
  Neubau: '#D4192B',
  Gewerbebau: '#D4192B',
  Sanierung: '#D4192B',
  Umbau: '#D4192B',
};

export default function ReferenzenPage() {
  const [aktiv, setAktiv] = useState<Kategorie>('Alle');

  const gefiltert = aktiv === 'Alle' ? projekte : projekte.filter(p => p.tag === aktiv);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Referenzen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Zufriedene Kunden<br />sprechen für uns.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Ausgewählte Projekte aus über 100 Jahren Baugeschichte — Neubau, Sanierung und Umbau in der Region Biberach.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Filter Tabs */}
          <RevealOnScroll>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              {kategorien.map(kat => (
                <button
                  key={kat}
                  onClick={() => setAktiv(kat)}
                  style={{
                    padding: '9px 22px',
                    borderRadius: '100px',
                    border: aktiv === kat ? '1.5px solid #D4192B' : '1.5px solid rgba(0,0,0,0.12)',
                    background: aktiv === kat ? '#D4192B' : 'transparent',
                    color: aktiv === kat ? '#fff' : '#374151',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.01em',
                  }}
                >
                  {kat}
                  {kat !== 'Alle' && (
                    <span style={{ marginLeft: '6px', fontSize: '11px', opacity: 0.75 }}>
                      ({projekte.filter(p => p.tag === kat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Photo Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {gefiltert.map((p, i) => (
              <RevealOnScroll key={`${p.img}-${i}`} delay={Math.min(i * 40, 240)}>
                <div
                  className="gallery-item"
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    cursor: 'default',
                    background: '#111',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                  }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#D4192B', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {p.tag}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                      {p.title}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={200}>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#9CA3AF', marginTop: '3.5rem' }}>
              {gefiltert.length} Projekte{aktiv !== 'Alle' ? ` in der Kategorie ${aktiv}` : ' insgesamt'} — Region Biberach an der Riß
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
