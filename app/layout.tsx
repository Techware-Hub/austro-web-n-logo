import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "aos/dist/aos.css";
import "./globals.css";
import logo from "./assets/images/logo/Austro Web-N-Logo-Header.png";
import AosProvider from "./components/AosProvider";
import CustomCursor from "./components/CustomCursor";
import DiscountPopup from "./components/DiscountPopup";
import InteractionLayer from "./components/InteractionLayer";
import { PopupProvider } from "./components/PopupProvider";
import SiteHeader from "./components/SiteHeader";
import { contact, serviceMenuItems, site } from "./content";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"]
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Austro Web & Logo | Web Design & Logo Design Company",
    template: "%s | Austro Web & Logo"
  },
  description: site.description,
  openGraph: {
    title: "Austro Web & Logo | Web Design & Logo Design Company",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Austro Web & Logo | Web Design & Logo Design Company",
    description: site.description
  },
  alternates: {
    canonical: "/"
  }
};

const businessId = `${site.url}/#business`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: "Austro Web & Logo",
      image: "https://austrowebnlogo.com/assets/images/logo/Austro%20Web-N-Logo-Header.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU"
      },
      telephone: contact.phone,
      email: contact.email,
      url: site.url,
      areaServed: "AU",
      priceRange: "A$$"
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: "Austro Web & Logo",
      url: site.url,
      publisher: { "@id": businessId }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className={`${display.variable} ${body.variable}`}>
        <PopupProvider>
        <AosProvider />
        <InteractionLayer />
        <CustomCursor />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        {children}
        <footer className="footer">
          <div className="footer-brand-row" data-aos="fade-up">
            <Link href="/" aria-label="Austro Web & Logo home">
              <Image src={logo} alt="Austro Web N Logo" className="footer-logo" />
            </Link>
          </div>
          <div className="footer-grid">
            <section data-aos="fade-up" data-aos-delay="50">
              <h2>About Austro Web & Logo</h2>
              <p className="footer-tagline">Austro Web and Logo is an Australia-focused digital design agency delivering professional logo design, web design, and branding solutions. We help startups and businesses build strong visual identities that perform, engage audiences, and support long-term growth.</p>
              <div className="social-icons" aria-label="Social links">
                <Link href="/contact" aria-label="Facebook">f</Link>
                <Link href="/contact" aria-label="Instagram">ig</Link>
                <Link href="/contact" aria-label="LinkedIn">in</Link>
                <Link href="/contact" aria-label="X">x</Link>
              </div>
            </section>
            <section data-aos="fade-up" data-aos-delay="100">
              <h2>Links</h2>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/packages">Packages</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </section>
            <section data-aos="fade-up" data-aos-delay="150">
              <h2>Services</h2>
              <div className="footer-links">
                {serviceMenuItems.map((service) => <Link href={service.href} key={service.href}>{service.label}</Link>)}
              </div>
            </section>
            <section data-aos="fade-up" data-aos-delay="200">
              <h2>Address</h2>
              <address>
                <strong>Austro Web & Logo</strong>
                {contact.address.map((line) => <span key={line}>{line}</span>)}
                <span><a href={`tel:${contact.phoneTel}`}>{contact.phone}</a></span>
                <span><a href={`mailto:${contact.email}`}>{contact.email}</a></span>
                <span>{contact.hours}</span>
              </address>
              <div className="payment-icons" aria-label="Payment methods">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
                <span>Stripe</span>
              </div>
            </section>
          </div>
          <div className="footer-bottom">
            <p>© All Rights Reserved 2026 - Austro Web & Logo</p>
            <div>
              <Link href="/terms">Terms Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/refund">Refund Policy</Link>
            </div>
          </div>
        </footer>

        <a
          href={contact.whatsapp}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="#ffffff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>

        <DiscountPopup />

        <Script id="tawk-to" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/697a7ffb435d921c378e8e99/1jg387rtb';
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
        </PopupProvider>
      </body>
    </html>
  );
}
