import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="tl-container py-4" aria-label="Breadcrumb" data-testid="breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 t-body-md text-onsurface-variant">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} />}
            {it.to ? <Link to={it.to} className="hover:underline text-onsurface">{it.label}</Link> : <span className="truncate max-w-[60vw]">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
