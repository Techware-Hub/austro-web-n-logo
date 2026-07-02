import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import { packages } from "../content";

export const metadata = {
  title: "Logo Design Packages & Pricing",
  description:
    "Compare Austro Web & Logo packages with exact logo design pricing, package names, features, and order CTAs from Logo Basic through Mascot design.",
  alternates: { canonical: "/packages" }
};

export default function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Flexible Pricing Packages"
        heading="Borderline Pricing Plans for All Businesses."
        intro="Select a package aligned with your business objectives and budget. Each package includes professional production, fast concepts, revisions, ownership rights, and dedicated designers."
        primary={{ label: "Choose a Package", href: "#packages" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
        image="/assets/services/logo-design/Premium%20Art%20Work.png"
        imageAlt="Premium package and pricing design by Austro Web and Logo"
      />

      {packages.map((group, index) => (
        <section className="packages-showcase" id={index === 0 ? "packages" : undefined} key={group.group}>
          <div className="section-heading left" data-aos="fade-up">
            <p className="eyebrow">Transparent pricing</p>
            <h2>{group.group}</h2>
            <p>{group.intro}</p>
          </div>
          <div className="packages-grid">
            {group.items.map((item, index) => {
              const recommended = item.name === "Logo Plus";
              return (
                <article className={`pricing-card ${recommended ? "recommended" : ""}`} key={item.name} data-aos="fade-up" data-aos-delay={String((index % 3) * 85)}>
                  {recommended && <span className="recommended-badge"><Sparkles size={15} /> Recommended</span>}
                  <div className="pricing-card-head">
                    <h3>{item.name}</h3>
                    <div className="package-price-row">
                      <strong>{item.price}</strong>
                      <span><s>{item.originalPrice}</s></span>
                    </div>
                  </div>
                  <ul>
                    {item.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
                  </ul>
                  <div className="package-actions">
                    <Link className="button primary" href="/contact">Order Now <ArrowRight size={18} /></Link>
                    <Link className="button secondary contrast" href="/contact">Live Chat <MessageCircle size={17} /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="cta newsletter-cta" data-aos="zoom-in">
        <h2>Need help choosing a package?</h2>
        <p>Tell us what you want to launch and we will recommend the logo package that fits your goals, style, and budget.</p>
        <Link className="button primary" href="/contact">Start with a free quote <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
