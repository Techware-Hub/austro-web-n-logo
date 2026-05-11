# Austro Web & Logo — Australian Market Copy Doc

**Version:** 1.0
**Date:** 2026-05-10
**Brand:** Austro Web & Logo
**Domain:** austrowebnlogo.com
**Target market:** Australian SMEs, startups, tradies
**Tone:** Professional, direct, Australian English (specialise, realise, optimise, organise, colour, centre)
**Positioning angle:** Global Scale, Local Expertise
**SEO keywords (weave naturally, do not stuff):** Web Design Melbourne, Logo Design Australia, Business Automation VIC

---

## DEVELOPER NOTES — INPUTS REQUIRED

These placeholders must be filled before the site goes live:

| Placeholder | Action |
|---|---|
| `{{PHONE}}` | Owner is supplying a +61 VoIP number |
| `{{EMAIL}}` | **Confirm:** `info@austrowebnlogo.com` (matches domain) vs `info@austrowebandlogo.com` (currently displayed — likely typo) |
| `{{ABN}}` | If registered — recommended for AU credibility & B2B trust signals |

## ITEMS TO PURGE FROM CURRENT SITE

Search-and-replace globally across all files (templates, content, meta, alt text):

- `767 Northern Ave, Clarkston, GA, United States` → REMOVE (replace with AU address below)
- `(855) 720-5237` → REPLACE with `{{PHONE}}`
- `+1 (470) 802 7248` → REMOVE
- WhatsApp link `+14708027248` → REMOVE or replace with AU mobile
- Any reference to `Georgia`, `California`, `USA`, `United States`, `GA` → REMOVE
- `info@austrowebandlogo.com` → REPLACE with `{{EMAIL}}`
- `$` (USD) on packages page → REPLACE with AUD pricing below
- US English spellings (specialize, realize, organize, color, optimization) → AU English

---

## SITE-WIDE BLOCKS

### Footer Tagline
> Austro Web & Logo — Australian-owned web design, logo design, and business automation. Global scale. Local expertise.

### Footer Contact Block (AU Standard Format)
```
Austro Web & Logo
32 Attain Walk
Roxburgh Park VIC 3064
Australia

Phone: {{PHONE}}
Email: {{EMAIL}}
Hours: Monday–Friday, 9:00am–6:00pm AEST
```

