'use client';

import Accordion from '@/components/ui/Accordion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CtaBanner from '@/components/home/CtaBanner';
import ImageSlider from '@/components/ui/ImageSlider';

const sliderSlides = [
  { src: '/assets/img/fassadensanierung_01_klein.jpg', alt: 'Fassadensanierung', label: 'Fassadensanierung' },
  { src: '/assets/img/fassadensanierung_02_klein.jpg', alt: 'Fassade nach Sanierung', label: 'Fassade' },
  { src: '/assets/img/fassadensanierung_04_klein.jpg', alt: 'Gerüst Fassadensanierung', label: 'Sanierung' },
  { src: '/assets/img/bautenschutz_01_klein.jpg', alt: 'Bautenschutz', label: 'Bautenschutz' },
];

const items = [
  {
    title: 'Trockenlegen & Bautenschutz',
    content: 'Feuchtigkeit im Mauerwerk ist eine der häufigsten und schädlichsten Ursachen für Bauschäden. Wir bieten umfassenden Bautenschutz mit modernsten Verfahren.',
    items: ['Feuchtigkeitsprüfung und Schadensanalyse', 'Horizontalsperre Sockelabsicherung', 'Drucklose Injektion (Silikone, Acrylat)', 'Abdichtung mit Bitumen und Reaktionsharz', 'Schlämmen und Kunststoffdichtungsbahnen', 'Verpressarbeiten in Mauerwerk, Stein und Beton'],
    img: '/assets/img/bautenschutz_01_klein.jpg',
  },
  {
    title: 'Schimmelsanierung — Ihre Gesundheit zählt',
    content: 'Schimmel in Wohnräumen ist nicht nur ein ästhetisches Problem — er gefährdet Ihre Gesundheit. Wir erkennen die Ursachen und beseitigen Schimmel fachgerecht und dauerhaft.',
    items: ['Ursachenanalyse (Feuchtigkeit, Wärmebrücken)', 'Professionelle Schimmelentfernung', 'Maßnahmen zur dauerhaften Vorbeugung', 'Verbesserung der Raumluftqualität'],
    img: '/assets/img/bautenschutz_02_klein.jpg',
  },
  {
    title: 'Fassadensanierung',
    content: 'Eine intakte Fassade schützt Ihr Gebäude vor Witterung und Feuchtigkeitseindringung. Unsere Fassadensanierung verbessert zugleich die Energieeffizienz Ihres Hauses.',
    items: ['Schadensanalyse und Bestandsaufnahme', 'Fassadenreinigung und Vorbehandlung', 'Fassadendämmung (WDVS)', 'Rissbeseitigung und Instandsetzung', 'Anstrich und Beschichtung'],
    img: '/assets/img/fassadensanierung_04_klein.jpg',
  },
  {
    title: 'Kellerabdichtung & Fundamentabdichtung',
    content: 'Ein trockener Keller ist die Basis eines gesunden Hauses. Wir dichten Keller, Bodenplatten und Fundamente fachgerecht ab — von innen und außen.',
    items: ['Bodenplattenabdichtung', 'Kelleraußenabdichtung', 'Perimeterdämmung', 'Drainagen und Entwässerungssysteme'],
    img: '/assets/img/fassadensanierung_05_klein.jpg',
  },
  {
    title: 'Staatliche Förderung der energetischen Sanierung',
    content: 'Die Bundesregierung fördert energetische Sanierungsmaßnahmen mit attraktiven Zuschüssen und zinsgünstigen Krediten. Wir beraten Sie, welche Förderprogramme für Ihr Projekt in Frage kommen.',
    items: ['BAFA-Förderung für Einzelmaßnahmen', 'KfW-Programme für Sanierung zum Effizienzhaus', 'Steuerliche Absetzbarkeit von Sanierungskosten', 'Kostenlose Erstberatung zu Fördermöglichkeiten'],
  },
];

export default function SanierungPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Leistungen · Sanierung</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Energetisch<br />Sanieren.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Trockenlegen, Schimmelsanierung, Fassade und Dämmung — wir machen Ihr Gebäude fit für die Zukunft, mit staatlicher Förderberatung inklusive.
          </p>
        </div>
      </section>

      {/* Slider */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ImageSlider slides={sliderSlides} height="clamp(280px, 45vw, 500px)" />
        </div>
      </section>

      {/* Accordion */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Leistungsübersicht</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.03em' }}>
                Was wir für Sie tun können
              </h2>
            </div>
            <Accordion items={items} />
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
