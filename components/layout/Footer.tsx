'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const leistungen = [
  { href: '/leistungen/neubau', label: 'Neubau' },
  { href: '/leistungen/neubau', label: 'Schlüsselfertig Bauen' },
  { href: '/leistungen/neubau', label: 'Energieeffizient Bauen' },
  { href: '/leistungen/neubau', label: 'Gewerbebau' },
  { href: '/leistungen/sanierung', label: 'Energetisch Sanieren' },
  { href: '/leistungen/umbau', label: 'Umbau & Erweiterung' },
];

const unternehmen = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
      }}>
        {/* Brand */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/logo%20png.png"
            alt="Buck Bauunternehmen"
            style={{ height: '80px', width: 'auto', display: 'block', marginBottom: '1.2rem' }}
          />
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '220px' }}>
            Familienunternehmen in dritter Generation. Massivbauweise und handwerkliche Präzision seit 1920.
          </p>
        </div>

        {/* Leistungen */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #D4192B', display: 'inline-block' }}>
            Leistungen
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {leistungen.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.42)'; }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #D4192B', display: 'inline-block' }}>
            Unternehmen
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {unternehmen.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.42)'; }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '2px solid #D4192B', display: 'inline-block' }}>
            Kontakt
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <MapPin size={14} color="#D4192B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.6 }}>
                Gewerbestraße 21<br />88400 Biberach-Stafflangen
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={14} color="#D4192B" />
              <a href="tel:+4973515538" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>
                0 73 51 / 55 38-0
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={14} color="#D4192B" />
              <a href="mailto:buck@gl-bau.de" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>
                buck@gl-bau.de
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.2rem clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            {year} Buck GmbH Bauunternehmen. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/impressum" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Impressum</Link>
            <Link href="/datenschutz" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
