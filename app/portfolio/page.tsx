import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  ["Roxburgh Trade Co.", "Trades - VIC", "A lean service site, quote funnel and local SEO base for a growing trade business.", "Enquiries up 38% after launch."],
  ["Northside Market", "Retail - Melbourne", "A brand refresh and Shopify build with clearer product paths and trust signals.", "Checkout completion improved across mobile."],
  ["BrightOps Studio", "Startup - Australia-wide", "Brand identity, product landing page and onboarding automation for a new SaaS offer.", "First campaign launched in under four weeks."]
];

export const metadata = {
  title: "Portfolio | Austro Web & Logo"
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Portfolio</p>
        <h1>Australian Businesses We've Helped Build.</h1>
        <p>A snapshot of recent work for SMEs, startups and tradies across Australia. Every project starts with the same question: what does success look like? Then we build to it.</p>
      </section>
      <section className="filter-row" aria-label="Portfolio filters">
        {["All Work", "Web Design", "Logo Design", "E-Commerce", "Branding", "Automation"].map((filter) => <span key={filter}>{filter}</span>)}
      </section>
      <section className="portfolio-list">
        {projects.map(([name, industry, brief, result], index) => (
          <article className="case-study" key={name}>
            <div className="case-image">
              <Image
                src={`https://images.unsplash.com/${index === 1 ? "photo-1516321318423-f06f85e504b3" : index === 2 ? "photo-1519389950473-47ba0277781c" : "photo-1500530855697-b586d89ba3ee"}?auto=format&fit=crop&w=1200&q=80`}
                alt={`${name} website and brand work preview`}
                fill
              />
            </div>
            <div>
              <p className="eyebrow">{industry}</p>
              <h2>{name}</h2>
              <p><strong>The Brief:</strong> {brief}</p>
              <p><strong>The Result:</strong> {result}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="cta quiet">
        <h2>Want to see your business here next?</h2>
        <Link className="button primary" href="/contact">Start Your Project <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
