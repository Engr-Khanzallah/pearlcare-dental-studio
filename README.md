# PearlCare Dental Studio — Demo Website

A premium, conversion-focused dental clinic website demo built with **React +
TypeScript + Tailwind CSS**. Fictional brand, fictional dentist, fictional
testimonials — built as a template you can re-skin for a real clinic.

Highlights: sticky navbar, animated hero, service grid, dentist profile,
before/after "sample demonstration" section, testimonials, an appointment
form (mock/local state), a floating WhatsApp button, and a floating
**multilingual AI Dental Assistant** (English / Urdu script / Roman Urdu)
built with a rule-based demo engine — no API key required to run it.

## Project structure

```
pearlcare-dental/
├── index.html                     Page shell, fonts, meta/SEO tags
├── src/
│   ├── main.tsx                   React entry point
│   ├── App.tsx                    Assembles all sections in order
│   ├── index.css                  Tailwind + global resets/focus styles
│   ├── data/
│   │   └── clinicData.ts          ⭐ ALL editable content lives here
│   ├── types/
│   │   └── index.ts               Shared TypeScript types
│   ├── hooks/
│   │   └── useReveal.ts           Scroll-reveal IntersectionObserver hook
│   ├── components/
│   │   ├── ui/                    Reusable primitives (Button, Icon, Reveal…)
│   │   ├── layout/                Navbar, Footer, WhatsAppButton
│   │   ├── sections/              One file per homepage section
│   │   └── ai-assistant/
│   │       ├── AIAssistant.tsx    Chat widget UI
│   │       └── chatEngine.ts      Language detection + rule-based replies
└── tailwind.config.ts             Color/type/animation design tokens
```

## How to run it

