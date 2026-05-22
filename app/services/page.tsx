import Link from "next/link";
import { ArrowRight, Check, Gem, Globe, Headphones, MapPin, Palette, PenTool, Printer, Rocket, Smartphone, Sparkles, TrendingUp, Wallet, type LucideIcon } from "lucide-react";
import FAQSchema from "../components/FAQSchema";
import FAQSection from "../components/FAQSection";
import PageHero from "../components/PageHero";
import { faqs, services, whyChooseUs } from "../content";

export const metadata = {
  title: "Web Design, Logo Design & Digital Services",
  description:
    "Explore Austro Web & Logo services including logo design, website design, mobile apps, digital marketing, branding, graphic design, and print design.",
  alternates: { canonical: "/services" }
};

const serviceIcons: Record<string, LucideIcon> = {
  "logo-design-service": PenTool,
  "web-design-and-development-services": Globe,
  "mobile-app-services": Smartphone,
  "digital-marketing-services": TrendingUp,
  "brand-services": Gem,
  "graphics-design-services": Palette,
  "print-services": Printer
};

const whyIcons: LucideIcon[] = [Palette, MapPin, Rocket, TrendingUp, Wallet, Headphones];

const processSteps = [
  { title: "Discovery & Brief", copy: "We learn about your business, goals, audience, and the requirements of your project." },
  { title: "Strategy & Concepts", copy: "We plan the right approach and shape initial concepts around your brand and market." },
  { title: "Design & Development", copy: "Our team produces the work with close attention to detail, quality, and performance." },
  { title: "Review & Delivery", copy: "You review the result, request refinements, and receive final production-ready files." }
];

export default function ServicesPage() {
  return (
    <main className="logo-service-page">
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Our Professional Services"
        heading="Creative Digital Services Built for Ambitious Brands"
        intro="We offer the full scope of creative, development, marketing, and brand services that help businesses launch, scale, rebrand, and stand out in competitive markets."
        primary={{ label: "Get Started", href: "/contact" }}
        secondary={{ label: "View Packages", href: "/packages" }}
        image="/assets/services/website/Webdesign%20UI%20UX.png"
        imageAlt="Creative digital design and development services by Austro Web and Logo"
      />

      <section className="logo-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">What we do</p>
          <h2>Purpose-built services for stronger digital brands.</h2>
          <p>Each service links to a focused page with real Austro Web &amp; Logo content, clean headings, and practical CTAs.</p>
        </div>
        <div className="logo-services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] ?? Sparkles;
            return (
              <article className="capability-card" key={service.slug} data-aos="fade-up" data-aos-delay={String((index % 3) * 85)}>
                <span className="capability-icon"><Icon size={24} /></span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="capability-types">
                  {service.includes.slice(0, 3).map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
                <Link className="capability-link" href={`/services/${service.slug}`}>Learn More <ArrowRight size={16} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="why-choose-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Why choose us</p>
          <h2>Reasons Australian businesses prefer us.</h2>
          <p>We provide high-quality design and digital solutions that help Australian businesses grow faster — backed by professional expertise, transparent processes, and outstanding customer service on every project.</p>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((reason, index) => {
            const Icon = whyIcons[index];
            return (
              <article className="why-card" key={reason.title} data-aos="fade-up" data-aos-delay={String((index % 3) * 80)}>
                <span className="why-icon">{Icon ? <Icon size={24} /> : null}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="service-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Our process</p>
          <h2>A clear path from idea to launch.</h2>
          <p>A simple, proven workflow that keeps every project clear, collaborative, and on schedule.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title} data-aos="fade-up" data-aos-delay={String(index * 80)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="logo-final-cta" data-aos="zoom-in">
        <p className="eyebrow">Let&apos;s work together</p>
        <h2>Not sure which service you need?</h2>
        <p>Talk with our team about your goals and we will recommend the best path for your website, logo, brand, or digital campaign.</p>
        <Link className="button primary" href="/contact">Book a Free Consultation <ArrowRight size={18} /></Link>
      </section>

      <FAQSection
        className="service-faq"
        eyebrow="Questions"
        title="Frequently Asked Questions"
        intro="Answers to common questions about our digital design, development, and marketing services."
        faqs={faqs}
      />
    </main>
  );
}
