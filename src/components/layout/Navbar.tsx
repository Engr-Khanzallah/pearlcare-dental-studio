import { useEffect, useState } from "react";
import { CLINIC, NAV_LINKS } from "../../data/clinicData";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(14,43,43,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-xl text-ink">
          <span className="w-8 h-8 rounded-full bg-jade text-white flex items-center justify-center text-sm">
            PC
          </span>
          {CLINIC.name}
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-[15px] text-ink-500">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-jade transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#appointment" variant="dark" className="!px-5 !py-2.5 text-sm">
            Book Appointment
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-ink/15 text-ink"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <Icon name={isOpen ? "close" : "menu"} className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8 text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 border-b border-line text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 flex flex-col gap-3">
          <Button href="#appointment" variant="dark" onClick={() => setIsOpen(false)}>
            Book Appointment
          </Button>
          <a
            href={`https://wa.me/${CLINIC.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-semibold text-ink"
          >
            <Icon name="whatsapp" className="w-5 h-5 text-jade" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
