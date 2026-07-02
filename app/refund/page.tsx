import { contact } from "../content";

export const metadata = {
  title: "Refund Policy",
  description:
    "Read the Austro Web & Logo refund policy for logo design, website design, branding, marketing, and digital service projects.",
  alternates: { canonical: "/refund" }
};

export default function RefundPage() {
  return (
    <main className="legal-page">
      <h1>Refund Policy</h1>
      <p className="legal-note">This policy explains how refunds and cancellations are handled for Austro Web & Logo projects.</p>
      <section><h2>Logo Packages</h2><p>Logo packages may include a 14-day money-back guarantee from the date of first concept delivery when stated in the selected package or written quote.</p></section>
      <section><h2>Website and Digital Projects</h2><p>Website, branding, marketing, app, and print deposits are generally non-refundable once work has commenced because production time and creative resources have been allocated.</p></section>
      <section><h2>Scope Changes</h2><p>Work requested outside the agreed scope is quoted separately before additional production begins.</p></section>
      <section><h2>Cancellations</h2><p>Cancellation requires written notice. You may be invoiced for work completed up to the cancellation date.</p></section>
      <section><h2>Contact</h2><p>For refund questions, contact {contact.email} or {contact.phone}.</p></section>
    </main>
  );
}
