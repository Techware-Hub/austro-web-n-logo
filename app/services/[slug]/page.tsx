import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ServicePage from "../../components/ServicePage";
import { services, site } from "../../content";
import { servicePageContent } from "../../servicePageContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const legacySlugMap: Record<string, string> = {
  "logo-design": "logo-design-service",
  website: "web-design-and-development-services",
  "digital-marketing": "digital-marketing-services",
  brand: "brand-services",
  "mobile-apps": "mobile-app-services",
  "graphics-design": "graphics-design-services",
  print: "print-services"
};

function resolveSlug(slug: string) {
  return legacySlugMap[slug] ?? slug;
}

export function generateStaticParams() {
  const pageSlugs = servicePageContent.map((service) => ({ slug: service.slug }));
  const serviceSlugs = services.map((service) => ({ slug: service.slug }));
  return [...pageSlugs, ...serviceSlugs];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSlug(slug);
  const page = servicePageContent.find((item) => item.slug === resolvedSlug);
  const service = services.find((item) => item.slug === resolvedSlug);

  if (!page && !service) {
    return {};
  }

  const title = page?.metaTitle ?? service?.metaTitle;
  const description = page?.metaDescription ?? service?.metaDescription;

  return {
    title,
    description,
    alternates: { canonical: `/services/${resolvedSlug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/services/${resolvedSlug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSlug(slug);
  const page = servicePageContent.find((item) => item.slug === resolvedSlug);
  const fallback = services.find((item) => item.slug === resolvedSlug);

  if (!page && !fallback) {
    notFound();
  }

  if (!page && fallback) {
    return (
      <main>
        <section className="page-hero compact service-page-hero" data-aos="fade-up">
          <p className="eyebrow">{fallback.eyebrow}</p>
          <h1>{fallback.h1}</h1>
          <p>{fallback.intro}</p>
          <div className="button-row">
            <Link className="button primary" href="/contact">Get Started Now <ArrowRight size={18} /></Link>
            <Link className="button secondary contrast" href="/packages">View Packages</Link>
          </div>
        </section>
        <section className="cta newsletter-cta" data-aos="fade-up">
          <h2>Ready to discuss {fallback.shortTitle.toLowerCase()}?</h2>
          <p>Share your requirements and we will help you choose the right service, package, and timeline.</p>
          <Link className="button primary" href="/contact">Get a Free Consultation <ArrowRight size={18} /></Link>
        </section>
      </main>
    );
  }

  return <ServicePage content={page!} />;
}
