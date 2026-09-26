import type { SVGProps } from "react";

export type IconName =
  | "tooth"
  | "sparkle"
  | "sun"
  | "shield"
  | "anchor"
  | "align"
  | "star"
  | "heart"
  | "feather"
  | "cpu"
  | "clipboard"
  | "calendar"
  | "menu"
  | "close"
  | "whatsapp"
  | "send"
  | "chat"
  | "minimize"
  | "check"
  | "pin"
  | "phone"
  | "mail"
  | "clock"
  | "arrowRight";

const paths: Record<IconName, JSX.Element> = {
  tooth: (
    <path d="M12 4c-1.7 0-2.7 1-3.7 1S6.4 4 5 4C3.3 4 2 5.6 2 8c0 2 .8 3 1.2 4.6.4 1.7.5 4.7 1.8 6.6.6.9 1.3 1.3 2 .8.9-.6.7-2.3 1-3.6.2-1 .6-1.8 2-1.8s1.8.8 2 1.8c.3 1.3.1 3 1 3.6.7.5 1.4.1 2-.8 1.3-1.9 1.4-4.9 1.8-6.6C21.2 11 22 10 22 8c0-2.4-1.3-4-3-4-1.4 0-2.3 1-3.3 1S13.7 4 12 4Z" />
  ),
  sparkle: (
    <path d="M12 3l1.6 4.9L18.5 9l-4.9 1.6L12 15.5l-1.6-4.9L5.5 9l4.9-1.6L12 3Zm7 10 .8 2.3L22 16l-2.2.7L19 19l-.8-2.3L16 16l2.2-.7L19 13ZM5 14l.9 2.6L8.5 17.5 5.9 18.4 5 21l-.9-2.6L1.5 17.5l2.6-.9L5 14Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </>
  ),
  shield: <path d="M12 2.7 4.5 5.6v6c0 5 3.2 8.6 7.5 10.4 4.3-1.8 7.5-5.4 7.5-10.4v-6L12 2.7Z" />,
  anchor: (
    <>
      <circle cx="12" cy="5" r="2.1" />
      <path d="M12 7.1V21M6 13H2.5A9.5 9.5 0 0 0 12 21a9.5 9.5 0 0 0 9.5-8H18M6 13a6 6 0 0 0 6 6M18 13a6 6 0 0 1-6 6" />
    </>
  ),
  align: <path d="M4 6h16M4 12h10M4 18h16" />,
  star: <path d="m12 3 2.8 5.9 6.4.7-4.8 4.4 1.3 6.4L12 17.5 6.3 20.4l1.3-6.4-4.8-4.4 6.4-.7L12 3Z" />,
  heart: (
    <path d="M12 20.5s-7.6-4.6-9.8-9C.8 8 2 4.7 5 3.7c2.1-.7 4.1.2 5.3 1.9l1.7 2.3 1.7-2.3c1.2-1.7 3.2-2.6 5.3-1.9 3 1 4.2 4.3 2.8 7.8-2.2 4.4-9.8 9-9.8 9Z" />
  ),
  feather: <path d="M20.5 3.5c-5 0-13 4-15.5 12.5C4 19 5 20 8 19c8.5-2.5 12.5-10.5 12.5-15.5ZM4.5 15.5 9 11M12 8l4-4" />,
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5M8.5 11h7M8.5 14.5h7M8.5 18h4.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10.5h17M8 14h2M14 14h2M8 17.5h2M14 17.5h2" />
    </>
  ),
  menu: <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  whatsapp: (
    <path d="M17 14.2c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4Z M12 2.5A9.5 9.5 0 0 0 3.6 17L2.5 21.5l4.6-1.2A9.5 9.5 0 1 0 12 2.5Z" />
  ),
  send: <path d="M4 12 20.5 3.5 16.5 20l-4.6-6.4L4 12Zm7.9 1.6 3-3" />,
  chat: (
    <path d="M4 5.5h16v10.5H9.5L5 20v-4H4V5.5Z" />
  ),
  minimize: <path d="M6 14h12" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  pin: (
    <>
      <circle cx="12" cy="10.5" r="3" />
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    </>
  ),
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-1 2-2.1 1.9C11 19 5 13 4.6 5.6 4.5 4.5 5.4 3.5 6.5 3.5Z" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 6.5 7.5 6 7.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 1.9" />
    </>
  ),
  arrowRight: <path d="M4 12h15.5M13.5 6l6 6-6 6" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, className = "w-5 h-5", ...rest }: IconProps) {
  const filled = name === "whatsapp" || name === "tooth" || name === "star" || name === "heart" || name === "chat" || name === "shield";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
