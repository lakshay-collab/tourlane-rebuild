import React, { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Lightbox } from './EgyptRoute';
import { GalleryIcon } from './EgyptIcons';

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
    <div className="relative w-full h-full bg-[#0B2A3A] overflow-hidden" data-testid={`eg-reel-video-${index}`}>
      <video ref={ref} poster={item.poster} muted={muted} autoPlay loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" aria-label={item.label}>
        <source src={item.src} type="video/mp4" />
        {item.webm && <source src={item.webm} type="video/webm" />}
      </video>
      <span className="absolute top-3 left-3 inline-flex items-center gap-1 h-7 pl-2 pr-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 eg-label-md text-white" data-testid={`eg-reel-badge-${index}`}><Play size={12} fill="currentColor" />Reel</span>
      <div className="absolute inset-x-0 bottom-0 pt-12 pb-3 px-3 bg-gradient-to-t from-[#002131]/75 to-transparent pointer-events-none"><span className="eg-label-lg text-white">{item.label}</span></div>
      <button type="button" onClick={onToggleMute} className="absolute bottom-3 right-3 z-[2] w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-colors" aria-label={muted ? 'Unmute reel' : 'Mute reel'} data-testid={`eg-reel-mute-${index}`}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
    </div>
  );
}

export default function ReelGallery({ detail }) {
  const reels = detail.reels.filter((r) => r.type === 'video').slice(0, 2);
  const photos = detail.gallery;
  const [lb, setLb] = useState(null);
  const [muted, setMuted] = useState(true);
  const [gi, setGi] = useState(0);
  const timer = useRef(null);
  const onScroll = (e) => {
    const el = e.currentTarget;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const tiles = Array.from(el.children);
      const left = el.scrollLeft + 24;
      let best = 0;
      tiles.forEach((t, i) => { if (t.offsetLeft <= left) best = i; });
      setGi(best);
    }, 60);
  };
  const total = reels.length + photos.length;
  return (
    <div className="relative" data-testid="eg-detail-gallery" data-layout="portrait">
      {lb !== null && <Lightbox images={photos} name={detail.title} start={lb} onClose={() => setLb(null)} />}
      <div onScroll={onScroll} className="md:hidden flex gap-1 overflow-x-auto no-scrollbar snap-x snap-mandatory h-[360px] rounded-t-2xl" data-testid="eg-gallery-mobile">
        {reels.map((r, i) => <div key={r.src} className="shrink-0 h-full w-[62%] snap-start rounded-r-md overflow-hidden" data-testid={`eg-reel-tile-${i}`}><Reel item={r} index={i} muted={muted} onToggleMute={() => setMuted((m) => !m)} /></div>)}
        {photos.map((src, i) => <img key={src} src={src} alt={`${detail.alt} - Image ${i + 1}`} className="w-full h-full object-cover shrink-0 snap-start" loading={i ? 'lazy' : 'eager'} onClick={() => setLb(i)} data-testid={`eg-reel-photo-${i}`} />)}
      </div>
      <div className="hidden md:flex gap-1 h-[400px] rounded-t-2xl overflow-hidden" data-testid="eg-gallery-desktop">
        {reels.map((r, i) => <div key={r.src} className="relative h-full aspect-[9/16] shrink-0" data-testid={`eg-reel-tile-${i}`}><Reel item={r} index={i} muted={muted} onToggleMute={() => setMuted((m) => !m)} /></div>)}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1">
          {photos.slice(0, 4).map((src, i) => <button type="button" key={src} onClick={() => setLb(i)} className="relative cursor-pointer group overflow-hidden" aria-label={`Open photo ${i + 1}`} data-testid={`eg-reel-photo-${i}`}><img src={src} alt={`${detail.alt} - Image ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading={i ? 'lazy' : 'eager'} /></button>)}
        </div>
      </div>
      <button type="button" onClick={() => setLb(0)} className="hidden md:inline-flex absolute bottom-3 right-3 z-[2] h-11 items-center gap-2 px-4 rounded-full bg-white/90 hover:bg-white text-[#174358] eg-label-lg shadow-sm transition-colors" aria-label={`View all ${photos.length} photos`} data-testid="eg-gallery-button"><GalleryIcon size={20} />{photos.length} photos</button>
      <div className="md:hidden absolute inset-x-0 bottom-3 z-[2] flex justify-center gap-1.5 pointer-events-none" data-testid="eg-gallery-dots">
        {Array.from({ length: total }).map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === gi ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} data-testid={i === gi ? 'eg-gallery-dot-active' : 'eg-gallery-dot'} />)}
      </div>
    </div>
  );
}
