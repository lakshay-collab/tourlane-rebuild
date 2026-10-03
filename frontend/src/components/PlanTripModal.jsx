import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { destinations } from '../destinationsData';

const WA_NUMBER = '918920606060';

// Unique, sorted list of destinations for the dropdown (built from the site's destination data).
const DESTINATION_OPTIONS = (() => {
  const set = new Set();
  Object.values(destinations).forEach((list) => list.forEach((d) => set.add(d.name)));
  return [...set].sort((a, b) => a.localeCompare(b));
})();

export default function PlanTripModal({ open, onClose }) {
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) { setDestination(''); setName(''); setError(''); }
  }, [open]);

  const waHref = useMemo(() => {
    const who = name.trim() ? `I’m ${name.trim()}. ` : '';
    const text = `Hi, ${who}I’d like to plan my trip to ${destination}. Can you help me?`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [destination, name]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!destination) { setError('Please select a destination to continue.'); return; }
    window.open(waHref, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002131]/60 animate-[hi-fade-in_200ms_ease-out]"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      data-testid="plan-trip-modal"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="plan-trip-title"
        className="relative w-full max-w-md bg-surface rounded-3xl shadow-[0_12px_48px_rgba(0,33,49,0.3)] p-6 md:p-8 origin-center animate-[hi-drop-in_240ms_cubic-bezier(.22,.61,.36,1)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 w-10 h-10 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors"
          data-testid="plan-trip-close"
        >
          <X size={22} />
        </button>

        <h2 id="plan-trip-title" className="t-headline-md text-onsurface pr-8">Plan your trip</h2>
        <p className="t-body-md text-onsurface-variant mt-2">Tell us where you’d love to go and our travel experts will craft a tailor-made plan for you.</p>

        <form onSubmit={submit} className="mt-6 flex flex-col gap-4" data-testid="plan-trip-form">
          <label className="flex flex-col gap-1.5">
            <span className="t-label-lg text-onsurface">Destination <span className="text-accent">*</span></span>
            <select
              value={destination}
              onChange={(e) => { setDestination(e.target.value); setError(''); }}
              className="h-12 rounded-xl border border-outline-variant bg-white px-4 t-body-lg text-onsurface outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-shadow"
              data-testid="plan-trip-destination"
            >
              <option value="" disabled>Select a destination…</option>
              {DESTINATION_OPTIONS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="t-label-lg text-onsurface">Your name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="h-12 rounded-xl border border-outline-variant bg-white px-4 t-body-lg text-onsurface outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-shadow"
              data-testid="plan-trip-name"
            />
          </label>

          {error && <p className="t-body-md text-accent" data-testid="plan-trip-error">{error}</p>}

          <button type="submit" className="btn-filled w-full mt-2" data-testid="plan-trip-submit">Start planning on WhatsApp</button>
        </form>
      </div>
    </div>
  );
}
