import { JOURNEY_STEPS } from "../../data/clinicData";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function PatientJourney() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading align="center" kicker="Your visit" title="Your journey to a healthier smile" />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {JOURNEY_STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 90} className="relative">
            <div className="flex flex-col gap-4">
              <span className="font-display text-4xl text-jade/40">{step.number}</span>
              <h3 className="font-display text-xl text-ink">{step.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{step.description}</p>
            </div>
            {i < JOURNEY_STEPS.length - 1 && (
              <span className="hidden lg:block absolute top-5 left-[calc(100%-1rem)] w-[calc(100%-2rem)] border-t border-dashed border-line" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
