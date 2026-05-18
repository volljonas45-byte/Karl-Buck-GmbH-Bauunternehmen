import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const contactItems = [
  {
    Icon: MapPin,
    label: 'Adresse',
    value: 'Gewerbestraße 21\n88400 Biberach-Stafflangen',
  },
  {
    Icon: Phone,
    label: 'Telefon',
    value: '0 73 51 / 55 38-0',
    href: 'tel:+4973515538',
  },
  {
    Icon: Mail,
    label: 'E-Mail',
    value: 'buck@gl-bau.de',
    href: 'mailto:buck@gl-bau.de',
  },
  {
    Icon: Clock,
    label: 'Bürozeiten',
    value: 'Mo – Fr: 7:00 – 17:00 Uhr',
  },
];

export default function LocationMap() {
  return (
    <section style={{ background: '#F5F5F7', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <RevealOnScroll>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Standort
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#1D1D1F',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}>
              Wir sind in Biberach<br />für Sie da.
            </h2>
          </div>
        </RevealOnScroll>

        {/* Split layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}>

          {/* Contact details */}
          <RevealOnScroll>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {contactItems.map(({ Icon, label, value, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                    <Icon size={18} color="#D4192B" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} style={{ fontSize: '16px', fontWeight: 500, color: '#1D1D1F', textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '16px', fontWeight: 500, color: '#1D1D1F', whiteSpace: 'pre-line', lineHeight: 1.5, margin: 0 }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://maps.google.com/?q=Gewerbestraße+21+88400+Biberach+an+der+Riß"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '0.5rem',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#D4192B',
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={15} />
                In Google Maps öffnen
              </a>
            </div>
          </RevealOnScroll>

          {/* Map */}
          <RevealOnScroll delay={150}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', height: 'clamp(320px, 45vw, 500px)' }}>
              <iframe
                title="Buck Bauunternehmen Standort"
                src="https://maps.google.com/maps?q=48.0691,9.7825&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
