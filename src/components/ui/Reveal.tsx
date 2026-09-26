import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: "div" | "li";
}

/** Wraps content in a single, restrained fade+slide-up reveal on scroll. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`${isVisible ? "animate-fade-slide-up" : "opacity-0"} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
