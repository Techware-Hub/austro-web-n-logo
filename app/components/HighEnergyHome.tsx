"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle, MousePointer2, Sparkles, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
import { packages, services } from "../content";

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

const logoWall = brandTools.slice(0, 10);
const proof = ["Logo concepts in days", "Websites built to convert", "Automation that follows up", "Local SEO foundations"];

export default function HighEnergyHome() {
  const shell = useRef<HTMLElement>(null);
  const [toolSliderRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 1200, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);
  const [serviceSliderRef] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
  const [logoSliderRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 1600, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);
  const [priceSliderRef] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });

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
        <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80">
          <source src="/assets/austro-command-loop.webm" type="video/webm" />
        </video>
        <div className="cursor-glow" />
        <div className="hero-orbit orbit-one">Logo</div>
        <div className="hero-orbit orbit-two">Web</div>
        <div className="hero-orbit orbit-three">Automation</div>
        <div className="hero-content">
          <p className="eyebrow">Australian agency. Global production power.</p>
          <h1>Brands, websites and automations that move.</h1>
          <p className="lead">Web Design Melbourne businesses trust, Logo Design Australia-wide, and Business Automation VIC operators rely on. Built for SMEs, startups and tradies who want the full launch engine.</p>
          <div className="button-row">
            <Link className="button primary" href="/contact">Get a Free Quote <ArrowRight size={18} /></Link>
            <Link className="button electric" href="/portfolio">Watch the Work Move <Sparkles size={18} /></Link>
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
        <div className="sticky-copy">
          <p className="eyebrow">Mission</p>
          <h2>We build brands that perform.</h2>
          <p>A website should earn its keep. A logo should do more than look pretty. We specialise in joining the two: design that converts, branding that lasts, and automation that scales the business behind it.</p>
        </div>
        <div className="motion-stack">
          {proof.map((item, index) => (
            <article className="motion-card" key={item} style={{ "--i": index } as CSSProperties}>
              <BadgeCheck size={24} />
              <h3>{item}</h3>
              <p>{["Identity", "Build", "Flow", "Rank"][index]} layer locked before launch.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-reel">
        <div className="section-heading left">
          <p className="eyebrow">Services</p>
          <h2>Everything you need to launch, sell and follow up.</h2>
        </div>
        <div className="embla service-embla" ref={serviceSliderRef}>
        <div className="reel-track embla-track">
          {services.map(([title, text], index) => (
            <Link href="/services" className="reel-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <section className="automation-theatre">
        <div>
          <p className="eyebrow">Business automation VIC</p>
          <h2>Missed calls, slow quotes and forgotten follow-ups get engineered out.</h2>
          <p>Lead capture, SMS replies, booking nudges, quote-to-invoice flows and review requests, designed around how Australian operators actually work.</p>
          <Link className="button primary" href="/services">Explore Automation <ArrowRight size={18} /></Link>
        </div>
        <div className="video-shell">
          <video autoPlay muted loop playsInline>
            <source src="/assets/austro-automation-loop.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <section className="logo-lab">
        <div className="section-heading">
          <p className="eyebrow">Logo portfolio energy</p>
          <h2>Identity systems made to travel.</h2>
          <p>Utes, uniforms, invoices, socials, websites, booking pages. Your brand needs to work everywhere your customer meets you.</p>
        </div>
        <div className="embla logo-wall-slider" ref={logoSliderRef}>
        <div className="logo-wall embla-track">
          {[...logoWall, ...logoWall].map(({ label, icon }, index) => (
            <div className="logo-tile" key={`${label}-${index}`}>
              <BrandMark label={label} icon={icon} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="pricing-stage">
        <div className="section-heading left">
          <p className="eyebrow">Fixed-price launch paths</p>
          <h2>Packages with movement, not mystery.</h2>
        </div>
        <div className="embla pricing-embla" ref={priceSliderRef}>
        <div className="pricing-river embla-track">
          {packages.flatMap((group) => group.items.slice(0, 2)).map(([name, price, desc]) => (
            <Link href="/packages" className="price-chip" key={name as string}>
              <strong>{price}</strong>
              <span>{name}</span>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <section className="impact-video">
        <div className="impact-frame">
          <video autoPlay muted loop playsInline>
            <source src="/assets/austro-command-loop.webm" type="video/webm" />
          </video>
          <div>
            <MousePointer2 size={34} />
            <h2>Make an impact before the first scroll ends.</h2>
            <p>High-converting sites, original logo systems, launch content and automation, built as one connected production.</p>
          </div>
        </div>
      </section>

      <section className="cta kinetic-cta">
        <h2>Ready to build something worth visiting?</h2>
        <p>Tell us what you're up to and we'll come back within one business day with ideas, timelines and a fixed price.</p>
        <Link className="button primary" href="/contact">Get a Free Quote <ArrowRight size={18} /></Link>
      </section>

      <Link href="/contact" className="floating-chat" aria-label="Start an enquiry">
        <MessageCircle size={24} />
      </Link>
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
