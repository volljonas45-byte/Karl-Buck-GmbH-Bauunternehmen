'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
  items?: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: '#FFFFFF',
            border: open === i ? '1px solid rgba(212,25,43,0.3)' : '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            boxShadow: open === i ? '0 4px 20px rgba(212,25,43,0.08)' : '0 1px 6px rgba(0,0,0,0.04)',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#1D1D1F', lineHeight: 1.3 }}>
              {item.title}
            </span>
            <span style={{ flexShrink: 0, color: open === i ? '#D4192B' : '#9CA3AF', transition: 'color 0.3s' }}>
              {open === i ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>

          <div className={`accordion-content${open === i ? ' open' : ''}`}>
            <div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, marginBottom: item.items ? '1rem' : 0 }}>
                  {item.content}
                </p>
                {item.items && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.items.map((bullet, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4192B', flexShrink: 0, marginTop: '7px' }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
