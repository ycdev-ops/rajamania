import * as React from "react";

export const ArcadeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M12 14v4" />
    <path d="M12 4a8 8 0 0 1 8 8" />
    <path d="M4 12a8 8 0 0 1 8-8" />
    <path d="M16 12h4" />
    <path d="M4 12H0" />
    <path d="m16.2 16.2 2.8 2.8" />
    <path d="m5 19 2-2" />
  </svg>
);
