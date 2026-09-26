import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes = "px-6 py-3 text-[15px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-cream hover:bg-jade-600 hover:-translate-y-0.5 shadow-card",
  secondary:
    "bg-jade text-white hover:bg-jade-600 hover:-translate-y-0.5 shadow-card",
  dark:
    "bg-[#141414] text-white hover:bg-jade hover:-translate-y-0.5 shadow-card",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/60 hover:bg-ink/5",
};

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", icon, children, className = "", ...rest } = props;
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
