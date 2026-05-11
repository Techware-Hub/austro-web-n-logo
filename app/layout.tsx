import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { contact, navItems } from "./content";

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
  title: "Austro Web & Logo | Web Design Melbourne & Logo Design Australia",
  description: "Australian-owned web design, logo design, and business automation for SMEs, startups and tradies.",
  metadataBase: new URL("https://austrowebnlogo.com")
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Austro Web & Logo",
  image: "https://austrowebnlogo.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Attain Walk",
    addressLocality: "Roxburgh Park",
    addressRegion: "VIC",
    postalCode: "3064",
    addressCountry: "AU"
  },
  telephone: contact.phone,
  email: contact.email,
  url: "https://austrowebnlogo.com",
  areaServed: "AU",
  priceRange: "A$$"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className={`${display.variable} ${body.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <header className="site-header">
          <Link href="/" className="brand" aria-label="Austro Web & Logo home">
            <span className="brand-mark"><span>AW</span></span>
            <span className="brand-copy"><strong>Austro</strong><small>Web & Logo</small></span>
          </Link>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="quote-link">Start a Project</Link>
        </header>
        {children}
        <footer className="footer">
          <div>
            <p className="footer-tagline">Austro Web & Logo, Australian-owned web design, logo design, and business automation. Global scale. Local expertise.</p>
          </div>
          <address>
            <strong>Austro Web & Logo</strong>
            {contact.address.map((line) => <span key={line}>{line}</span>)}
            <span>Phone: {contact.phone}</span>
            <span>Email: {contact.email}</span>
            <span>Hours: {contact.hours}</span>
          </address>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
