const WA_NUMBER = '918920606060';
const WA_TEXT = 'Hi, I’d like to plan my dream trip. Can you help me?';
const waHref = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const href = waHref(WA_TEXT);

// On package pages EgyptDetail exposes the opened itinerary title via data-wa-package.
const onClick = (e) => {
  const pkg = document.documentElement.dataset.waPackage;
  if (!pkg) return;
  e.preventDefault();
  window.open(waHref(`Hi, I am interested in your "${pkg}" package.`), '_blank', 'noopener,noreferrer');
};

export const WhatsAppWidget = () => (
  <a
    href={href}
    onClick={onClick}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    data-testid="whatsapp-widget"
    className="fixed right-4 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] shadow-[0_6px_18px_rgba(0,0,0,0.25)] flex items-center justify-center text-white transition-transform duration-200 hover:scale-105 active:scale-95"
    style={{ bottom: 'var(--wa-bottom)' }}
  >
    <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.41L3.2 28.8l6.57-1.72a12.75 12.75 0 0 0 6.23 1.59h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.67-12.8-12.67zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.6 10.6 0 0 1-1.63-5.65c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.87-4.78 10.52-10.77 10.52zm5.84-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.09 1.3 3.3c.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  </a>
);
