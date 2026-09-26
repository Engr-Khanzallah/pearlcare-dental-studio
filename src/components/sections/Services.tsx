import { useState } from "react";
import { SERVICES } from "../../data/clinicData";
import { STOCK, img } from "../../data/stockImages";
import Icon, { type IconName } from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        kicker="What we treat"
        title="Comprehensive care, presented clearly"
        description="From routine checkups to advanced restorative work, every treatment is planned around your comfort and goals."
      />

      <div className="mt-14 grid lg:grid-cols-[1fr_400px] gap-12 items-start">
        <div className="divide-y divide-line border-t border-b border-line">
          {SERVICES.map((service, i) => {
            const isOpen = openId === service.id;
            return (
              <Reveal key={service.id} delay={Math.min(i, 6) * 40}>
                <div>
                  <button
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left group"
                  >
                    <span className="font-display text-jade/50 text-lg w-9 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-11 h-11 rounded-xl bg-jade-100 text-jade flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Icon name={service.icon as IconName} className="w-5 h-5" />
                    </span>
                    <span className="flex-1 font-display text-lg sm:text-xl text-ink">
                      {service.name}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-jade text-jade" : "text-ink-500"
                      }`}
                    >
                      <Icon name="close" className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                    style={{ display: "grid" }}
                  >
                    <div className="overflow-hidden pl-[76px] sm:pl-[84px] pr-10">
                      <p className="text-ink-500 leading-relaxed max-w-md">{service.description}</p>
                      <a href="#appointment" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-jade">
                        Book this service
                        <Icon name="arrowRight" className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="sticky top-28 hidden lg:block">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5]">
            <img
              src={img(STOCK.dentalTools, 700)}
              srcSet={`${img(STOCK.dentalTools, 500)} 500w, ${img(STOCK.dentalTools, 700)} 700w`}
              sizes="380px"
              alt="Close-up of modern dental treatment tools"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl px-4 py-3">
              <p className="text-xs text-ink-500">Full range of care</p>
              <p className="font-display text-lg text-ink">{SERVICES.length} services offered</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
