import { contact } from "../content";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Austro Web & Logo privacy policy, including how enquiry, project, website usage, and contact information may be handled.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-note">Legal disclaimer: this is a starting template aligned with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles. Have it reviewed by an Australian solicitor before publishing.</p>
      <section><h2>About This Policy</h2><p>Austro Web & Logo is committed to protecting your privacy. This policy explains how we collect, use, store and disclose personal information.</p></section>
      <section><h2>Who We Are</h2><p>Austro Web & Logo, 32 Attain Walk, Roxburgh Park VIC 3064, Australia. Email: {contact.email}. Phone: {contact.phone}.</p></section>
      <section><h2>What We Collect</h2><p>We may collect identity information, contact information, project information, website usage data and payment information processed by our payment providers.</p></section>
      <section><h2>How We Use It</h2><p>We use information to respond to enquiries, deliver services, send invoices, improve the website, send service updates and meet legal obligations.</p></section>
      <section><h2>Disclosure</h2><p>We do not sell personal information. We may share it with service providers, government authorities where required, or a third party in the event of a business sale or merger.</p></section>
      <section><h2>Your Rights</h2><p>You can request access or corrections, withdraw consent for marketing, or lodge a complaint with us at {contact.email}.</p></section>
    </main>
  );
}
