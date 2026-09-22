import React from 'react';

const Member = ({ m }) => (
  <article className="eg-card shrink-0 snap-start w-[300px] md:w-auto p-5 flex flex-col gap-4" data-testid="team-member">
    <p className="eg-team-quote text-[#002131]" data-testid="team-member-quote">“{m.quote}”</p>
    <div className="mt-auto flex items-center gap-3">
      <img src={m.image} alt={m.name} className="w-14 h-14 rounded-full object-cover shrink-0" loading="lazy" />
      <div>
        <p className="eg-title-md text-[#002131]" data-testid="team-member-name">{m.name}</p>
        <p className="eg-body-md text-[#174358] mt-0.5">{m.role}</p>
      </div>
    </div>
  </article>
);

export default function TeamIntro({ h2, members, id = 'about', className = 'eg-container mt-12 scroll-mt-20' }) {
  return (
    <section className={className} id={id} data-testid="team-intro">
      <h2 className="eg-display-sm text-[#002131]" data-testid="team-intro-title">{h2}</h2>
      <div className="mt-6 flex -space-x-3" data-testid="team-avatars">
        {members.map((m) => <img key={m.name} src={m.image} alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FBF9F1]" loading="lazy" />)}
      </div>
      <div className="mt-6 flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0" data-testid="team-track">
        {members.map((m) => <Member key={m.name} m={m} />)}
      </div>
    </section>
  );
}
