'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 4vw, 3rem)',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/logo%20png.png"
              alt="Buck Bauunternehmen"
              style={{ height: '68px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.target as HTMLElement).style.color = '#fff';
                      (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                      (e.target as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              style={{
                marginLeft: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                padding: '8px 18px',
                background: '#D4192B',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#A8121F'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#D4192B'; }}
            >
              <Phone size={13} />
              Kontakt
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Menü öffnen"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: '#0A0A0A',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 1.5rem',
              height: '72px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/logo%20png.png" alt="Buck Bauunternehmen" style={{ height: '48px', width: 'auto' }} />
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: '8px' }}
              aria-label="Menü schließen"
            >
              <X size={24} />
            </button>
          </div>
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  fontWeight: 700,
                  color: pathname === link.href ? '#D4192B' : '#fff',
                  textDecoration: 'none',
                  padding: '0.4rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <a href="tel:+4973515538" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>
              <Phone size={16} color="#D4192B" />
              0 73 51 / 55 38-0
            </a>
          </div>
        </div>
      )}
    </>
  );
}
