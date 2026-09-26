import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl gap-3`}>
      {kicker && <p className="text-jade font-semibold text-sm">{kicker}</p>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-ink-500 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
