import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Palette, PenTool, Shapes, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import FAQSchema from "./FAQSchema";
import FAQSection from "./FAQSection";
import { packages } from "../content";
import { portfolioItems } from "../portfolio/portfolioData";
import type { ServicePageContent } from "../servicePageContent";

const highlightIcons = [Sparkles, Target, Zap, ShieldCheck];

const portfolioCategoryBySlug: Record<string, string> = {
  "logo-design-service": "Logo Design",
  "web-design-and-development-services": "Website",
  "brand-services": "Branding",
  "graphics-design-services": "Graphic Design",
  "print-services": "Print Design",
  "mobile-app-services": "Mobile Apps"
};

export default function ServicePage({ content }: { content: ServicePageContent }) {
  const introSection = content.introSections[0];
  const whyRows = content.introSections.slice(1);
  const heroPoints = content.highlights.slice(0, 3).map((item) => item.title);
  const whyBullets = content.highlights.map((item) => item.title);

  const portfolioCategory = portfolioCategoryBySlug[content.slug];
  const portfolioPreview = portfolioCategory
    ? portfolioItems.filter((item) => item.category === portfolioCategory).slice(-6)
    : [];

  const showPackages = content.slug === "logo-design-service";
  const logoPackages = packages[0].items.slice(0, 3);

  return (
    <main className="logo-service-page">
      {content.faqs && <FAQSchema faqs={content.faqs} />}

      <section className="logo-hero">
        <div className="logo-hero-bg" aria-hidden="true">
          <span className="logo-hero-blob blob-1" />
          <span className="logo-hero-blob blob-2" />
          <span className="logo-hero-blob blob-3" />
        </div>
        <div className="logo-hero-inner">
          <div className="logo-hero-copy" data-aos="fade-up">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.hero.heading}</h1>
            <p className="logo-hero-lead">{content.hero.copy[0]}</p>
            <div className="button-row">
              <Link className="button primary" href="/contact">Get Started <ArrowRight size={18} /></Link>
              <Link className="button secondary contrast" href="/portfolio">See Portfolio</Link>
            </div>
            <ul className="logo-hero-points">
              {heroPoints.map((point) => <li key={point}><Check size={15} />{point}</li>)}
            </ul>
          </div>
          <div className="logo-hero-visual" data-aos="fade-left">
            <div className="logo-hero-frame">
              <Image src={content.hero.image} alt={content.hero.imageAlt} width={720} height={600} priority />
            </div>
            <span className="logo-hero-float float-1"><PenTool size={22} /></span>
            <span className="logo-hero-float float-2"><Shapes size={22} /></span>
            <span className="logo-hero-float float-3"><Palette size={22} /></span>
            <span className="logo-hero-float float-4"><Sparkles size={20} /></span>
          </div>
        </div>
      </section>

      <section className="logo-intro-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Why Austro Web &amp; Logo</p>
          <h2>{introSection.heading}</h2>
          <p>{introSection.copy[0]}</p>
        </div>
        <div className="logo-highlight-grid">
          {content.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <article className="logo-highlight-card" key={item.title} data-aos="fade-up" data-aos-delay={String((index % 4) * 80)}>
                <span className="logo-highlight-icon">{Icon ? <Icon size={24} /> : null}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      {whyRows.map((section, index) => {
        const reversed = index % 2 === 1;
        const isFirst = index === 0;
        const extras = isFirst ? (
          <>
            <ul className="logo-why-bullets">
              {whyBullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}
            </ul>
            <Link className="button primary" href="/contact">Get Started <ArrowRight size={18} /></Link>
          </>
        ) : null;

        if (!section.image) {
          return (
            <section className="logo-why-section solo" key={section.heading}>
              <div className="logo-why-copy" data-aos="fade-up">
                <p className="eyebrow">Why it matters</p>
                <h2>{section.heading}</h2>
                {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {extras}
              </div>
            </section>
          );
        }

        return (
          <section className={`logo-why-section${reversed ? " reverse" : ""}`} key={section.heading}>
            <div className="logo-why-copy" data-aos={reversed ? "fade-left" : "fade-right"}>
              <p className="eyebrow">Why it matters</p>
              <h2>{section.heading}</h2>
              {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {extras}
            </div>
            <div className="logo-why-visual" data-aos={reversed ? "fade-right" : "fade-left"}>
              <Image src={section.image} alt={section.imageAlt ?? section.heading} width={640} height={520} />
            </div>
          </section>
        );
      })}

      <section className="logo-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">What we offer</p>
          <h2>{content.servicesHeading}</h2>
          <p>{content.servicesCopy}</p>
        </div>
        <div className="logo-services-grid">
          {content.cards.map((card, index) => (
            <article className="logo-service-card" key={card.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 85)}>
              {card.image && (
                <div className="logo-service-media">
                  <Image src={card.image} alt={card.imageAlt ?? card.title} width={480} height={320} />
                </div>
              )}
              <div className="logo-service-body">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {content.process && (
        <section className="logo-process-section">
          <div className="section-heading" data-aos="fade-up">
            <p className="eyebrow">Our process</p>
            <h2>{content.processHeading}</h2>
            {content.processCopy && <p>{content.processCopy}</p>}
          </div>
          <div className="logo-process-grid">
            {content.process.map((step, index) => (
              <article className="logo-step-card" key={step.title} data-aos="fade-up" data-aos-delay={String(index * 80)}>
                <span className="logo-step-number">{String(index + 1).padStart(2, "0")}</span>
                {step.image && (
                  <span className="logo-step-icon">
                    <Image src={step.image} alt={step.imageAlt ?? step.title} width={52} height={52} />
                  </span>
                )}
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {content.trustHeading && (
        <section className="logo-trust-section" data-aos="fade-up">
          <p className="eyebrow">Trusted by Australian businesses</p>
          <h2>{content.trustHeading}</h2>
          {content.trustCopy?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      )}

      {portfolioPreview.length > 0 && (
        <section className="logo-portfolio-section">
          <div className="section-heading" data-aos="fade-up">
            <p className="eyebrow">Recent work</p>
            <h2>Our creative portfolio.</h2>
            <p>A glimpse of work crafted for brands across different industries.</p>
          </div>
          <div className="portfolio-grid">
            {portfolioPreview.map((item, index) => (
              <article className="portfolio-card" key={`${item.category}-${item.title}`} data-aos="fade-up" data-aos-delay={String((index % 3) * 80)}>
                <Image src={item.image} alt={item.alt} width={640} height={480} />
                <div className="portfolio-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="logo-section-cta" data-aos="fade-up">
            <Link className="button primary" href="/portfolio">View Portfolio <ArrowRight size={18} /></Link>
          </div>
        </section>
      )}

      {showPackages && (
        <section className="logo-packages-section">
          <div className="section-heading" data-aos="fade-up">
            <p className="eyebrow">Logo design packages</p>
            <h2>Pricing built for every business.</h2>
            <p>Choose a logo design package aligned with your goals and budget — each includes professional production, fast concepts, and full ownership rights.</p>
          </div>
          <div className="packages-grid">
            {logoPackages.map((item, index) => {
              const recommended = item.name === "Logo Plus";
              return (
                <article className={`pricing-card ${recommended ? "recommended" : ""}`} key={item.name} data-aos="fade-up" data-aos-delay={String((index % 3) * 90)}>
                  {recommended && <span className="recommended-badge"><Sparkles size={15} /> Recommended</span>}
                  <div className="pricing-card-head">
                    <h3>{item.name}</h3>
                    <div className="package-price-row">
                      <strong>{item.price}</strong>
                      <span><s>{item.originalPrice}</s></span>
                    </div>
                  </div>
                  <ul>
                    {item.features.slice(0, 5).map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
                  </ul>
                  <div className="package-actions">
                    <Link className="button primary" href="/contact">Order Now <ArrowRight size={18} /></Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="logo-section-cta" data-aos="fade-up">
            <Link className="button primary" href="/packages">View Packages <ArrowRight size={18} /></Link>
          </div>
        </section>
      )}

      {content.faqs && (
        <FAQSection
          className="service-faq"
          eyebrow="Questions"
          title={content.faqHeading ?? "Frequently Asked Questions"}
          intro={`Answers to common questions about ${content.title.toLowerCase()} with Austro Web & Logo.`}
          faqs={content.faqs}
        />
      )}

      <section className="logo-final-cta" data-aos="zoom-in">
        <p className="eyebrow">Let&apos;s work together</p>
        <h2>{content.ctaHeading}</h2>
        <p>{content.ctaCopy}</p>
        <Link className="button primary" href="/contact">Get Started <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
