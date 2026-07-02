import HighEnergyHome from "./components/HighEnergyHome";
import FAQSchema from "./components/FAQSchema";
import { faqs, site } from "./content";

export const metadata = {
  title: "Best Web & Logo Design Company in Australia",
  description:
    "Austro Web & Logo creates bespoke, high-converting websites, custom logos, branding, and digital solutions that increase brand presence, credibility, and sales.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Web & Logo Design Company in Australia",
    description:
      "Bespoke web design, logo design, branding, and digital solutions from Austro Web & Logo.",
    url: site.url
  }
};

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <HighEnergyHome />
    </>
  );
}
