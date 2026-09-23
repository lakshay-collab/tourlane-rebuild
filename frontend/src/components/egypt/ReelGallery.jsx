import React, { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Lightbox } from './EgyptRoute';
import { ChevronLeft, ChevronRight, GalleryIcon } from './EgyptIcons';

const Caption = ({ label }) => (
  <div className="absolute inset-x-0 bottom-0 pt-12 pb-3 px-3 bg-gradient-to-t from-[#002131]/75 to-transparent pointer-events-none">
    <span className="eg-label-lg text-white drop-shadow">{label}</span>
  </div>
);

function Reel({ item, index, muted, onToggleMute }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div className="relative w-full h-full bg-[#0B2A3A]" data-testid={`eg-reel-video-${index}`}>
      <video ref={ref} poster={item.poster} muted={muted} autoPlay loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" aria-label={item.label}>
        <source src={item.src} type="video/mp4" />
        {item.webm && <source src={item.webm} type="video/webm" />}
      </video>
      <span className="absolute top-3 left-3 inline-flex items-center gap-1 h-7 pl-2 pr-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 eg-label-md text-white" data-testid={`eg-reel-badge-${index}`}><Play size={12} fill="currentColor" />Reel</span>
      <button type="button" onClick={onToggleMute} className="absolute bottom-3 right-3 z-[2] w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors" aria-label={muted ? 'Unmute reel' : 'Mute reel'} data-testid={`eg-reel-mute-${index}`}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
      <Caption label={item.label} />
    </div>
  );
}

export default function ReelGallery({ detail }) {
  const items = detail.reels;
  const photos = items.filter((r) => r.type === 'image').map((r) => r.src);
  const [lb, setLb] = useState(null);
  const [muted, setMuted] = useState(true);
  const [active, setActive] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });
  const track = useRef(null);
  const timer = useRef(null);

  const measure = () => {
    const el = track.current;
    if (!el) return;
    const tiles = Array.from(el.children);
    const left = el.scrollLeft + el.clientWidth * 0.15;
    let best = 0;
    tiles.forEach((t, i) => { if (t.offsetLeft <= left) best = i; });
    setActive(best);
    setEdge({ start: el.scrollLeft < 16, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 16 });
  };
  useEffect(() => { measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure); }, []);
  const onScroll = () => { clearTimeout(timer.current); timer.current = setTimeout(measure, 60); };
  const scrollBy = (dir) => { const el = track.current; if (el) el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: 'smooth' }); };

  return (
    <div className="relative rounded-t-2xl overflow-hidden bg-[#002131]" data-testid="eg-detail-gallery" data-layout="portrait">
      {lb !== null && <Lightbox images={photos} name={detail.title} start={lb} portrait onClose={() => setLb(null)} />}
      <div ref={track} onScroll={onScroll} className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-2 md:scroll-pl-3 p-2 md:p-3 md:gap-3 h-[440px] md:h-[464px]" data-testid="eg-reel-track">
        {items.map((item, i) => (
          <div key={item.src} className="relative shrink-0 h-full aspect-[9/16] rounded-xl overflow-hidden snap-start eg-rise" style={{ animationDelay: `${i * 70}ms` }} data-testid={`eg-reel-tile-${i}`}>
            {item.type === 'video'
              ? <Reel item={item} index={i} muted={muted} onToggleMute={() => setMuted((m) => !m)} />
              : (
                <button type="button" onClick={() => setLb(photos.indexOf(item.src))} className="group relative block w-full h-full cursor-pointer" aria-label={`Open photo: ${item.label}`} data-testid={`eg-reel-photo-${i}`}>
                  <img src={item.src} alt={`${detail.alt} – ${item.label}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading={i < 3 ? 'eager' : 'lazy'} />
                  <Caption label={item.label} />
                </button>
              )}
          </div>
        ))}
      </div>
      <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
        <button type="button" onClick={() => scrollBy(-1)} className={`eg-arrow pointer-events-auto shadow-lg transition-opacity ${edge.start ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Previous" data-testid="eg-reel-prev"><ChevronLeft size={24} /></button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-4 pointer-events-none">
        <button type="button" onClick={() => scrollBy(1)} className={`eg-arrow pointer-events-auto shadow-lg transition-opacity ${edge.end ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Next" data-testid="eg-reel-next"><ChevronRight size={24} /></button>
      </div>
      <button type="button" onClick={() => setLb(0)} className="hidden md:inline-flex absolute top-6 right-6 z-[2] h-11 items-center gap-2 px-4 rounded-full bg-white/90 hover:bg-white text-[#174358] eg-label-lg shadow-sm transition-colors" aria-label={`View all ${photos.length} photos`} data-testid="eg-gallery-button"><GalleryIcon size={20} />{photos.length} photos</button>
      <div className="md:hidden absolute inset-x-0 bottom-4 z-[2] flex justify-center gap-1.5 pointer-events-none" data-testid="eg-gallery-dots">
        {items.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} data-testid={i === active ? 'eg-gallery-dot-active' : 'eg-gallery-dot'} />)}
      </div>
    </div>
  );
}
