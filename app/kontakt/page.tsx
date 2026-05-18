'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', telefon: '', betreff: '', nachricht: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:buck@gl-bau.de?subject=${encodeURIComponent(form.betreff || 'Anfrage über Website')}&body=${encodeURIComponent(`Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.telefon}\n\n${form.nachricht}`)}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    background: '#F9F9FB',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '8px',
    color: '#1D1D1F',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
  };

  return (
    <>
      <section style={{ paddingTop: '140px', padding: `140px clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem)`, background: '#111827', borderBottom: '3px solid #D4192B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#D4192B', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#D4192B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Kontakt</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Sprechen wir<br />miteinander.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', fontWeight: 300 }}>
            Wir beraten Sie gerne — unverbindlich und persönlich.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3rem)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Kontaktdaten
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { Icon: MapPin, label: 'Adresse', value: 'Gewerbestraße 21\n88400 Biberach-Stafflangen' },
                { Icon: Phone, label: 'Telefon', value: '0 73 51 / 55 38-0', href: 'tel:+4973515538' },
                { Icon: Phone, label: 'Fax', value: '0 73 51 / 55 38-20' },
                { Icon: Mail, label: 'E-Mail', value: 'buck@gl-bau.de', href: 'mailto:buck@gl-bau.de' },
                { Icon: Clock, label: 'Erreichbarkeit', value: 'Mo–Fr 7:00–17:00 Uhr' },
              ].map(({ Icon, label, value, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(212,25,43,0.08)', border: '1px solid rgba(212,25,43,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color="#D4192B" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontSize: '14px', color: '#1D1D1F', textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</a>
                    ) : (
                      <p style={{ fontSize: '14px', color: '#6B7280', whiteSpace: 'pre-line', lineHeight: 1.6, margin: 0 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <a
              href="tel:+4973515538"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: '#D4192B',
                color: '#fff',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <Phone size={16} />
              Jetzt anrufen
            </a>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Nachricht senden
            </h2>

            {sent ? (
              <div style={{ padding: '2rem', background: 'rgba(212,25,43,0.06)', border: '1px solid rgba(212,25,43,0.2)', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                <p style={{ color: '#1D1D1F', fontWeight: 600 }}>E-Mail-Client geöffnet!</p>
                <p style={{ color: '#6B7280', fontSize: '13px', marginTop: '0.5rem' }}>Bitte senden Sie die E-Mail ab.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Name *</label>
                    <input required style={inputStyle} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#D4192B'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Telefon</label>
                    <input style={inputStyle} value={form.telefon} onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#D4192B'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>E-Mail *</label>
                  <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => { e.target.style.borderColor = '#D4192B'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Betreff</label>
                  <input style={inputStyle} value={form.betreff} onChange={e => setForm(f => ({ ...f, betreff: e.target.value }))}
                    onFocus={e => { e.target.style.borderColor = '#D4192B'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Nachricht *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} value={form.nachricht} onChange={e => setForm(f => ({ ...f, nachricht: e.target.value }))}
                    onFocus={e => { e.target.style.borderColor = '#D4192B'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    background: '#D4192B',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#A8121F'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#D4192B'; }}
                >
                  <Send size={15} />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
