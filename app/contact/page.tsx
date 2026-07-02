import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import FAQSchema from "../components/FAQSchema";
import FAQSection from "../components/FAQSection";
import PageHero from "../components/PageHero";
import { contact, faqs } from "../content";

const contactCards = [
  { title: "Phone", value: contact.phone, detail: "Talk with our expert team.", icon: Phone },
  { title: "Email", value: contact.email, detail: "Send your project details anytime.", icon: Mail },
  { title: "Address", value: contact.address.join(", "), detail: "Australia-focused digital design agency.", icon: MapPin },
  { title: "Live Chat / Support", value: "Live Chat", detail: "Get support for packages, services, and quotes.", icon: MessageCircle }
];

export const metadata = {
  title: "Contact Us for Logo, Web & Branding Projects",
  description:
    "Contact Austro Web & Logo for logo design, website design, branding, digital marketing, mobile apps, print design, package help, and project support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <FAQSchema faqs={faqs} />
      <PageHero
        eyebrow="Let's Build Something Great"
        heading="Ready to Build Your Brand? Let's Get Started."
        intro="Tell us about your project, ask a question, or share feedback. Our team will review your requirements and help you choose the right digital solution."
        primary={{ label: "Send Message", href: "#contact-form" }}
        secondary={{ label: "View Services", href: "/services" }}
        image="/assets/services/brand/brand_banner.png"
        imageAlt="Get in touch with the Austro Web and Logo team"
      />

      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactCards.map(({ title, value, detail, icon: Icon }, index) => (
            <article className="contact-info-card" key={title} data-aos="fade-up" data-aos-delay={String(index * 80)}>
              <Icon size={24} />
              <h2>{title}</h2>
              <p>
                {title === "Phone" ? <a href={`tel:${contact.phoneTel}`}>{value}</a>
                  : title === "Email" ? <a href={`mailto:${value}`}>{value}</a>
                  : value}
              </p>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-premium-layout">
        <ContactForm />

        <aside className="contact-map-card" data-aos="fade-left">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Austro Web & Logo</h2>
            <p>We support businesses across Australia with logo design, website development, branding, apps, print, and digital marketing.</p>
            <p><Clock size={17} /> {contact.hours}</p>
          </div>
          <iframe title="Map for Austro Web & Logo service area" src="https://www.google.com/maps?q=Australia&output=embed" loading="lazy" />
        </aside>
      </section>

      <FAQSection
        className="contact-faq"
        eyebrow="Support"
        title="Contact FAQ"
        intro="Helpful answers before you send your enquiry or request a quote."
        faqs={faqs}
      />

      <section className="cta newsletter-cta" data-aos="zoom-in">
        <h2>Let&apos;s plan your next move.</h2>
        <p>Share your requirements and we will help you choose the right service, package, and launch path.</p>
        <Link className="button primary" href="/services">Explore Services <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
