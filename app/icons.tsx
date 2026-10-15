// One stroke, one weight. Drawn here rather than pulled from an icon package.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const PhoneIcon = () => (
  <svg {...base}>
    <path d="M6.6 3.5h2.6l1.4 4-1.9 1.3a11 11 0 0 0 6.5 6.5l1.3-1.9 4 1.4v2.6A2 2 0 0 1 18.4 19.5 15.5 15.5 0 0 1 4.5 5.6a2 2 0 0 1 2.1-2.1Z" />
  </svg>
);

export const ChatIcon = () => (
  <svg {...base}>
    <path d="M4.2 19.8l1.1-3.6A8.3 8.3 0 1 1 8 19z" />
    <path d="M9.2 8.4c.3-.4.8-.4 1 0l.6 1.3c.1.3 0 .6-.2.8l-.4.4a5 5 0 0 0 2.9 2.9l.4-.4c.2-.2.5-.3.8-.2l1.3.6c.4.2.4.7 0 1-.6.7-1.5 1-2.4.7a7.3 7.3 0 0 1-4.7-4.7c-.3-.9 0-1.8.7-2.4Z" />
  </svg>
);

export const PinIcon = () => (
  <svg {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const ArrowIcon = () => (
  <svg {...base}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const LeftIcon = () => (
  <svg {...base}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const RightIcon = () => (
  <svg {...base}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
