"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Clapperboard, Globe, Headphones, MapPin, MousePointer2, Palette, PenTool, Quote, Rocket, Smartphone, Sparkles, Star, TrendingUp, Wallet, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FAQSection from "./FAQSection";
import {
  siAfterpay,
  siFigma,
  siFramer,
  siGoogle,
  siGoogleanalytics,
  siHubspot,
  siMake,
  siNextdotjs,
  siShopify,
  siSketch,
  siStripe,
  siWebflow,
  siWoo,
  siWoocommerce,
  siWordpress,
  siZapier,
  type SimpleIcon
} from "simple-icons";
import { faqs, homeCapabilities, homeServices, packages, testimonials, whyChooseUs } from "../content";
import { portfolioItems } from "../portfolio/portfolioData";

const brandTools: Array<{ label: string; icon: SimpleIcon }> = [
  { label: "Figma", icon: siFigma },
  { label: "Framer", icon: siFramer },
  { label: "Sketch", icon: siSketch },
  { label: "Webflow", icon: siWebflow },
  { label: "Next.js", icon: siNextdotjs },
  { label: "Shopify", icon: siShopify },
  { label: "WooCommerce", icon: siWoocommerce },
  { label: "Woo", icon: siWoo },
  { label: "WordPress", icon: siWordpress },
  { label: "Stripe", icon: siStripe },
  { label: "Afterpay", icon: siAfterpay },
  { label: "Google", icon: siGoogle },
  { label: "Analytics", icon: siGoogleanalytics },
  { label: "HubSpot", icon: siHubspot },
  { label: "Make", icon: siMake },
  { label: "Zapier", icon: siZapier }
];

const logoPortfolio = portfolioItems.filter((item) => item.category === "Logo Design").slice(-6);
const proof = ["Logo concepts in days", "Websites built to convert", "Automation that follows up", "Local SEO foundations"];
const animatedServices = ["Logo Design", "Website Design", "Branding", "Digital Solutions"];
const capabilityIcons = [PenTool, Globe, Smartphone, Clapperboard];
const whyIcons = [Palette, MapPin, Rocket, TrendingUp, Wallet, Headphones];

