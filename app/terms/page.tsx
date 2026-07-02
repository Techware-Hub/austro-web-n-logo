import { contact } from "../content";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the Austro Web & Logo terms and conditions for website use, design services, payments, revisions, and intellectual property.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <h1>Terms & Conditions</h1>
      <p className="legal-note">Legal disclaimer: this is a starting template based on Australian Consumer Law and standard agency practice. Have it reviewed by an Australian solicitor before publishing.</p>
      <section><h2>About These Terms</h2><p>These Terms govern your use of the Austro Web & Logo website and the services we provide. By engaging us or using this site, you agree to these Terms.</p></section>
      <section><h2>Our Services</h2><p>We provide web design, logo design, branding, e-commerce development, SEO, content writing, graphic design, mobile app design and business automation services.</p></section>
      <section><h2>Quotes and Engagement</h2><p>Quotes are valid for 30 days. Work begins once a 50% deposit is received and a written scope is agreed. Pricing is in Australian dollars, GST inclusive unless stated otherwise.</p></section>
      <section><h2>Revisions and Scope</h2><p>Each package includes a defined number of revisions. Work outside the agreed scope is quoted separately before additional work begins.</p></section>
      <section><h2>Payment Terms</h2><p>Invoices are payable within 7 days unless otherwise agreed. Late payments may incur interest at 2% per month, calculated daily.</p></section>
      <section><h2>Intellectual Property</h2><p>You retain full ownership of final delivered files once final payment is received. We retain the right to display work in our portfolio unless otherwise agreed in writing.</p></section>
      <section><h2>Governing Law</h2><p>These Terms are governed by the laws of Victoria, Australia. Contact: {contact.email} or {contact.phone}.</p></section>
    </main>
  );
}
