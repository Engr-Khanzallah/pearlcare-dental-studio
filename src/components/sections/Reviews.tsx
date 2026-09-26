import { TESTIMONIALS } from "../../data/clinicData";
import { STOCK, img } from "../../data/stockImages";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Reviews() {
  const [featured, ...supporting] = TESTIMONIALS;

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        kicker="Demo Testimonials"
        title="Real patients. Real smiles."
        description="Illustrative testimonials written for this demo, representative of the tone real patient feedback might take."
      />

      <div className="mt-14 grid lg:grid-cols-2 gap-6 items-stretch">
        <Reveal className="relative rounded-[2rem] overflow-hidden shadow-soft min-h-[340px]">
          <img
            src={img(STOCK.dentistPatient, 800)}
            srcSet={`${img(STOCK.dentistPatient, 500)} 500w, ${img(STOCK.dentistPatient, 800)} 800w`}
            sizes="(min-width: 1024px) 520px, 90vw"
            alt="A patient during a dental consultation"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={100} className="bg-surface rounded-[2rem] border border-line shadow-card p-8 sm:p-10 flex flex-col justify-center">
          <div className="flex gap-1 text-jade mb-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Icon key={idx} name="star" className="w-4 h-4" />
            ))}
          </div>
          <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed">
            “{featured.quote}”
          </p>
          <div className="mt-7 flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-jade text-white flex items-center justify-center font-semibold text-sm">
              {featured.name.split(" ").map((p) => p[0]).join("")}
            </span>
            <div>
              <p className="font-semibold text-ink text-sm">{featured.name}</p>
              <p className="text-xs text-ink-500">
                {featured.role} • {featured.service}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {supporting.map((t, i) => (
          <Reveal key={t.name} delay={(i + 1) * 80}>
            <div className="h-full bg-surface rounded-2xl border border-line p-6 shadow-card flex flex-col">
              <div className="flex gap-1 text-jade mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon key={idx} name="star" className="w-3.5 h-3.5" />
                ))}
              </div>
              <p className="text-ink-500 leading-relaxed text-sm flex-1">“{t.quote}”</p>
              <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                <p className="font-semibold text-ink text-sm">{t.name}</p>
                <span className="text-xs bg-jade-100 text-jade-600 px-2.5 py-1 rounded-full font-medium">
                  {t.service}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
