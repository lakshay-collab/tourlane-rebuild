import React, { useState } from 'react';

export default function TeamIntro({ h2, members, id = 'about', className = 'eg-container mt-12 scroll-mt-20' }) {
  const [open, setOpen] = useState(false);
  const lead = members.find((m) => /head/i.test(m.role)) || members[0];
  const rest = members.filter((m) => m.name !== lead.name);
  return (
    <section className={className} id={id} data-testid="team-intro">
      <h2 className="eg-display-sm text-[#002131]" data-testid="team-intro-title">{h2}</h2>
      <article className="mt-6 eg-card p-6 md:p-8 flex flex-col gap-5" data-testid="team-intro-card">
        <div className="flex -space-x-3" data-testid="team-avatars">
          {members.map((m) => <img key={m.name} src={m.image} alt={m.name} title={`${m.name} · ${m.role}`} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FBF9F1]" loading="lazy" />)}
        </div>
        <blockquote className="eg-team-quote text-[#002131]" data-testid="team-statement">
          “Between us we’ve travelled every corner of Asia, and we plan each trip together as one team — so whatever you’re dreaming of, someone here has been there and will make it work for you.”
        </blockquote>
        {open && (
          <div className="flex flex-col gap-4 border-t border-[#E4E3DB] pt-5" data-testid="team-more">
            {rest.map((m) => (
              <div key={m.name} className="flex items-start gap-3" data-testid="team-member">
                <img src={m.image} alt={m.name} className="w-11 h-11 rounded-full object-cover shrink-0" loading="lazy" />
                <div>
                  <p className="eg-body-lg text-[#002131]">“{m.quote}”</p>
                  <p className="eg-body-md text-[#174358] mt-1"><span className="font-semibold text-[#002131]" data-testid="team-member-name">{m.name}</span> · {m.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-3">
          <img src={lead.image} alt={lead.name} className="w-12 h-12 rounded-full object-cover shrink-0" loading="lazy" />
          <div>
            <p className="eg-title-md text-[#002131]">{lead.name}</p>
            <p className="eg-body-md text-[#174358] mt-0.5">{lead.role}</p>
          </div>
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="self-start eg-btn-outlined eg-label-lg" data-testid="team-readmore">
          {open ? 'Show less' : `Meet the full team (${members.length})`}
        </button>
      </article>
    </section>
  );
}