export default function HighEnergyHome() {
  const shell = useRef<HTMLElement>(null);
  const [toolSliderRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 1200, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);
  const [serviceSliderRef] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
  const featuredPackages = packages[0].items.slice(0, 3);

  useEffect(() => {
    const root = shell.current;
    if (!root) return;

    const move = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };
    const scroll = () => {
      root.style.setProperty("--scroll", `${window.scrollY}`);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <main className="kinetic-site" ref={shell}>
      <section className="kinetic-hero">
        <div className="hero-orbit orbit-one">Logo</div>
        <div className="hero-orbit orbit-two">Web</div>
        <div className="hero-orbit orbit-three">Automation</div>
        <div className="hero-content" data-aos="fade-up">
          <p className="eyebrow">Australian agency. Global production power.</p>
          <h1>Australia’s leading web and logo design company.</h1>
          <p className="typewriter-line" aria-label="Services we provide">
            <span>Premium </span>
            <span className="typewriter-words">
              {animatedServices.map((service) => <b key={service}>{service}</b>)}
            </span>
          </p>
          <p className="lead">Have bespoke, high-converting websites and professional logo design created to increase your brand presence, credibility and sales.</p>
          <div className="button-row">
            <Link className="button primary" href="/contact">Get a Free Consultation <ArrowRight size={18} /></Link>
            <Link className="button electric" href="/portfolio">See Our Work <Sparkles size={18} /></Link>
          </div>
          <div className="tool-dock" aria-label="Creative and production tools">
            {brandTools.slice(0, 5).map(({ label, icon }) => <BrandMark key={label} label={label} icon={icon} />)}
          </div>
        </div>
        <div className="hero-dashboard" aria-label="Production status dashboard">
          <span>Live launch board</span>
          <strong>Brand + Site + Follow-up</strong>
          <div className="signal-bars"><i /><i /><i /><i /></div>
          <p>Quote request becomes a booked conversation while you are still on the tools.</p>
        </div>
      </section>

      <section className="marquee-band" aria-label="Capabilities">
        <div className="embla logo-slider" ref={toolSliderRef}>
          <div className="embla-track">
            {[...brandTools, ...brandTools].map(({ label, icon }, index) => (
              <div className="brand-slide" key={`${label}-${index}`}>
                <BrandMark label={label} icon={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-cinematic">
        <div className="sticky-copy" data-aos="fade-up">
          <p className="eyebrow">Mission</p>
          <h2>We’re on a mission to build brands that perform.</h2>
          <p>Austro Web & Logo helps businesses expand through strategic web design, distinctive logo production, brand systems, and information-driven digital advertising.</p>
        </div>
        <div className="motion-stack">
          {proof.map((item, index) => (
            <article className="motion-card" key={item} style={{ "--i": index } as CSSProperties} data-aos="fade-up" data-aos-delay={String(index * 80)}>
              <BadgeCheck size={24} />
              <h3>{item}</h3>
              <p>{["Identity", "Build", "Flow", "Rank"][index]} layer locked before launch.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-reel">
        <div className="section-heading left" data-aos="fade-up">
          <p className="eyebrow">Services</p>
          <h2>Our professional digital and design services.</h2>
          <p>We offer the full scope of creative, development, and marketing services that help businesses launch, scale, and shine in a competitive market.</p>
        </div>
        <div className="embla service-embla" ref={serviceSliderRef}>
        <div className="reel-track embla-track">
          {homeServices.map(({ title, text, slug }, index) => (
            <Link href={`/services/${slug}`} className="reel-card" key={title} data-aos="zoom-in" data-aos-delay={String((index % 4) * 70)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">What we build</p>
          <h2>Specialised design and development capabilities.</h2>
          <p>From custom logos to full digital products, our team delivers focused expertise across every service Australian businesses need to grow.</p>
        </div>
        <div className="capability-grid">
          {homeCapabilities.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article className="capability-card" key={capability.title} data-aos="fade-up" data-aos-delay={String((index % 2) * 90)}>
                <span className="capability-icon">{Icon ? <Icon size={26} /> : null}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <ul className="capability-types">
                  {capability.types.map((type) => <li key={type}><Check size={15} />{type}</li>)}
                </ul>
                <Link className="capability-link" href={capability.href}>Learn more <ArrowRight size={16} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="automation-theatre">
        <div data-aos="fade-up">
          <p className="eyebrow">Business automation VIC</p>
          <h2>The solutions that are most professional for your business.</h2>
          <p>Whether you need to launch, scale, or rebrand, our team helps your brand look modern, measure performance, and stand out in a competitive market.</p>
          <Link className="button primary" href="/services">Explore Services <ArrowRight size={18} /></Link>
        </div>
        <div className="reason-video-col" data-aos="fade-left">
          <video className="reason-video" autoPlay muted loop playsInline>
            <source src="/assets/video/reason.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="logo-lab">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Logo portfolio energy</p>
          <h2>Check our inspiring logo design portfolio.</h2>
          <p>We take pride in creative designs crafted for clients over the years, reflecting our dedication to excellence and memorable brand identity.</p>
        </div>
        <div className="portfolio-grid">
          {logoPortfolio.map((item, index) => (
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
          <Link className="button primary" href="/portfolio">View Full Portfolio <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="pricing-stage">
        <div className="section-heading left" data-aos="fade-up">
          <p className="eyebrow">Fixed-price launch paths</p>
          <h2>Borderline pricing plans for all businesses.</h2>
          <p>Select a package aligned with your business objectives and budget.</p>
        </div>
        <div className="packages-grid">
          {featuredPackages.map((item, index) => {
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
        <div className="featured-packages-more" data-aos="fade-up">
          <Link className="button primary" href="/packages">View More Packages <ArrowRight size={18} /></Link>
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
        <div className="why-cta" data-aos="fade-up">
          <Link className="button primary" href="/contact">Get Started Now <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="impact-video">
        <div className="impact-frame">
          <div className="impact-copy" data-aos="fade-right">
            <MousePointer2 size={34} />
            <h2>Crafted with precision, built for performance.</h2>
            <p>Browse web designs, logos, branding, and digital work created to help businesses build stronger visibility and credibility.</p>
          </div>
          <div className="impact-visual" data-aos="fade-left">
            <Image src="/assets/services/website/Powerful%20&%20Future-Prospective%20Web%20designs.png" alt="Web design, branding, and digital work crafted by Austro Web and Logo" width={640} height={520} />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Client stories</p>
          <h2>What our clients say.</h2>
          <p>We&apos;re proud to partner with businesses across Australia, helping them grow through strong design and digital solutions.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name} data-aos="fade-up" data-aos-delay={String(index * 90)}>
              <Quote className="testimonial-quote-mark" size={30} />
              <div className="testimonial-stars" aria-label="Rated 5 out of 5">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {testimonial.name.split(" ").map((part) => part[0]).join("")}
                </span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="make-impact" data-aos="zoom-in">
        <p className="eyebrow">Stand out</p>
        <h2>Make an impact with a unique logo from a leading design agency.</h2>
        <p>Want a distinctive logo for your business? Our designers will craft a custom logo that properly represents your brand and attracts customers — with exclusive discounts on every logo design project.</p>
        <Link className="button primary" href="/contact">Start Creating <Sparkles size={18} /></Link>
      </section>

      <section className="cta kinetic-cta">
        <h2>Ready to build your brand? Let’s get started.</h2>
        <p>If you want to discuss a new project, ask a question, or share feedback, we’re here and happy to listen.</p>
        <Link className="button primary" href="/contact">Get Started Now <ArrowRight size={18} /></Link>
      </section>

      <FAQSection
        className="home-faq"
        eyebrow="Questions"
        title="Frequently Asked Questions"
        intro="Quick answers about our logo design, website development, branding, digital marketing, mobile apps, print design, graphic design, packages, and process."
        faqs={faqs}
      />

      <div className="scroll-pulse"><Zap size={16} /> Scroll</div>
    </main>
  );
}

function BrandMark({ label, icon }: { label: string; icon: SimpleIcon }) {
  return (
    <span
      className="brand-icon"
      aria-label={label}
      title={label}
      style={{ "--brand-color": `#${icon.hex}` } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}
