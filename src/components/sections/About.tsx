import { STOCK, img } from "../../data/stockImages";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const PILLARS = [
  { title: "Patient comfort", icon: "feather" as const },
  { title: "Modern technology", icon: "cpu" as const },
  { title: "Personalized care", icon: "clipboard" as const },
  { title: "Clear communication", icon: "chat" as const },
  { title: "Preventive dentistry", icon: "shield" as const },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <Reveal className="order-2 lg:order-1">
        <SectionHeading
          kicker="About PearlCare"
          title="Dental care built around how you actually feel in the chair"
          description="We designed PearlCare Dental Studio around one idea: dental visits should feel calm, clear, and genuinely personal — not rushed or clinical."
        />
        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3.5 border border-line">
              <span className="w-9 h-9 rounded-full bg-jade-100 text-jade flex items-center justify-center shrink-0">
                <Icon name={pillar.icon} className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium text-ink">{pillar.title}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100} className="order-1 lg:order-2">
        <div className="relative aspect-[4/5] rounded-xl2 overflow-hidden shadow-soft">
          <img
            src={img(STOCK.clinicInterior, 800)}
            srcSet={`${img(STOCK.clinicInterior, 500)} 500w, ${img(STOCK.clinicInterior, 800)} 800w`}
            sizes="(min-width: 1024px) 460px, 90vw"
            alt="A calm, modern dental clinic waiting area"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
