import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PortfolioGallery from "../components/PortfolioGallery";
import { portfolioCategories, portfolioItems } from "./portfolioData";

export const metadata = {
  title: "Portfolio | Logo, Website, Print & App Design Work",
  description:
    "Explore Austro Web & Logo portfolio designs across logo design, 2D logos, 3D logos, websites, print design, mobile apps, animation, and brand categories.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Creative Portfolio"
        heading="Explore the Industry's Most Magnificent Portfolio."
        intro="We provide our clients with high-quality branding products, all backed by a 24/7 support team. Browse creative portfolio designs shaped for brands that need memorable, polished, and performance-focused visuals."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Packages", href: "/packages" }}
        image="/assets/services/graphic%20designer/Portfolio%20of%20Creative%20Graphic%20Design.png"
        imageAlt="Austro Web and Logo creative portfolio showcase"
      />

      <section className="portfolio-showcase">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Creative Portfolio Designs</p>
          <h2>Design work made to represent ambitious brands.</h2>
          <p>Our portfolio is a testament to our passion for design and our commitment to creating unique and memorable products that accurately represent our clients&apos; brands.</p>
        </div>
        <PortfolioGallery categories={portfolioCategories} items={portfolioItems} />
      </section>

      <section className="service-process-section portfolio-process">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Simple process</p>
          <h2>The Perfect Designs From Us to You in 3 Steps.</h2>
          <p>Delivering top-notch designs for your business in three easy steps.</p>
        </div>
        <div className="process-grid">
          {[
            ["Consultation", "We gather important details of your business, such as values, mission, and target audience, so our designers understand your brand."],
            ["Feedback and Revision", "After the first version is done, we share it with you for feedback. You can request revisions until you are happy with the outcome."],
            ["Handing it Over", "When you approve the final design, we give you all necessary high-resolution files for print and digital use."]
          ].map(([title, copy], index) => (
            <article className="process-card" key={title} data-aos="fade-up" data-aos-delay={String(index * 80)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta newsletter-cta" data-aos="zoom-in">
        <h2>Feeling Dazed? Our Designs Have That Effect.</h2>
        <p>Engage our custom logo design services for all your design needs and enjoy exclusive discounts on every project.</p>
        <Link className="button primary" href="/contact">Get Started Now <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
