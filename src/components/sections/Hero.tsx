import { STOCK, img } from "../../data/stockImages";
import Accent from "../ui/Accent";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";

const TRUST_POINTS = ["Advanced Dental Care", "Modern Technology", "Patient-Centered Experience"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-jade-100 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sand-100 blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full bg-jade-100 text-jade-600 px-4 py-1.5 text-xs sm:text-sm font-medium mb-6 tracking-wide uppercase">
            <Icon name="sparkle" className="w-3.5 h-3.5" />
            Now welcoming new patients
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.25rem,6vw,3.6rem)] leading-[1.1] text-ink">
              Healthy smiles begin with <Accent>exceptional</Accent> care.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base sm:text-lg text-ink-500 max-w-lg leading-relaxed">
              Personalized dentistry, advanced technology and thoughtful care —
              designed around your smile.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col sm:flex-row gap-4">
            <Button href="#appointment" variant="dark" icon={<Icon name="arrowRight" className="w-4 h-4" />}>
              Book an Appointment
            </Button>
            <Button href="#services" variant="ghost">
              Explore Our Care
            </Button>
          </Reveal>

          <Reveal delay={320} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-ink-500">
                <Icon name="check" className="w-4 h-4 text-jade" />
                {point}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] sm:aspect-[5/6]">
            <img
              src={img(STOCK.smileCloseUp, 900)}
              srcSet={`${img(STOCK.smileCloseUp, 600)} 600w, ${img(STOCK.smileCloseUp, 900)} 900w, ${img(STOCK.smileCloseUp, 1200)} 1200w`}
              sizes="(min-width: 1024px) 480px, 90vw"
              alt="Close-up of a healthy, confident smile"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32">
              <div className="absolute inset-0 border-2 border-white/90 rounded-lg" style={{ clipPath: "polygon(0 0, 22% 0, 22% 8%, 8% 8%, 8% 22%, 0 22%)" }} />
              <div className="absolute inset-0 border-2 border-white/90 rounded-lg" style={{ clipPath: "polygon(78% 0, 100% 0, 100% 22%, 92% 22%, 92% 8%, 78% 8%)" }} />
              <div className="absolute inset-0 border-2 border-white/90 rounded-lg" style={{ clipPath: "polygon(0 78%, 8% 78%, 8% 92%, 22% 92%, 22% 100%, 0 100%)" }} />
              <div className="absolute inset-0 border-2 border-white/90 rounded-lg" style={{ clipPath: "polygon(78% 100%, 78% 92%, 92% 92%, 92% 78%, 100% 78%, 100% 100%)" }} />
            </div>
          </div>

          {/* Secondary floating image/card, per the editorial reference */}
          <div className="absolute -bottom-8 -left-6 sm:-left-10 w-32 sm:w-40 aspect-[4/5] rounded-2xl overflow-hidden shadow-card border-4 border-cream hidden sm:block animate-float-slow">
            <img
              src={img(STOCK.dentalTools, 300)}
              alt="Modern dental treatment tools"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -top-5 -right-3 sm:-right-6 bg-surface rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-jade-100 text-jade flex items-center justify-center">
              <Icon name="shield" className="w-4 h-4" />
            </span>
            <div className="text-left">
              <p className="text-xs text-ink-500">Care standard</p>
              <p className="text-sm font-semibold text-ink">Gentle & Precise</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
