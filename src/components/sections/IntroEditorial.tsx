import Accent from "../ui/Accent";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";

export default function IntroEditorial() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <Reveal className="lg:col-span-8">
          <p className="text-jade font-semibold text-sm mb-4 tracking-wide uppercase">Our approach</p>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,2.9rem)] leading-[1.18] text-ink">
            Thoughtful dentistry. <Accent>Advanced technology.</Accent>
            <br className="hidden sm:block" /> Better experiences.
          </h2>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4 lg:text-right">
          <p className="text-ink-500 leading-relaxed max-w-xs">
            Every detail of PearlCare — from the first phone call to the final
            checkup — is designed around how patients actually feel.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink group"
          >
            Learn about our approach
            <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
