import { STOCK, img } from "../../data/stockImages";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";

const POINTS = [
  "A treatment plan built around your specific needs",
  "Clear explanations before every procedure",
  "Follow-up care to keep your smile healthy long-term",
];

export default function ExperienceSection() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={img(STOCK.dentistPatient, 800)}
              srcSet={`${img(STOCK.dentistPatient, 500)} 500w, ${img(STOCK.dentistPatient, 800)} 800w`}
              sizes="(min-width: 1024px) 520px, 90vw"
              alt="A dentist attentively examining a patient"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-sand font-semibold text-sm mb-3 tracking-wide uppercase">Our approach</p>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,2.9rem)] leading-tight mb-5">
            Expert care when you need it.
          </h2>
          <p className="text-cream/70 leading-relaxed mb-8 max-w-lg">
            Whether it's a routine checkup or an urgent concern, our team gives
            every visit the same unhurried attention — clear communication,
            careful diagnosis, and a plan you understand before we begin.
          </p>
          <ul className="space-y-3 mb-9">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-cream/85">
                <Icon name="check" className="w-5 h-5 text-jade mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <Button href="#about" variant="secondary">
            Meet Our Approach
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
