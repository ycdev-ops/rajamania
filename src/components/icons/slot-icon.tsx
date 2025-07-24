import * as React from "react";

export const SlotIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12a2.5 2.5 0 0 0-2.5 2.5c0 3.5 2.5 5.5 2.5 5.5s2.5-2 2.5-5.5A2.5 2.5 0 0 0 12 12Z" />
    <path d="M12 12V4" />
    <path d="M12 4a2.5 2.5 0 0 1-2.5-2.5" />
    <path d="M12 4a2.5 2.5 0 0 0 2.5-2.5" />
    <path d="M12 20a2.5 2.5 0 0 1 2.5 2.5" />
    <path d="M12 20a2.5 2.5 0 0 0-2.5 2.5" />
    <path d="M18 12h4" />
    <path d="m18 12-1.8-1.8" />
    <path d="m18 12 1.8 1.8" />
    <path d="M2 12h4" />
    <path d="m6 12 1.8-1.8" />
    <path d="m6 12-1.8 1.8" />
  </svg>
);
