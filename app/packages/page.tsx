import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { packages } from "../content";

export const metadata = {
  title: "Packages | Austro Web & Logo"
};

export default function PackagesPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">AUD pricing</p>
        <h1>Fixed-Price Packages. No Surprises.</h1>
        <p>Every package is fixed-price in Australian dollars, GST inclusive, with milestone payments and clear deliverables. Need something custom? We build those too.</p>
      </section>
      {packages.map((group) => (
        <section className="package-section" key={group.group}>
          <h2>{group.group}</h2>
          <div className="package-grid">
            {group.items.map(([name, price, desc, items]) => (
              <article className="package-card" key={name as string}>
                <div>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
                <strong>{price}</strong>
                <ul>
                  {(items as string[]).map((item) => <li key={item}><Check size={16} />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="fine-print">
        <h2>Fine Print</h2>
        <p>All prices are in Australian dollars, GST inclusive. 50% deposit to begin work, with the balance due before launch or final delivery. Every project comes with full ownership of final files.</p>
        <Link className="button primary" href="/contact">Start with a free quote <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
