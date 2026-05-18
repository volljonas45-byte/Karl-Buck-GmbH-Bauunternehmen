import Accordion from '@/components/ui/Accordion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CtaBanner from '@/components/home/CtaBanner';
import ImageSlider from '@/components/ui/ImageSlider';

const sliderSlides = [
  { src: '/assets/img/umbauten_02_klein.jpg', alt: 'Umbau Wohnhaus', label: 'Umbau' },
  { src: '/assets/img/erweiterungen_02_klein.jpg', alt: 'Erweiterung', label: 'Erweiterung' },
  { src: '/assets/img/erdarbeiten_01_klein.jpg', alt: 'Erdarbeiten', label: 'Erdarbeiten' },
  { src: '/assets/img/mauer_01_klein.jpg', alt: 'Mauerwerksstabilisierung', label: 'Mauerwerk' },
];

const items = [
  {
    title: 'Erweiterungen & Anbauten',
    content: 'Wenn das Haus zu klein ist, muss man nicht zwingend umziehen. Wir planen und realisieren Anbau- und Erweiterungsprojekte, die sich harmonisch in die bestehende Bausubstanz einfügen.',
    items: ['Anbauten und Aufstockungen', 'Wintergärten und Terrassenüberdachungen', 'Garage oder Carport anbauen', 'Planung und Genehmigungsunterstützung'],
  },
  {
    title: 'Mauerwerksstabilisierung',
    content: 'Für ein festes Fundament — Mauerwerksstabilisierung schützt die Bausubstanz und verhindert Rissbildung und Setzungen. Wir analysieren die Ursachen und setzen gezielte Maßnahmen um.',
    items: ['Rissuntersuchung und Ursachenanalyse', 'Verpressarbeiten und Injektion', 'Mauerwerksanker und Zugstangen', 'Nachgründungen und Fundamentsicherung'],
  },
  {
    title: 'Garagen',
    content: 'Ob Neubau, Erweiterung oder Umbau — wir bauen Garagen nach Ihren Wünschen in solider Massivbauweise.',
    items: ['Einzelgaragen und Doppelgaragen', 'Massivbauweise (Beton, Stein)', 'Integrierte Garagen und freistehende Garagen', 'Garagentore und Beleuchtung'],
  },
  {
    title: 'Außenanlagen & Erdarbeiten',
    content: 'Von der Geländegestaltung bis zu Einfahrten und Bepflanzungen — wir gestalten Ihre Außenanlagen professionell und funktional.',
    items: ['Erdarbeiten und Geländemodellierung', 'Einfahrten, Wege und Terrassen', 'Entwässerung und Drainage', 'Stützmauern und Einfriedungen'],
  },
];

export default function UmbauPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Leistungen · Umbau</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Umbau &<br />Erweiterung.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Träume erfüllen — Werte erhalten. Wenn das Haus zu klein wird oder die Bausubstanz Aufmerksamkeit braucht.
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
