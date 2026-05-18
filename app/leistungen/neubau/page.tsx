'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CtaBanner from '@/components/home/CtaBanner';
import ImageSlider from '@/components/ui/ImageSlider';

const sliderSlides = [
  { src: '/assets/img/schluesselfertig_02_klein.jpg', alt: 'Neubau Einfamilienhaus', label: 'Neubau' },
  { src: '/assets/img/schluesselfertig_01_klein.jpg', alt: 'Modernes Einfamilienhaus', label: 'Schlüsselfertig' },
  { src: '/assets/img/gewerbe_04_klein.jpg', alt: 'Gewerbebau', label: 'Gewerbebau' },
  { src: '/assets/img/gewerbe_07_klein.jpg', alt: 'Gewerbegebäude', label: 'Gewerbebau' },
];

const tabs = [
  {
    label: 'Schlüsselfertig Bauen',
    title: 'Ihr massives Traumhaus — schlüsselfertig',
    text: 'Für das Bauen eines massiven, schlüsselfertigen Traumhauses benötigen Sie den richtigen Partner. Wir übernehmen Koordination und Management und stellen mit Hilfe unserer qualifizierten Subunternehmer das ganze Haus schlüsselfertig her.',
    items: ['Planung und Koordination aller Gewerke', 'Massivbauweise als Standard', 'Haustechnik: Heizung, Lüftung, Sanitär, Elektro', 'Photovoltaikanlagen', 'Schlüsselübergabe aus einer Hand'],
    img: '/assets/img/schluesselfertig_01_klein.jpg',
  },
  {
    label: 'Energieeffizient Bauen',
    title: 'Energieeffizient — zukunftssicher bauen',
    text: 'Wir bauen nach neuesten Energiestandards und helfen Ihnen, staatliche Förderprogramme optimal zu nutzen. Von der Bodenplattenabdichtung über Fassadendämmung bis zu effizienten Fenstern — alles aus einer Hand.',
    items: ['KfW- und BAFA-konforme Energiestandards', 'Bodenplatten- und Kellerabdichtung', 'Fassaden- und Dachdämmung', 'Energieeffiziente Fenster und Türen', 'Staatliche Förderberatung inklusive'],
    img: '/assets/img/ener_referenzen_01_klein.jpg',
  },
  {
    label: 'Gewerbebau',
    title: 'Gewerbebau — professionell und zuverlässig',
    text: 'Geschäftliches und gewerbliche Projekte sind ein wichtiger Bestandteil unserer Firmentätigkeit. Wir sind für die Ausführung aller damit verbundenen Aufgaben – von der Planung bis zur schlüsselfertigen Übergabe – bestens gerüstet.',
    items: ['Planung und Ausführung gewerblicher Bauten', 'Hallen, Büros und Produktionsgebäude', 'Alle Gewerke aus einer Hand', 'Energieeffiziente Gewerbebauten', 'Termingerechte Umsetzung'],
    img: '/assets/img/gewerbebau_gross.jpg',
  },
];

export default function NeubauPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <>
      {/* Page Hero */}
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Leistungen · Neubau</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Neubau.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Schlüsselfertig, energieeffizient oder als Gewerbebau — wir realisieren Ihr Bauprojekt mit Präzision und Erfahrung.
          </p>
        </div>
      </section>

      {/* Image Slider */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ImageSlider slides={sliderSlides} height="clamp(280px, 45vw, 500px)" />
        </div>
      </section>

      {/* Tabs + Content */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '3.5rem', background: '#F5F5F7', borderRadius: '12px', padding: '4px', flexWrap: 'wrap' }}>
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '11px 16px',
                  background: activeTab === i ? '#FFFFFF' : 'transparent',
                  border: activeTab === i ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
                  borderRadius: '10px',
                  color: activeTab === i ? '#1D1D1F' : '#6B7280',
                  fontSize: '13px',
                  fontWeight: activeTab === i ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === i ? '0 1px 6px rgba(0,0,0,0.07)' : 'none',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <RevealOnScroll>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.03em', marginBottom: '1.2rem', lineHeight: 1.2 }}>
                  {tab.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8, fontWeight: 400, marginBottom: '2rem' }}>
                  {tab.text}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tab.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#374151' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4192B', flexShrink: 0, marginTop: '7px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tab.img} alt={tab.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
