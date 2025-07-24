import * as React from "react";

export const PokerIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M17.8 13.5c.2-.2.3-.5.3-.8s-.1-.6-.3-.8c-.4-.4-1.1-.4-1.5 0L12 16.2l-4.2-4.2c-.4-.4-1.1-.4-1.5 0-.2.2-.3.5-.3.8s.1.6.3.8L10.5 18l-3.2 3.2c-.4.4-.4 1.1 0 1.5.4.4 1.1.4 1.5 0L12 19.3l3.2 3.2c.4.4 1.1.4 1.5 0s.4-1.1 0-1.5L13.5 18l4.3-4.5Z" />
    <path d="M12 3a3 3 0 0 0-3 3v2" />
    <path d="M12 3a3 3 0 0 1 3 3v2" />
    <path d="M12 12a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3" />
    <path d="M12 12a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3" />
  </svg>
);
