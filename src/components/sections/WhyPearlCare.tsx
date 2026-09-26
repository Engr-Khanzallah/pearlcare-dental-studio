import { BENEFITS } from "../../data/clinicData";
import { STOCK, img } from "../../data/stockImages";
import Reveal from "../ui/Reveal";

export default function WhyPearlCare() {
  return (
    <section className="bg-stone/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="text-jade font-semibold text-sm mb-4 tracking-wide uppercase">Why PearlCare</p>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.15] text-ink max-w-md">
              Care designed around you.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-line/80 border-t border-line/80">
              {BENEFITS.map((benefit, i) => (
                <li key={benefit.title} className="flex items-start gap-4 py-4">
                  <span className="font-display text-jade/50 text-base w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{benefit.title}</p>
                    <p className="text-sm text-ink-500 mt-0.5">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-14 relative rounded-[2rem] overflow-hidden shadow-soft aspect-[16/8] sm:aspect-[21/8]">
          <img
            src={img(STOCK.clinicInterior, 1400)}
            srcSet={`${img(STOCK.clinicInterior, 800)} 800w, ${img(STOCK.clinicInterior, 1400)} 1400w`}
            sizes="100vw"
            alt="A calm, modern dental clinic interior"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