### JSON-LD Structured Data (recommended for local SEO)
For the developer to add to the site `<head>` on every page:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Austro Web & Logo",
  "image": "https://austrowebnlogo.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "32 Attain Walk",
    "addressLocality": "Roxburgh Park",
    "addressRegion": "VIC",
    "postalCode": "3064",
    "addressCountry": "AU"
  },
  "telephone": "{{PHONE}}",
  "email": "{{EMAIL}}",
  "url": "https://austrowebnlogo.com",
  "areaServed": "AU",
  "priceRange": "A$$"
}
```

---

## HOMEPAGE

### Hero Section
**H1:** Australian Agency. Global Production Power.

**Subheading:** Web Design Melbourne businesses trust, Logo Design Australia-wide, and Business Automation VIC operators rely on. Built for SMEs, startups and tradies who want a brand that performs — without the agency price tag.

**Primary CTA:** Get a Free Quote
**Secondary CTA:** See Our Work

### Mission Statement Section
**H2:** We Build Brands That Perform.

**Body:** A website should earn its keep. A logo should do more than look pretty. We specialise in joining the two — design that converts, branding that lasts, and the automation to scale the business behind it.

### Global Scale, Local Expertise (Positioning Section)
**H2:** Global Scale. Local Expertise.

**Body:** Austro Web & Logo is an Australian agency based in Roxburgh Park, Victoria, working with SMEs, startups and tradies right across the country. Behind us sits a global production powerhouse — the same throughput enterprise brands rely on, made affordable for growing Australian businesses. You get a local team that understands the market, paired with the firepower to deliver fast.

**Three pillars (icon row):**

- **Australian Agency** — Local strategy, local accountability, local accents on the phone.
- **Global Production** — Round-the-clock build capacity that keeps timelines tight.
- **Built to Convert** — Every pixel earns its place. Design with a job to do.

### Services Overview
**H2:** Everything You Need to Launch and Grow.

**Body:** From your first logo to a fully automated business, we cover the lot. Every project is purpose-built to help Australian businesses realise their growth targets.

**Service tiles (8 — link each to its service section):**

| Service | One-liner |
|---|---|
| Web Design & Development | Conversion-led websites for Australian SMEs and tradies. |
| Logo Design & Branding | Distinct, ownable identities your customers remember. |
| Online Store Development | Shopify, WooCommerce and headless builds, ready to scale. |
| Search Engine Optimisation | Rank in Melbourne, Sydney, Brisbane — wherever your customers search. |
| Business Automation | Automate quotes, bookings and follow-ups so you can focus on the work. |
| Graphic Design | Print, digital and social assets that stay on-brand. |
| Content Writing | Copy that sounds Australian, not corporate. |
| Mobile App Design | iOS and Android apps designed for performance. |

### Social Proof Strip *(populate when testimonials are gathered)*
**H2:** Trusted by Australian businesses.

[Logos row — 6 to 8 client logos]
[Testimonial carousel — 3 quotes with name, business, suburb]

### CTA Block (above footer)
**H2:** Ready to Build Something Worth Visiting?

**Body:** Tell us what you're up to and we'll come back within one business day with ideas, timelines and a fixed price.

**CTA:** Get a Free Quote

---

## CONTACT US PAGE

### Page Heading
**H1:** Let's Build Something Worth Visiting.

### Intro
Tell us about your business and we'll come back within one business day with ideas, timelines and a fixed price. No call centres, no overseas runaround — you'll be talking to the team that does the work.

### Contact Form Fields
- Full Name *
- Email Address *
- Phone (AU format hint: `04xx xxx xxx` or `0x xxxx xxxx`)
- Business Name
- Suburb / State *(optional — helps us understand your market)*
- What can we help with? *(dropdown: Web Design / Logo Design / E-Commerce / SEO / Business Automation / Other)*
- Tell us about your project *(textarea)*
- Submit button: **Send Enquiry**

### Form Confirmation Message
> Thanks — we've got your enquiry. You'll hear from us within one business day. If it's urgent, give us a bell on {{PHONE}}.

### Contact Details Block
```
Austro Web & Logo
32 Attain Walk
Roxburgh Park VIC 3064
Australia

