import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, PenTool, Shapes, Sparkles } from "lucide-react";

type HeroCta = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  primary: HeroCta;
  secondary: HeroCta;
  image: string;
  imageAlt: string;
};

export default function PageHero({ eyebrow, heading, intro, primary, secondary, image, imageAlt }: PageHeroProps) {
  return (
    <section className="logo-hero">
      <div className="logo-hero-bg" aria-hidden="true">
        <span className="logo-hero-blob blob-1" />
        <span className="logo-hero-blob blob-2" />
        <span className="logo-hero-blob blob-3" />
      </div>
      <div className="logo-hero-inner">
        <div className="logo-hero-copy" data-aos="fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading}</h1>
          <p className="logo-hero-lead">{intro}</p>
          <div className="button-row">
            <Link className="button primary" href={primary.href}>{primary.label} <ArrowRight size={18} /></Link>
            <Link className="button secondary contrast" href={secondary.href}>{secondary.label}</Link>
          </div>
        </div>
        <div className="logo-hero-visual" data-aos="fade-left">
          <div className="logo-hero-frame">
            <Image src={image} alt={imageAlt} width={720} height={600} priority />
          </div>
          <span className="logo-hero-float float-1"><PenTool size={22} /></span>
          <span className="logo-hero-float float-2"><Shapes size={22} /></span>
          <span className="logo-hero-float float-3"><Palette size={22} /></span>
          <span className="logo-hero-float float-4"><Sparkles size={20} /></span>
        </div>
      </div>
    </section>
  );
}
