"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = readonly [string, string];

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  faqs: FAQItem[];
  className?: string;
};

export default function FAQSection({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  intro,
  faqs,
  className = ""
}: FAQSectionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) {
    return null;
  }

  return (
    <section className={`faq faq-section ${className}`} data-aos="fade-up">
      <div className="faq-shell">
        <div className="faq-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <article
                className="faq-item"
                data-open={isOpen}
                data-aos="fade-up"
                data-aos-delay={String((index % 6) * 55)}
                key={question}
              >
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="faq-question"
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span>{question}</span>
                  <ChevronDown aria-hidden="true" size={22} />
                </button>
                <div
                  aria-labelledby={buttonId}
                  className="faq-answer-shell"
                  id={panelId}
                  role="region"
                >
                  <div>
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
