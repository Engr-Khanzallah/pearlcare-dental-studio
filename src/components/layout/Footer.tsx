import { CLINIC, NAV_LINKS, SERVICES } from "../../data/clinicData";
import Icon from "../ui/Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] text-cream/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <span className="flex items-center gap-2 font-display text-xl text-white">
            <span className="w-8 h-8 rounded-full bg-jade text-white flex items-center justify-center text-sm">
              PC
            </span>
            {CLINIC.name}
          </span>
          <p className="text-sm leading-relaxed max-w-xs">{CLINIC.tagline}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-2 flex items-center gap-2 max-w-xs"
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address for newsletter"
              className="flex-1 min-w-0 rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-jade transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 h-10 shrink-0 rounded-full bg-jade text-white flex items-center justify-center hover:bg-jade-600 transition-colors"
            >
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>
          </form>

          <div className="flex gap-3 pt-1">
            {/* Social placeholders — replace hrefs with real profiles */}
            {["Instagram", "Facebook", "Google"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs hover:border-white/50 transition-colors"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#services" className="hover:text-white transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="pin" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                {CLINIC.addressLine1}
                <br />
                {CLINIC.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4 shrink-0" />
              {CLINIC.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 shrink-0" />
              {CLINIC.email}
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                {CLINIC.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-cream/50">
          <p>
            © {year} {CLINIC.name}. Demo concept site — fictional clinic for portfolio purposes.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