```bash
npm install
npm run dev        # starts a local dev server (Vite)
npm run build      # type-checks and builds a production bundle to dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

## Where to change things for a real clinic

All of the following live in **`src/data/clinicData.ts`** unless noted:

| What | Where |
|---|---|
| Clinic name, tagline | `CLINIC.name`, `CLINIC.tagline` |
| Phone number | `CLINIC.phoneDisplay` |
| **WhatsApp number** | `CLINIC.whatsappNumber` (digits only, international format, no `+` or spaces) |
| Email | `CLINIC.email` |
| Address | `CLINIC.addressLine1` / `addressLine2` |
| Opening hours | `CLINIC.hours` |
| Google Maps embed | `CLINIC.mapEmbedUrl` — paste a real embed `src` URL |
| Services list | `SERVICES` array (icon key must match one defined in `src/components/ui/Icon.tsx`) |
| Benefits (quick trust section) | `BENEFITS` array |
| Dentist name/bio/expertise | `DENTIST` object in `clinicData.ts` (also remove/adjust `DENTIST_DISCLAIMER` once it's a real person) |
| Testimonials | `TESTIMONIALS` array — replace with real, consented patient reviews |
| Before/after cases | `SMILE_CASES` array, plus swap the placeholder SVGs in `SmileTransformation.tsx` for real (consented) photography |
| FAQ | `FAQS` array |
| Nav links | `NAV_LINKS` array |
| Brand colors/fonts | `tailwind.config.ts` (`colors`, `fontFamily`) |
| Logo mark | `Navbar.tsx` and `Footer.tsx` (currently a "PC" monogram badge) |

## Connecting a real backend

**Appointment form** — `src/components/sections/AppointmentSection.tsx`
`handleSubmit()` currently uses a `setTimeout` to simulate a network call.
Replace that block with a real request, e.g.:

```ts
const res = await fetch("/api/appointments", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**AI Assistant backend / real model** — `src/components/ai-assistant/chatEngine.ts`
`getAssistantReply()` is a rule-based simulation so the demo works with zero
setup. To wire up a real AI model:

1. Add a backend endpoint (never call a model API with a secret key directly
   from the browser).
2. In `AIAssistant.tsx`, replace the `window.setTimeout(...)` block in
   `sendMessage()` with an `async` call to your endpoint, passing the message
   and conversation history.
3. Keep the medical-safety instruction server-side too: the assistant should
   never diagnose, and should always recommend an in-person visit for
   symptoms — see the tone already used in `medicalSymptom` replies in
   `chatEngine.ts` for reference.
4. Keep clinic data (`src/data/clinicData.ts`) as system context so answers
   stay accurate to the real clinic.

**Booking system integration** — once a booking flow in the AI assistant
reaches `bookingStep === "done"` (see `chatEngine.ts`), `bookingDraft` holds
`{ name, phone, service, date, time }`. Send that object to the same
appointments endpoint used by the form.

## v4 update: full editorial/premium redesign

A ground-up redesign to a "premium editorial" direction (warm ivory + charcoal
+ muted sage/gold accent, serif/sans typography pairing, asymmetric layouts)
with an expanded page structure:

- **New color system** — warm ivory background (`cream`), charcoal text
  (`ink`), a single muted green accent (`jade`) and a sparing muted-gold
  accent (`sand`), all in `tailwind.config.ts`. No blue.
- **New typography** — `Fraunces` italic now used as an editorial accent for
  emphasis words in headings (`<Accent>` component), paired with `Manrope`
  for body/UI, and fluid `clamp()` sizing on major headlines so they scale
  smoothly from a 320px phone to a 1440px desktop.
- **Expanded section set** — added `IntroEditorial` (asymmetric statement),
  `WhyPearlCare` (numbered split layout, replaces the old benefits grid),
  `ExperienceSection` (replaces the old "Featured Service" block),
  `SmarterTechnology`, `PatientJourney` (4-step timeline), and `Team.tsx`
  (a 4-dentist editorial team section, replacing the single dentist
  profile — see `DENTISTS` in `clinicData.ts`).
- **Services** — rebuilt as a numbered, expandable accordion list with a
  sticky supporting image, instead of a grid of 8 identical cards.
- **Reviews/"Patient Story"** — one large featured testimonial with a photo,
  plus two smaller supporting testimonials underneath.
- **More placeholder photography** — added a fourth free-to-use (Unsplash
  License) photo, `dentistPatient`, in `src/data/stockImages.ts`, used in the
  new Experience and Patient Story sections.
- **Nav** — updated to About / Services / Technology / Dentists / Reviews /
  FAQ, matching the new section anchors.

## v3 update: redesigned to match a reference layout

Restyled the site to follow a reference design the client shared (photo-led
hero, checklist + photo sections, a full-width drag-to-compare "results"
section, a single-card testimonial carousel, numbered FAQ), while keeping
every section from the original brief.

- **Typography** — added an italic serif accent (`Fraunces` italic) for
  emphasis words in headlines, via the new `<Accent>` component
  (`src/components/ui/Accent.tsx`). Use it like:
  `<Accent>exceptional</Accent>` inside any heading.
- **Buttons** — added a `dark` variant to `Button.tsx` (solid black pill,
  matches the reference's primary CTA style).
- **Placeholder photography** — `src/data/stockImages.ts` centralizes three
  photos, all **free to use under the Unsplash License** (no attribution
  required, commercial use permitted): a smile close-up, a dental
  tools/implant close-up, and a clinic waiting area. They're used in the
  Hero, Benefits, About, Featured Service, and the before/after slider.
  Replace `STOCK` in that file with real clinic photography whenever you're
  ready — every `<img>` that uses it will update automatically.
- **Before/after slider** — now one full-width drag-to-compare panel (reusing
  the same smile photo with a colour filter for "before") instead of three
  small cards, matching the reference's big comparison section.
- **Testimonials** — now a single-card carousel with prev/next arrows and
  dot indicators (`Reviews.tsx`), instead of a static 3-card grid.
- **FAQ** — added numbered rows (01, 02…) to match the reference style.
- **Footer** — darkened to near-black and added a newsletter email field.

## v2 update: colors, illustrations, and a compare slider

- **Palette** — swapped the flat teal/cream look for deep navy (`ink`), a
  vivid teal accent (`jade`), and a soft coral secondary accent (`sand`).
  All defined in `tailwind.config.ts`; nothing else needed to change since
  components reference the token names, not raw hex values.
- **Illustrations** — richer, more detailed SVG art for the dentist portrait,
  hero tooth, and about/technology visuals (no photos used, to avoid
  licensing issues with stock imagery — swap in real photography whenever
  you're ready, see the "Where to change things" table above).
- **New: drag-to-compare slider** — `src/components/ui/CompareSlider.tsx` is
  a reusable, dependency-free before/after slider (mouse, touch, and
  keyboard-accessible). It now powers the "Sample Demonstration" section —
  drag the handle to reveal the "after" state. Reuse it anywhere else you
  want a compare interaction (e.g. a real before/after photo gallery later).

## Notes on the multilingual assistant

Language detection (`detectLanguage` in `chatEngine.ts`) is a lightweight
heuristic for demo purposes: Urdu-script input is detected via Unicode range,
Roman Urdu via a keyword list, otherwise English. It's intentionally simple —
a production integration with a real LLM will handle mixed-language input far
more naturally.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `src/index.css` and `useReveal.ts`).
- Visible keyboard focus ring site-wide.
- No heavy 3D libraries — hero/technology visuals use lightweight inline SVG
  and CSS transforms only.
- Form fields include labels, `aria-invalid`, and inline error states.
