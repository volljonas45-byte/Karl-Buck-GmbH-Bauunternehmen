const items = [
  'Neubau', 'Sanierung', 'Umbau', 'Gewerbebau',
  'Energieeffizienz', 'Massivbauweise', 'Biberach', 'Seit 1920',
  'Trockenlegen', 'Fassadensanierung', 'Schlüsselfertig', 'Familienunternehmen',
];

export default function ScrollingTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '18px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              paddingRight: '40px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4192B', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
