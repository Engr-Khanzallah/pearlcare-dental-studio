import { useState } from "react";
import { FAQS } from "../../data/clinicData";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading align="center" kicker="FAQ" title="Common questions, answered" />

      <div className="mt-12 divide-y divide-line border-t border-b border-line">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={faq.question} delay={Math.min(i, 5) * 40}>
              <div>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 py-5 text-left"
                >
                  <span className="font-display text-jade/60 text-sm w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium text-ink">{faq.question}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-jade-100 text-jade flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Icon name="close" className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden pl-10">
                    <p className="text-ink-500 leading-relaxed pr-10">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