Phone: {{PHONE}}
Email: {{EMAIL}}
Hours: Monday–Friday, 9:00am–6:00pm AEST
```

### Embedded Map
Google Maps embed centred on: `32 Attain Walk, Roxburgh Park VIC 3064`

### Contact FAQ
**How quickly will I hear back?**
Within one business day, Monday to Friday.

**Do you only work with Melbourne / VIC businesses?**
No — we're based in Roxburgh Park but work with SMEs, startups and tradies right across Australia. Most of our work is done remotely.

**Do you do fixed-price quotes?**
Yes. Every project gets a fixed price upfront, with milestone payments — so there are no surprises.

**Do you offer ongoing support after launch?**
Absolutely. We offer monthly care plans for hosting, security, and updates.

---

## SERVICES PAGE

### Page Heading
**H1:** Web Design, Branding & Automation Built for Australian Business.

### Intro
We specialise in eight services that cover the full lifecycle of an Australian business — from launching a brand, to building the website that sells it, to automating the operations behind it.

---

### Service 1: Web Design & Development
**H2:** Web Design Melbourne SMEs Actually Use.

We design and build conversion-focused websites for Australian businesses. Every site is custom — no cookie-cutter templates, no bloated themes — and built to load fast, rank well, and convert visitors into enquiries.

**What's included:**
- Custom design tailored to your brand and audience
- Mobile-first responsive layouts
- On-page SEO foundations
- Fast hosting recommendations (AU-region)
- 30 days of post-launch support
- Optional Next.js / headless rebuild for high-performance sites

---

### Service 2: Logo Design & Branding
**H2:** Logo Design Australia Trusts.

A logo is the handshake — it should feel right before a word is spoken. We design distinct, ownable identities backed by full brand guidelines so your business stays consistent everywhere it shows up.

**What's included:**
- Multiple original concepts (count varies by package)
- Full source files (AI, EPS, SVG, PDF, PNG)
- Brand colour palette and typography
- Usage guidelines
- Unlimited revisions until you're happy

---

### Service 3: Online Store Development
**H2:** E-Commerce That Sells, Not Just Sits.

Whether it's Shopify, WooCommerce, or a headless setup, we build online stores that convert browsers into buyers. Every store is built with Australian customers in mind — local payments, local shipping integrations, local trust signals.

**What's included:**
- Platform recommendation based on products and volume
- Custom theme design
- Payment gateway setup (Stripe, PayPal, Afterpay, Zip)
- Australia Post / Sendle / Aramex shipping integrations
- Inventory and order management setup
- GST-compliant tax setup

---

### Service 4: Search Engine Optimisation
**H2:** Rank Where Your Customers Search.

SEO that actually moves the needle for Australian businesses. We focus on high-intent local search — Web Design Melbourne, Logo Design Australia, Business Automation VIC — and the long-tail keywords your competitors aren't ranking for.

**What's included:**
- Technical SEO audit
- Keyword research focused on AU search intent
- On-page optimisation
- Google Business Profile setup and optimisation
- Local citation building (AU directories)
- Monthly reporting in plain English

---

### Service 5: Business Automation
**H2:** Business Automation VIC Operators Use to Reclaim Their Week.

Stop doing the same job twice. We automate the repetitive parts of your business — quoting, invoicing, customer follow-ups, lead capture, scheduling — so you can spend more time on the work that pays.

**What's included:**
- Workflow audit (where is your time going?)
- Tool stack recommendations (Zapier, Make, n8n, custom)
- CRM setup (HubSpot, Pipedrive, custom)
- Email and SMS automation
- Quote-to-invoice automation
- Calendar and booking automation

---

### Service 6: Graphic Design
**H2:** Print, Digital, Social — On-Brand, Every Time.

From flyers and signage to social tiles and pitch decks, we design the everyday assets your business runs on. Everything stays consistent with your brand guidelines — no off-brand surprises.

---

### Service 7: Content Writing
**H2:** Copy That Sounds Australian.

Words that sell, written by people who speak the language. We write website copy, blog posts, ad copy and email sequences that sound like a real Australian business — direct, professional, and free of corporate fluff.

---

### Service 8: Mobile App Design
**H2:** iOS and Android, Designed for Performance.

We design mobile apps that feel right on the device — not just websites stuffed into a phone. Every screen is purpose-built for thumb reach, fast loading, and store-approval ready.

---

### Services Page CTA
**H2:** Not sure which service you need?

Have a yarn with us — we'll point you in the right direction, even if it's not us.
**CTA:** Book a free 15-minute call.

---

## PACKAGES PAGE (AUD)

### Page Heading
**H1:** Fixed-Price Packages. No Surprises.

### Intro
Every package is fixed-price in Australian dollars, GST inclusive, with milestone payments and clear deliverables. Need something custom? We build those too — start with a free quote.

---

### Logo Design Packages

**Logo Starter — A$99**
*For sole traders and tradies who need a clean logo, fast.*
- 3 original concepts
- 2 rounds of revisions
- Final files: PNG, JPG, PDF
- 3-day turnaround

**Logo Professional — A$299**
*For SMEs and startups launching with a polished brand.*
- 6 original concepts
- Unlimited revisions
- Full source files (AI, EPS, SVG, PNG, JPG, PDF)
- Black, white and colour variations
- 5-day turnaround

**Logo + Brand Identity — A$799**
*For businesses that want a full brand kit, not just a logo.*
- Everything in Logo Professional, plus:
- Brand colour palette
- Typography system
- Brand usage guidelines (PDF)
- Business card design
- Letterhead and email signature
- 10-day turnaround

---

### Web Design Packages

**Starter Site — A$1,499**
*For tradies, sole traders, and new SMEs that need a credible online presence.*
- Up to 5 pages (Home, About, Services, Contact, Gallery)
- Mobile responsive
- Contact form
- On-page SEO basics
- Google Business Profile setup
- 2 weeks delivery

**Business Site — A$3,499**
*For established SMEs that need a site that sells.*
- Up to 10 pages
- Custom design (no templates)
- Blog/news section
- Lead capture forms
- Conversion-focused copywriting (5 pages)
- On-page SEO and local SEO
- 30 days of post-launch support
- 4 weeks delivery

**E-Commerce Store — A$5,999**
*Shopify or WooCommerce, ready to sell from day one.*
- Custom theme design
- Up to 50 products loaded
- Payment gateways (Stripe, PayPal, Afterpay, Zip)
- Australia Post / Sendle shipping integration
- GST tax setup
- 60 days of post-launch support
- 6 weeks delivery

---

### Combo Packages *(Save 15%)*

**Brand & Site Combo — A$4,499**
Logo + Brand Identity + Business Site, designed together for full consistency.

**Full Launch — A$8,999**
Logo + Brand Identity + E-Commerce Store + 3 months SEO.

---

### Business Automation Packages

**Automation Audit — A$499**
A 90-minute deep-dive into your workflows with a written report and tool recommendations.

**Automation Sprint — A$2,499**
We build out 3 automation workflows for you — typically lead capture, quoting and customer follow-ups.

**Automation Retainer — A$1,499/month**
Ongoing automation development, maintenance and optimisation.

---

### Fine Print
- All prices in Australian dollars (AUD), GST inclusive.
- 50% deposit to begin work; balance due before launch or final delivery.
- Unlimited revisions within the agreed scope.
- 14-day money-back guarantee on logo packages.
- Every project comes with full ownership of final files — your brand is yours.

---

## PORTFOLIO PAGE

### Page Heading
**H1:** Australian Businesses We've Helped Build.

### Intro
A snapshot of recent work for SMEs, startups and tradies across Australia. Every project starts with the same question: what does success look like? Then we build to it.

### Filter Chips
All Work · Web Design · Logo Design · E-Commerce · Branding · Automation

### Per-Project Case Study Template
Use this structure for each portfolio entry:

> **[Client Business Name]**
> *Industry · Suburb, State*
>
> **The Brief:** [1–2 sentences on what they needed]
> **What We Built:** [1–2 sentences on the deliverable]
> **The Result:** [1 sentence with a stat — % uplift in enquiries, sales, traffic, etc.]
>
> [Hero image / mockup]
> [3–5 supporting screenshots]
> [Optional client testimonial pull-quote]

### Page CTA
**H2:** Want to see your business here next?
**CTA:** Start Your Project

---

## TERMS & CONDITIONS

> **Legal disclaimer:** This is a starting template based on Australian Consumer Law and standard agency practice. Have it reviewed by an Australian solicitor before publishing.

**Last updated:** [Publication date]

### 1. About These Terms
These Terms & Conditions ("Terms") govern your use of the Austro Web & Logo website (austrowebnlogo.com) and the services we provide. By engaging us or using this site, you agree to these Terms.

Austro Web & Logo is operated from 32 Attain Walk, Roxburgh Park VIC 3064, Australia. Contact: {{EMAIL}} · {{PHONE}}.

### 2. Our Services
We provide web design, logo design, branding, e-commerce development, SEO, content writing, graphic design, mobile app design, and business automation services. The specific scope of each engagement is set out in a written quote or statement of work ("SOW") agreed before work begins.

### 3. Quotes and Engagement
- All quotes are valid for 30 days from issue.
- Work begins only once a 50% deposit is received and an SOW is signed.
- Pricing is in Australian dollars (AUD), GST inclusive unless stated otherwise.

### 4. Revisions and Scope
Each package includes a defined number of revisions, listed in your SOW. Work outside the agreed scope ("scope creep") is quoted separately at our standard hourly rate before any additional work begins.

### 5. Payment Terms
- 50% deposit on engagement, balance due before launch or final delivery.
- Invoices are payable within 7 days unless otherwise agreed.
- Late payments may incur interest at 2% per month, calculated daily.

### 6. Intellectual Property
- You retain full ownership of final delivered files (logos, brand assets, website code, content) once final payment is received.
- We retain the right to display work in our portfolio and case studies unless otherwise agreed in writing.
- Any third-party assets (stock photos, fonts, plugins) remain licensed under their respective terms.

### 7. Refunds and Cancellations
- Logo packages include a 14-day money-back guarantee from the date of first concept delivery.
- Web projects: deposits are non-refundable once work has commenced.
- Cancellation requires written notice. You will be invoiced for work completed to the cancellation date.

### 8. Australian Consumer Law
Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to cancel and receive a refund for the unused portion, or compensation for its reduced value.

### 9. Liability
To the extent permitted by law, our total liability is limited to the amount paid for the services giving rise to the claim. We are not liable for indirect or consequential losses.

### 10. Governing Law
These Terms are governed by the laws of Victoria, Australia. Any dispute will be resolved in the courts of Victoria.

### 11. Changes to These Terms
We may update these Terms from time to time. The current version is always available at austrowebnlogo.com/terms.

---

## PRIVACY POLICY

> **Legal disclaimer:** This is a starting template aligned with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). Have it reviewed by an Australian solicitor before publishing.

**Last updated:** [Publication date]

### 1. About This Policy
Austro Web & Logo ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, store, and disclose personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles.

### 2. Who We Are
Austro Web & Logo
32 Attain Walk, Roxburgh Park VIC 3064, Australia
Email: {{EMAIL}} · Phone: {{PHONE}}

### 3. What We Collect
We may collect:
- Identity information: name, business name, ABN
- Contact information: email, phone, address
- Project information: brief details, brand assets, login credentials you share with us
- Website usage data: cookies, IP address, browser type, pages visited
- Payment information: processed by our payment providers; we do not store full card details

### 4. How We Collect It
- Directly: forms on this site, emails, phone calls, meetings
- Automatically: via cookies and analytics tools (Google Analytics, Meta Pixel, etc.)
- From third parties: only with your consent (e.g., your developer giving us hosting access)

### 5. Why We Collect It
- To respond to enquiries and deliver services
- To send invoices and process payments
- To send service updates and (with consent) marketing communications
- To improve our website and services
- To meet legal obligations (taxation, ACL, etc.)

### 6. Disclosure
We do not sell your personal information. We may share it with:
- Service providers who help us deliver services (hosting, email, analytics, payment)
- Government authorities where required by law
- A third party in the event of a business sale or merger

Some providers may store data overseas (e.g., US-based hosting). We take reasonable steps to ensure they meet APP standards.

### 7. Cookies
We use cookies for essential site functionality, analytics, and marketing. You can disable cookies in your browser settings, but some features may not work as intended.

### 8. Data Security
We store data on secure servers with industry-standard encryption. We retain data only for as long as needed for the purposes above or as required by law.

### 9. Your Rights
You can:
- Request access to the personal information we hold about you
- Request corrections to inaccurate information
- Withdraw consent for marketing
- Lodge a complaint with us at {{EMAIL}}, or with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au

### 10. Changes to This Policy
We may update this policy from time to time. The current version is always available at austrowebnlogo.com/privacy.

### 11. Contact
For privacy questions: {{EMAIL}}

---

## CHANGE LOG (for the developer)

**Files / sections to update on the live site:**

1. **Homepage template** — replace hero, mission, why-us, services overview, CTA block.
2. **Footer component** — replace tagline, address, phone, email.
3. **Header / nav** — keep menu items: Home · Services · Packages · Portfolio · Contact (consider adding "About" if desired).
4. **Contact page template** — replace H1, intro, form fields, details, FAQ.
5. **Services page** (and any sub-service pages) — replace with the 8 services above.
6. **Packages page** — full replacement with AUD pricing structure.
7. **Portfolio page** — update intro and case-study template.
8. **Terms page** — replace with the AU template.
9. **Privacy page** — replace with the AU template.
10. **Add JSON-LD LocalBusiness schema** to every page (see top of doc).
11. **Global search-and-replace** — remove every instance of: California, Georgia, Clarkston, GA, USA, United States, "(855) 720-5237", "+1 (470) 802 7248", "+14708027248", "info@austrowebandlogo.com", "767 Northern Ave".
12. **Spell-check** in AU English (specialise, realise, optimise, organise, colour, centre).

---

## NEXT STEPS

1. **Owner:** supply +61 VoIP number and confirm correct email address.
2. **Owner:** review this doc, mark up changes to copy / package tiers / pricing.
3. **Once approved (short term):** developer does the search-and-replace on the current site for an immediate fix.
4. **Long term:** developer rebuilds in Next.js using this copy as the single source of truth.
