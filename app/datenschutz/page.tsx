export default function DatenschutzPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Rechtliches</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em' }}>Datenschutz&shy;erklärung</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {[
            {
              title: '1. Datenschutz auf einen Blick',
              content: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
            },
            {
              title: '2. Verantwortliche Stelle',
              content: 'Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\n\nBuck GmbH Bauunternehmen\nMarkus Buck\nGewerbestraße 21\n88400 Biberach-Stafflangen\n\nTelefon: 0 73 51 / 55 38-0\nE-Mail: buck@gl-bau.de',
            },
            {
              title: '3. Datenerfassung auf unserer Website',
              content: 'Die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) kann Sicherheitslücken aufweisen. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\n\nWenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
            },
            {
              title: '4. Ihre Rechte',
              content: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, whiteSpace: 'pre-line', fontWeight: 300 }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
