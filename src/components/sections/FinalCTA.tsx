import { CLINIC, WHATSAPP_DEFAULT_MESSAGE } from "../../data/clinicData";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`;

  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
        <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-jade/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-sand/15 blur-3xl" />

        <h2 className="relative font-display text-[clamp(1.9rem,5vw,2.75rem)] leading-tight max-w-xl mx-auto">
          Ready for a healthier,
          <br className="hidden sm:block" /> more confident smile?
        </h2>
        <p className="relative mt-4 text-cream/70 max-w-md mx-auto leading-relaxed">
          Book a consultation and take the first step toward healthier, more
          confident smiles.
        </p>
        <div className="relative mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#appointment" variant="secondary">
            Book Appointment
          </Button>
          <Button href={waHref} variant="ghost" className="!border-cream/25 !text-cream hover:!bg-cream/10" icon={<Icon name="whatsapp" className="w-4 h-4" />}>
            Chat on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
