// All SVG icons in one place so the layout components stay readable.

export const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export const PhoneIcon = ({ w = 19 }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const SendIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const SparkleIcon = ({ w = 19, stroke = "#7FCDC6" }) => (
  <svg width={w} height={w} style={{ flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.7 4.6L18.5 9l-4.8 1.4L12 15l-1.7-4.6L5.5 9l4.8-1.4z" />
    <path d="M18.5 14.5l.7 1.9 2 .7-2 .7-.7 1.9-.7-1.9-2-.7 2-.7z" />
  </svg>
);

export const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BFE0DC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11.5 14.5 16 9.5" />
  </svg>
);

export const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <circle cx="12" cy="7.8" r="0.8" fill="currentColor" />
  </svg>
);

export const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const FaqIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.9-2.6 2.3-2.6 3.7" />
    <circle cx="12" cy="17" r="0.7" fill="currentColor" />
  </svg>
);

export const CheckIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="#5FD3A3">
    <path d="M17.6 14.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.45 0 1.44 1.05 2.84 1.2 3.04.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.75-.72 1.99-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.56-.34z" />
    <path d="M12 2.04A9.96 9.96 0 0 0 3.4 16.96L2 22l5.16-1.35A9.96 9.96 0 1 0 12 2.04zm0 18.17a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1 1 12 20.21z" />
  </svg>
);

export const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9FC9C5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);

export const PlusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="2.4" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const MinusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="2.4" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Carousel / gallery icons.
export const ChevronLeftIcon = ({ w = 22 }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon = ({ w = 22 }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Service icons for the "Alles aus einer Hand" section (stroke #7FCDC6).
export const handIcons = [
  <svg key="i0" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>,
  <svg key="i1" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>,
  <svg key="i2" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l18 18" />
    <path d="M8 8a4 4 0 0 1 8 0c0 1.5 1 2.5 1 4" />
    <circle cx="12" cy="13" r="5" />
  </svg>,
  <svg key="i3" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <polyline points="8.5 13.2 7 22 12 19 17 22 15.5 13.2" />
  </svg>,
  <svg key="i4" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l9-9 9 9" />
    <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
  </svg>,
  <svg key="i5" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7FCDC6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </svg>,
];
