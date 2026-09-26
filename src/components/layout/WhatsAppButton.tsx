import { CLINIC, WHATSAPP_DEFAULT_MESSAGE } from "../../data/clinicData";
import Icon from "../ui/Icon";

/**
 * Floating WhatsApp CTA. Update CLINIC.whatsappNumber in src/data/clinicData.ts
 * with a real, international-format number (digits only, no "+").
 */
export default function WhatsAppButton() {
  const href = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 bottom-5 left-5 sm:bottom-6 sm:left-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <Icon name="whatsapp" className="w-7 h-7" />
    </a>
  );
}
