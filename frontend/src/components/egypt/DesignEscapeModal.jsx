import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

const inputCls = 'h-12 w-full rounded-lg border bg-white px-3 eg-body-lg text-[#002131] focus:border-[#308BB6] focus:outline-none';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[0-9][0-9\s().-]{6,17}$/;

const validate = (f) => ({
  name: f.name.trim() ? '' : 'Please enter your name',
  phone: !f.phone.trim() ? 'Please enter your phone number' : PHONE.test(f.phone.trim()) ? '' : 'Please enter a valid phone number',
  email: !f.email.trim() ? 'Please enter your email address' : EMAIL.test(f.email.trim()) ? '' : 'Please enter a valid email address',
  destination: f.destination ? '' : 'Destination could not be detected'
});

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5">
    <span className="eg-label-lg text-[#002131]">{label}</span>
    {children}
    {error && <span className="eg-body-sm text-[#B3261E]" role="alert" data-testid="dye-error">{error}</span>}
  </label>
);

// Reusable lead-capture popup. `destination` comes from the itinerary being viewed.
export default function DesignEscapeModal({ open, onClose, destination, tripTitle }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  useEffect(() => { if (!open) { setForm({ name: '', phone: '', email: '' }); setErrors({}); setStatus('idle'); } }, [open]);

  if (!open) return null;
  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); if (errors[k]) setErrors((er) => ({ ...er, [k]: '' })); };
  const submit = async (e) => {
    e.preventDefault();
    const lead = { name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim(), destination };
    const errs = validate(lead);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setStatus('sending');
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/leads`, { ...lead, trip_title: tripTitle || '', source: 'design-your-escape' });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };
  const cls = (k) => `${inputCls} ${errors[k] ? 'border-[#B3261E]' : 'border-[#C4CBD0]'}`;

  return (
    <div className="eg fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="dye-title" data-testid="dye-modal">
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-[#002131]/55 backdrop-blur-[2px]" data-testid="dye-overlay" />
      <div className="relative w-full sm:max-w-[520px] max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#FBF9F1] shadow-[0_24px_64px_rgba(0,33,49,0.35)] px-5 py-6 sm:px-8 sm:py-8" data-testid="dye-card">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#F0EEE6] transition-colors" data-testid="dye-close"><X size={22} /></button>
        {status === 'done' ? (
          <div className="py-6 text-center" data-testid="dye-success">
            <h2 className="eg-headline-lg text-[#002131]">Thank you, {form.name.trim().split(' ')[0]}!</h2>
            <p className="mt-3 eg-body-lg text-[#002131]">Our {destination} travel expert will be in touch shortly to design your escape.</p>
            <button type="button" onClick={onClose} className="eg-btn-filled mt-6 h-12 px-8 eg-title-md" data-testid="dye-done">Back to itinerary</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-5">
            <div className="pr-10">
              <h2 id="dye-title" className="eg-headline-lg text-[#002131]">Design Your Escape</h2>
              <p className="mt-2 eg-body-lg text-[#174358]">Tell us a little about your trip and our travel expert will help you plan the perfect escape.</p>
            </div>
            <Field label="Name" error={errors.name}><input type="text" autoComplete="name" value={form.name} onChange={set('name')} placeholder="Enter your name" className={cls('name')} data-testid="dye-name" /></Field>
            <Field label="Phone" error={errors.phone}><input type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} placeholder="Enter your phone number" className={cls('phone')} data-testid="dye-phone" /></Field>
            <Field label="Email" error={errors.email}><input type="email" autoComplete="email" value={form.email} onChange={set('email')} placeholder="Enter your email address" className={cls('email')} data-testid="dye-email" /></Field>
            <Field label="Destination" error={errors.destination}><input type="text" value={destination} readOnly aria-readonly="true" className={`${inputCls} border-[#C4CBD0] bg-[#F0EEE6] text-[#174358] cursor-default`} data-testid="dye-destination" /></Field>
            {status === 'error' && <p className="eg-body-sm text-[#B3261E]" role="alert" data-testid="dye-submit-error">Something went wrong – please try again.</p>}
            <button type="submit" disabled={status === 'sending'} className="eg-btn-filled h-12 w-full eg-title-md disabled:opacity-70" data-testid="dye-submit">{status === 'sending' ? 'Sending…' : 'Start Planning'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
