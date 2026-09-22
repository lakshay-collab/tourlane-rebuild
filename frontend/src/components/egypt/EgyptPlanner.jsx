import React, { useState } from 'react';
import { planner } from '../../egyptListingData';
import { CheckCircleIcon, PhoneIcon } from './EgyptIcons';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const COUNTRY_CODES = [
  { code: '+91', flag: '🇮🇳' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+971', flag: '🇦🇪' },
  { code: '+61', flag: '🇦🇺' },
  { code: '+65', flag: '🇸🇬' },
  { code: '+49', flag: '🇩🇪' }
];

export default function EgyptPlanner({ className = 'mt-12 md:mt-16 px-4 sm:px-8 lg:px-10', titleClass = 'eg-display-sm', data = planner, tripTitle = '', source = 'egypt-planner' }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [cc, setCc] = useState('+91');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const cleanPhone = form.phone.replace(/\s+/g, '');
  const valid = form.name.trim().length > 1 && /^\d{7,15}$/.test(cleanPhone) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim());

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`${BACKEND}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), phone: cleanPhone, email: form.email.trim(), country_code: cc, trip_title: tripTitle, source })
      });
      if (!res.ok) throw new Error('bad');
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  };

  const inputCls = 'h-12 rounded-lg border border-[#C4CBD0] bg-white px-3 eg-body-lg text-[#002131] focus:border-[#308BB6] focus:outline-none';

  return (
    <section className={className} data-testid="eg-planner">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={data.bg} alt="Egypt pyramids" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,33,49,0.88)_0%,rgba(23,67,88,0.62)_55%,rgba(48,139,182,0.45)_100%)]" />
        <div className="relative px-4 py-8 md:py-12 md:px-10 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1 flex flex-col gap-3 text-white lg:max-w-[440px]">
            <h3 className={`${titleClass} text-white`}>{data.h3}</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {data.avatars.map((a, i) => <img key={a} src={a} alt="" className="w-7 h-7 rounded-full border border-white object-cover" style={{ marginLeft: i ? -6 : 0 }} />)}
              </div>
              <span className="eg-title-md text-white">{data.social}</span>
            </div>
            <div className="hidden lg:flex items-center gap-4 mt-2">
              <span className="eg-body-sm text-white/80 whitespace-nowrap">{data.known}</span>
              <div className="flex items-center gap-3">
                {data.press.map((l) => <img key={l.alt} src={l.src} alt={l.alt} style={{ height: 18, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />)}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] rounded-xl bg-[#FEFCF4] p-5 md:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" data-testid="eg-planner-card">
            {status === 'done' ? (
              <div className="py-8 flex flex-col items-center text-center gap-2" data-testid="eg-planner-success">
                <div className="w-12 h-12 rounded-full bg-[#308BB6] text-white flex items-center justify-center"><CheckCircleIcon size={28} /></div>
                <h4 className="eg-title-lg text-[#002131]">{data.successTitle}</h4>
                <p className="eg-body-md text-[#174358]">{data.successText}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4" data-testid="eg-planner-form">
                <div className="flex flex-col gap-1">
                  <h4 className="eg-title-lg text-[#002131]">{data.formTitle}</h4>
                  <p className="eg-body-md text-[#174358]">{data.formSub}</p>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="eg-label-lg text-[#002131]">{data.nameLabel}</span>
                  <input type="text" value={form.name} onChange={set('name')} placeholder={data.namePlaceholder} className={inputCls} data-testid="eg-planner-name" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="eg-label-lg text-[#002131]">{data.phoneLabel}</span>
                  <div className="flex items-center h-12 rounded-lg border border-[#C4CBD0] bg-white overflow-hidden focus-within:border-[#308BB6]">
                    <select value={cc} onChange={(e) => setCc(e.target.value)} className="h-full pl-3 pr-1 border-r border-[#C4CBD0] bg-[#F0EEE6] eg-body-lg text-[#002131] focus:outline-none cursor-pointer" aria-label="Country code" data-testid="eg-planner-cc">
                      {COUNTRY_CODES.map((o) => <option key={o.code} value={o.code}>{o.flag} {o.code}</option>)}
                    </select>
                    <input type="tel" inputMode="numeric" value={form.phone} onChange={set('phone')} placeholder={data.phonePlaceholder} className="flex-1 h-full px-3 eg-body-lg text-[#002131] focus:outline-none bg-transparent" data-testid="eg-planner-phone" />
                  </div>
                </label>
                <label className="flex flex-col gap-1">
                  <span className="eg-label-lg text-[#002131]">{data.emailLabel}</span>
                  <input type="email" value={form.email} onChange={set('email')} placeholder={data.emailPlaceholder} className={inputCls} data-testid="eg-planner-email" />
                </label>
                {status === 'error' && <p className="eg-body-md text-[#B42318]" data-testid="eg-planner-error">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={!valid || status === 'sending'} className="eg-btn-filled w-full !h-14 eg-title-md disabled:opacity-60 disabled:cursor-not-allowed" data-testid="eg-planner-submit">{status === 'sending' ? data.sending : (valid ? data.cta : (data.ctaIdle || data.cta))}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
