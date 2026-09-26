import { CLINIC, WHATSAPP_DEFAULT_MESSAGE } from "../../data/clinicData";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`;

  return (
    <section id="contact" className="bg-jade-100/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <SectionHeading kicker="Visit us" title="Find PearlCare" />

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-surface text-jade flex items-center justify-center shrink-0 shadow-card">
                <Icon name="pin" className="w-4 h-4" />
              </span>
              <div>
                <p className="font-medium text-ink">{CLINIC.addressLine1}</p>
                <p className="text-ink-500 text-sm">{CLINIC.addressLine2}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-surface text-jade flex items-center justify-center shrink-0 shadow-card">
                <Icon name="phone" className="w-4 h-4" />
              </span>
              <p className="font-medium text-ink">{CLINIC.phoneDisplay}</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-surface text-jade flex items-center justify-center shrink-0 shadow-card">
                <Icon name="mail" className="w-4 h-4" />
              </span>
              <p className="font-medium text-ink">{CLINIC.email}</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-surface text-jade flex items-center justify-center shrink-0 shadow-card">
                <Icon name="clock" className="w-4 h-4" />
              </span>
              <div>
                {CLINIC.hours.map((h) => (
                  <p key={h.days} className="text-sm text-ink-500">
                    <span className="font-medium text-ink">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>

          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:-translate-y-0.5 transition-transform duration-200"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="w-full h-full min-h-[320px] rounded-2xl2 overflow-hidden shadow-card border border-line bg-surface relative">
            {/* TODO: replace mapEmbedUrl in clinicData.ts with a real Google Maps embed link */}
            <iframe
              title="Clinic location map"
              src={CLINIC.mapEmbedUrl}
              className="w-full h-full min-h-[320px] grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
