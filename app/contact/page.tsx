import { contact } from "../content";

const faqs = [
  ["How quickly will I hear back?", "Within one business day, Monday to Friday."],
  ["Do you only work with Melbourne or VIC businesses?", "No. We're based in Roxburgh Park but work with SMEs, startups and tradies right across Australia."],
  ["Do you do fixed-price quotes?", "Yes. Every project gets a fixed price upfront, with milestone payments."],
  ["Do you offer ongoing support after launch?", "Absolutely. We offer monthly care plans for hosting, security and updates."]
];

export const metadata = {
  title: "Contact | Austro Web & Logo"
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Contact</p>
        <h1>Let's Build Something Worth Visiting.</h1>
        <p>Tell us about your business and we'll come back within one business day with ideas, timelines and a fixed price. No call centres, no overseas runaround.</p>
      </section>
      <section className="contact-layout">
        <form className="contact-form">
          <label>Full Name *<input name="name" required /></label>
          <label>Email Address *<input name="email" type="email" required /></label>
          <label>Phone<input name="phone" placeholder="04xx xxx xxx or 0x xxxx xxxx" /></label>
          <label>Business Name<input name="business" /></label>
          <label>Suburb / State<input name="location" /></label>
          <label>What can we help with?
            <select name="service">
              {["Web Design", "Logo Design", "E-Commerce", "SEO", "Business Automation", "Other"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>Tell us about your project<textarea name="message" rows={6} /></label>
          <button className="button primary" type="submit">Send Enquiry</button>
          <p className="form-note">Thanks, we've got your enquiry. You'll hear from us within one business day. If it's urgent, give us a bell on {contact.phone}.</p>
        </form>
        <aside className="contact-card">
          <h2>Austro Web & Logo</h2>
          {contact.address.map((line) => <p key={line}>{line}</p>)}
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>Hours: {contact.hours}</p>
          <iframe title="Map to Austro Web & Logo" src="https://www.google.com/maps?q=32%20Attain%20Walk%2C%20Roxburgh%20Park%20VIC%203064&output=embed" loading="lazy" />
        </aside>
      </section>
      <section className="faq">
        <h2>Contact FAQ</h2>
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
