import { Home } from "lucide-react";

export const PokedexIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
    <circle cx="8.5" cy="7.5" r="1.5" />
    <line x1="12" y1="17" x2="18" y2="17" />
    <line x1="12" y1="14" x2="18" y2="14" />
    <line x1="12" y1="11" x2="18" y2="11" />
  </svg>
);

export { Home };
