import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { serviceDetails } from "../content";

export const metadata = {
  title: "Services | Austro Web & Logo"
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Services</p>
        <h1>Web Design, Branding & Automation Built for Australian Business.</h1>
        <p>We specialise in eight services that cover the full lifecycle of an Australian business, from launching a brand, to building the website that sells it, to automating the operations behind it.</p>
      </section>
      <section className="service-detail-list">
        {serviceDetails.map(([title, text, list]) => (
          <article className="service-detail" key={title as string}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            {Array.isArray(list) && (
              <ul>
                {list.map((item) => (
                  <li key={item}><Check size={17} />{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
      <section className="cta quiet">
        <h2>Not sure which service you need?</h2>
        <p>Have a yarn with us. We'll point you in the right direction, even if it's not us.</p>
        <Link className="button primary" href="/contact">Book a free 15-minute call <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
