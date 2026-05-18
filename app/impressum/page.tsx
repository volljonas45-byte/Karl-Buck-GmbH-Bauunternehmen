export default function ImpressumPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Rechtliches</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em' }}>Impressum</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {[
            {
              title: 'Angaben gemäß § 5 TMG',
              content: 'Buck GmbH Bauunternehmen\nGewerbestraße 21\n88400 Biberach-Stafflangen',
            },
            {
              title: 'Vertreten durch',
              content: 'Markus Buck (Geschäftsführer)',
            },
            {
              title: 'Kontakt',
              content: 'Telefon: 0 73 51 / 55 38-0\nFax: 0 73 51 / 55 38-20\nE-Mail: buck@gl-bau.de',
            },
            {
              title: 'Umsatzsteuer-ID',
              content: 'Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:\n[Bitte eintragen]',
            },
            {
              title: 'Handelsregister',
              content: 'Registergericht: Amtsgericht Ulm\nRegisternummer: [Bitte eintragen]',
            },
            {
              title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
              content: 'Markus Buck\nGewerbestraße 21\n88400 Biberach-Stafflangen',
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, whiteSpace: 'pre-line', fontWeight: 300 }}>
                {section.content}
              </p>
            </div>
          ))}

          <div>
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              Haftungsausschluss
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
