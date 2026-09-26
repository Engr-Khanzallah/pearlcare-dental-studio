import { TECH_FEATURES } from "../../data/clinicData";
import { STOCK, img } from "../../data/stockImages";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function SmarterTechnology() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] order-2 lg:order-1">
        <img
          src={img(STOCK.dentalTools, 800)}
          srcSet={`${img(STOCK.dentalTools, 500)} 500w, ${img(STOCK.dentalTools, 800)} 800w`}
          sizes="(min-width: 1024px) 520px, 90vw"
          alt="Modern dental equipment and diagnostic tools"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Reveal>

      <div className="order-1 lg:order-2">
        <SectionHeading
          kicker="Technology"
          title="Smarter technology. More precise care."
          description="Modern tools support faster, more accurate treatment — and a noticeably more comfortable visit."
        />
        <ul className="mt-8 space-y-5">
          {TECH_FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-jade-100 text-jade flex items-center justify-center shrink-0">
                  <Icon name={feature.icon} className="w-[18px] h-[18px]" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{feature.title}</p>
                  <p className="text-sm text-ink-500 mt-0.5">{feature.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
