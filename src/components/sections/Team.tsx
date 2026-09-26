import { DENTISTS, DENTIST_DISCLAIMER } from "../../data/clinicData";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const AVATAR_THEMES = [
  { bg: "#211D19", hair: "#2A1A12", accent: "#4B6357" },
  { bg: "#374A41", hair: "#1C1712", accent: "#B8934F" },
  { bg: "#B8934F", hair: "#2A1A12", accent: "#211D19" },
  { bg: "#6B6459", hair: "#1C1712", accent: "#E6EBE5" },
];

function DentistAvatar({ theme, featured }: { theme: (typeof AVATAR_THEMES)[number]; featured?: boolean }) {
  return (
    <svg viewBox="0 0 240 300" className="absolute inset-0 w-full h-full" role="img" aria-hidden="true">
      <rect width="240" height="300" fill={theme.bg} />
      <circle cx={featured ? 190 : 40} cy={featured ? 50 : 250} r={featured ? 80 : 60} fill={theme.accent} opacity="0.15" />
      <path d="M40 300v-36c0-36 34-58 80-58s80 22 80 58v36Z" fill="#FFFFFF" opacity="0.92" />
      <rect x="108" y="176" width="24" height="32" rx="10" fill="#F1C6A8" />
      <circle cx="120" cy="140" r="44" fill="#F6D3B8" />
      <path d="M78 130c-2-32 19-52 42-52s44 20 42 52c-10-13-25-19-42-19s-32 6-42 19Z" fill={theme.hair} />
      <path d="M100 150c8 7 32 7 40 0" stroke="#211D19" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

export default function Team() {
  const [featuredDentist, ...restDentists] = DENTISTS;

  return (
    <section id="dentists" className="bg-stone/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <SectionHeading kicker="Meet the team" title="Dentists you'll actually want to talk to" />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-6">
          {/* Featured dentist — larger, asymmetric */}
          <Reveal className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
            <DentistAvatar theme={AVATAR_THEMES[0]} featured />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 sm:p-8">
              <p className="text-cream/60 text-xs uppercase tracking-wide mb-1">{featuredDentist.title}</p>
              <h3 className="font-display text-2xl sm:text-3xl text-white">{featuredDentist.name}</h3>
              <p className="text-cream/75 text-sm mt-2 max-w-sm leading-relaxed">{featuredDentist.bio}</p>
              <Button href="#appointment" variant="secondary" className="mt-5 !px-5 !py-2.5 text-sm">
                Book with {featuredDentist.name.split(" ")[1]}
              </Button>
            </div>
          </Reveal>

          {/* Remaining team — smaller grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {restDentists.map((dentist, i) => (
              <Reveal key={dentist.id} delay={(i + 1) * 90} className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
                <DentistAvatar theme={AVATAR_THEMES[i + 1]} />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-4 sm:p-5">
                  <p className="text-cream/60 text-[11px] uppercase tracking-wide">{dentist.title}</p>
                  <h4 className="font-display text-lg text-white leading-tight">{dentist.name}</h4>
                  <p className="text-cream/70 text-xs mt-1.5 leading-relaxed hidden sm:block">
                    {dentist.expertise[0]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-500/70 italic flex items-center gap-2">
          <Icon name="check" className="w-3.5 h-3.5 shrink-0" />
          {DENTIST_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
