import { STOCK, img } from "../../data/stockImages";
import CompareSlider from "../ui/CompareSlider";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function SmilePhoto({ variant }: { variant: "before" | "after" }) {
  return (
    <img
      src={img(STOCK.smileCloseUp, 1400)}
      srcSet={`${img(STOCK.smileCloseUp, 800)} 800w, ${img(STOCK.smileCloseUp, 1400)} 1400w`}
      sizes="(min-width: 1024px) 1100px, 95vw"
      alt={variant === "before" ? "Illustrative before-treatment smile tone" : "Illustrative after-treatment brighter smile"}
      className="w-full h-full object-cover"
      style={
        variant === "before"
          ? { filter: "sepia(0.55) saturate(1.4) brightness(0.92) hue-rotate(-8deg)" }
          : undefined
      }
      loading="lazy"
    />
  );
}

export default function SmileTransformation() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        align="center"
        kicker="Sample Demonstration"
        title="Real care. Visible confidence."
        description="Drag the slider to compare. This is an illustrative color-adjusted demonstration created for this demo — not a real patient result."
      />

      <Reveal delay={100} className="mt-12 rounded-[2rem] overflow-hidden shadow-soft">
        <CompareSlider
          before={<SmilePhoto variant="before" />}
          after={<SmilePhoto variant="after" />}
          className="aspect-[16/9] sm:aspect-[21/9]"
        />
      </Reveal>

      <p className="mt-6 text-xs text-ink-500/70 italic text-center">
        Sample Demonstration — a single photo, color-adjusted for illustration only.
        Individual results vary and require an in-person consultation.
      </p>
    </section>
  );
}
