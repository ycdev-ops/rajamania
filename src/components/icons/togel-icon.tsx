import * as React from "react";

export const TogelIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M14 9a2 2 0 0 1-2-2" />
    <path d="M10 9a2 2 0 0 1-2-2" />
    <path d="M12 5a2 2 0 0 1-2-2" />
    <path d="M12 5a2 2 0 0 0-2-2" />
    <circle cx="12" cy="12" r="10" />
    <path d="m12 12-2 4" />
    <path d="m12 12 2 4" />
    <path d="m12 12-4-2" />
    <path d="m12 12 4-2" />
  </svg>
);
