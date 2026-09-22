import React, { useState } from 'react';
import { planner } from '../../egyptListingData';
import { CheckCircleIcon } from './EgyptIcons';

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

const inputCls = 'h-12 w-full rounded-lg border border-[#C4CBD0] bg-white px-3 eg-body-lg text-[#002131] focus:border-[#308BB6] focus:outline-none';

function LeadForm({ data, form, set, cc, setCc, status, valid, submit, prefix }) {
  if (status === 'done') {
    return (
      <div className="py-8 flex flex-col items-center text-center gap-2" data-testid={`${prefix}-success`}>
        <div className="w-12 h-12 rounded-full bg-[#174358] text-white flex items-center justify-center"><CheckCircleIcon size={28} /></div>
        <h4 className="eg-title-lg text-[#002131]">{data.successTitle}</h4>
        <p className="eg-body-md text-[#174358]">{data.successText}</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="flex flex-col gap-4" data-testid={`${prefix}-form`}>
      <div className="flex flex-col gap-1 text-center">
        <h3 className="eg-title-lg text-[#002131]">{data.formTitle}</h3>
        <p className="eg-body-md text-[#174358]">{data.formSub}</p>
      </div>
      <div className="rounded-xl border border-[#C4CBD0] p-4 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.nameLabel}</span>
          <input type="text" value={form.name} onChange={set('name')} placeholder={data.namePlaceholder} className={inputCls} data-testid={`${prefix}-name`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.phoneLabel}</span>
          <div className="flex items-center h-12 rounded-lg border border-[#C4CBD0] bg-white overflow-hidden focus-within:border-[#308BB6]">
            <select value={cc} onChange={(e) => setCc(e.target.value)} className="h-full pl-3 pr-1 border-r border-[#C4CBD0] bg-[#F0EEE6] eg-body-lg text-[#002131] focus:outline-none cursor-pointer" aria-label="Country code" data-testid={`${prefix}-cc`}>
              {COUNTRY_CODES.map((o) => <option key={o.code} value={o.code}>{o.flag} {o.code}</option>)}
            </select>
            <input type="tel" inputMode="numeric" value={form.phone} onChange={set('phone')} placeholder={data.phonePlaceholder} className="flex-1 min-w-0 h-full px-3 eg-body-lg text-[#002131] focus:outline-none bg-transparent" data-testid={`${prefix}-phone`} />
          </div>
        </label>
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.emailLabel}</span>
          <input type="email" value={form.email} onChange={set('email')} placeholder={data.emailPlaceholder} className={inputCls} data-testid={`${prefix}-email`} />
        </label>
      </div>
      {status === 'error' && <p className="eg-body-md text-[#B42318]" data-testid={`${prefix}-error`}>Something went wrong. Please try again.</p>}
      <button type="submit" disabled={!valid || status === 'sending'} className="eg-btn-filled w-full !h-12 eg-label-lg disabled:opacity-60 disabled:cursor-not-allowed" data-testid={`${prefix}-submit`}>
        {status === 'sending' ? data.sending : (valid ? data.cta : (data.ctaIdle || data.cta))}
      </button>
    </form>
  );
}

const Social = ({ data, size = 'w-6 h-6' }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {data.avatars.map((a, i) => <img key={a} src={a} alt="" className={`${size} rounded-full border border-white object-cover`} style={{ marginLeft: i ? -4 : 0 }} />)}
    </div>
    <span className="eg-title-md text-white">{data.social}</span>
  </div>
);

const overlay = 'absolute inset-0 bg-[linear-gradient(135deg,rgba(0,33,49,0.72)_0%,rgba(23,67,88,0.45)_60%,rgba(48,139,182,0.35)_100%)]';

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
  const formProps = { data, form, set, cc, setCc, status, valid, submit };

  return (
    <section className={className} data-testid="eg-planner">
      <div className="relative h-[760px] hidden lg:block" style={{ backgroundImage: `url(${data.decoration})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 500px', backgroundSize: '1200px 258px' }}>
        <div className="relative h-[372px] rounded-2xl overflow-hidden">
          <img src={data.bg} alt="Egypt" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className={overlay} />
          <div className="absolute inset-x-0 top-0 pt-[43px] px-6 flex flex-col items-center gap-1 text-white">
            <h3 className={`${titleClass} text-white text-center`}>{data.h3}</h3>
            <Social data={data} />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[141px] w-[650px] rounded-xl bg-[#FEFCF4] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] z-10" data-testid="eg-planner-card">
          <div className="pt-7 px-16">
            <LeadForm {...formProps} prefix="eg-planner" />
          </div>
          <div className="mt-6 h-16 rounded-b-xl bg-[#F0EEE6] px-8 py-3 flex items-center gap-8">
            <span className="eg-title-md text-[#002131] whitespace-nowrap">{data.known}</span>
            <div className="flex-1 flex items-center justify-center gap-4">
              {data.press.map((l, i) => (
                <React.Fragment key={l.alt}>
                  {i > 0 && <span className="w-px h-6 bg-[#C4CBD0]" />}
                  <img src={l.src} alt={l.alt} width={l.w} height={l.h} style={{ width: l.w, height: l.h }} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compact layout below lg */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden">
        <img src={data.bg} alt="Egypt" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className={overlay} />
        <div className="relative p-4 pt-6 flex flex-col items-center gap-4">
          <h3 className="eg-display-sm text-white text-center">{data.h3}</h3>
          <Social data={data} />
          <div className="w-full max-w-[650px] rounded-xl bg-[#FEFCF4] p-4" data-testid="eg-planner-card-mobile">
            <LeadForm {...formProps} prefix="eg-planner-m" />
          </div>
        </div>
      </div>
    </section>
  );
}
