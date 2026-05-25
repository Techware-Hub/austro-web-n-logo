export const site = {
  name: "Austro Web & Logo",
  url: "https://austrowebnlogo.com",
  description:
    "Australia-focused web design, logo design, branding, app design, print, and digital marketing services for businesses that need a sharper online presence."
};

export const contact = {
  phone: "+61 468 060 941",
  phoneTel: "+61468060941",
  whatsapp: "https://wa.me/61468060941",
  email: "info@austrowebnlogo.com",
  address: ["Australia-wide digital design agency"],
  hours: "Monday-Friday, 9:00am-6:00pm"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" }
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  eyebrow: string;
  h1: string;
  intro: string;
  includes: string[];
  details: string[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceMenuItems = [
  { href: "/services/logo-design-service", label: "Logo Design" },
  { href: "/services/web-design-and-development-services", label: "Website" },
  { href: "/services/digital-marketing-services", label: "Digital Marketing" },
  { href: "/services/brand-services", label: "Brand" },
  { href: "/services/mobile-app-services", label: "Mobile Apps" },
  { href: "/services/print-services", label: "Print" },
  { href: "/services/graphics-design-services", label: "Graphics Design" }
];

export const services: Service[] = [
  {
    slug: "logo-design-service",
    title: "Logo Design & Branding",
    shortTitle: "Logo Design",
    summary: "Original logo concepts and brand identities that make your business easy to remember.",
    eyebrow: "Professional logo design company",
    h1: "Make an Impact with a Unique Logo from the Leading Design Agency.",
    intro:
      "Austro Web & Logo creates custom logos that reflect your brand identity, values, audience, and market position. Our designers develop memorable concepts built for websites, packaging, social media, signage, and print.",
    includes: ["Two-Dimensional Logo", "Three-Dimensional Logo", "Mascot Logo", "Brewery Logo", "Illustrative Logo", "Animated Logo"],
    details: [
      "Multiple original concepts shaped around your industry and customer expectations.",
      "Unlimited revisions on eligible packages so the final logo feels right.",
      "Production-ready source files including AI, PSD, EPS, GIF, BMP, JPEG, and PNG formats.",
      "Brand colour and usage direction to keep your identity consistent."
    ],
    metaTitle: "Logo Design Services | Austro Web & Logo",
    metaDescription:
      "Custom logo design and branding services from Austro Web & Logo, including 2D, 3D, mascot, illustrative, brewery, and animated logo concepts."
  },
  {
    slug: "web-design-and-development-services",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    summary: "Modern, responsive, SEO-ready websites built to convert visitors into customers.",
    eyebrow: "Best web design company for growing brands",
    h1: "Professional Website Design Services Built for Performance.",
    intro:
      "Our designers and developers work together to build websites that are visually captivating, fast, responsive, and functional. Every website is aligned with your brand and created to support enquiries, sales, and long-term growth.",
    includes: ["Magento Development", "WordPress Design", "Shopify Solutions", "OpenCart Integration", "CRM Customization"],
    details: [
      "Custom responsive layouts for desktop, tablet, and mobile screens.",
      "Fast-loading page structure with SEO-friendly content hierarchy.",
      "Conversion-focused sections, clear calls to action, and stronger trust signals.",
      "CMS, eCommerce, and CRM integrations selected around your business workflow."
    ],
    metaTitle: "Website Design & Development | Austro Web & Logo",
    metaDescription:
      "Get responsive website design and development from Austro Web & Logo, including WordPress, Shopify, Magento, OpenCart, and CRM-ready business websites."
  },
  {
    slug: "mobile-app-services",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    summary: "User-friendly iOS, Android, game, AR/VR, and Unity app experiences.",
    eyebrow: "Mobile app design and development",
    h1: "Custom Mobile App Development Services for Digital Products.",
    intro:
      "Our app team designs custom mobile experiences tailored to your needs, with strong visual appeal and intuitive user journeys. Whether you need an iOS app, Android app, game, or immersive digital product, we shape the interface around real users.",
    includes: ["iOS App Development", "Android App Development", "Unity App Creation", "Game Development", "AR/VR App Development"],
    details: [
      "UX flows planned for clarity, thumb reach, and fast task completion.",
      "Modern UI systems that feel native on mobile devices.",
      "Prototype-ready screens for founders, startups, and established businesses.",
      "Design support for launch assets, app store previews, and marketing pages."
    ],
    metaTitle: "Mobile App Development Services | Austro Web & Logo",
    metaDescription:
      "Design and develop iOS, Android, Unity, game, and AR/VR app experiences with Austro Web & Logo."
  },
  {
    slug: "digital-marketing-services",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    summary: "SEO, content, and digital campaigns that help businesses increase visibility and leads.",
    eyebrow: "Digital marketing agency Australia",
    h1: "Digital Marketing That Builds Visibility and Long-Term Growth.",
    intro:
      "We help businesses appear where customers are already searching. Our digital marketing services combine search engine optimization, content strategy, campaign creative, and reporting so your brand can attract more qualified traffic.",
    includes: ["Search Engine Optimization", "Content Writing", "Campaign Creative", "Analytics", "Local Search Growth"],
    details: [
      "Keyword research and page planning around high-intent searches.",
      "Technical and on-page SEO improvements for stronger crawlability.",
      "Search-focused website copy, blogs, and campaign content.",
      "Practical reporting that connects marketing work to business outcomes."
    ],
    metaTitle: "Digital Marketing & SEO Services | Austro Web & Logo",
    metaDescription:
      "Austro Web & Logo provides SEO, content writing, campaign creative, analytics, and local search marketing services for growing businesses."
  },
  {
    slug: "brand-services",
    title: "Brand Services",
    shortTitle: "Branding",
    summary: "Professional brand strategy, identity systems, and creative direction for consistent growth.",
    eyebrow: "Brand identity and strategy",
    h1: "Brand Services That Make Every Touchpoint Feel Consistent.",
    intro:
      "A strong brand is more than a logo. We create visual direction, identity systems, messaging foundations, and supporting assets that help your business look credible everywhere customers meet it.",
    includes: ["Brand Strategy", "Visual Identity", "Colour Systems", "Typography", "Brand Guidelines"],
    details: [
      "Clear creative direction for websites, print, social media, and advertising.",
      "Brand systems that scale from launch assets to full campaigns.",
      "Guidelines that make it easier for teams and vendors to stay on-brand.",
      "Design foundations built around credibility, recognition, and conversion."
    ],
    metaTitle: "Brand Services | Austro Web & Logo",
    metaDescription:
      "Build a consistent brand identity with Austro Web & Logo, including brand strategy, colour systems, typography, visual identity, and guidelines."
  },
  {
    slug: "graphics-design-services",
    title: "Graphics Design",
    shortTitle: "Graphics Design",
    summary: "Eye-catching brochures, banners, social assets, and digital graphics that elevate your brand.",
    eyebrow: "Creative graphic design services",
    h1: "Graphic Designing for Digital, Social, and Print Campaigns.",
    intro:
      "From brochures and banners to branded social media graphics, our design team creates polished visuals that attract attention and keep your brand consistent across every channel.",
    includes: ["Brochures", "Banners", "Social Media Graphics", "Pitch Decks", "Advertising Creative"],
    details: [
      "Marketing graphics designed around your brand identity.",
      "Print-ready and web-ready file preparation.",
      "Creative assets for campaigns, launches, promotions, and events.",
      "Consistent visual language across digital and physical materials."
    ],
    metaTitle: "Graphic Design Services | Austro Web & Logo",
    metaDescription:
      "Get professional graphic design for brochures, banners, social media, pitch decks, campaign creative, and branded marketing assets."
  },
  {
    slug: "print-services",
    title: "Print Services",
    shortTitle: "Print",
    summary: "Business cards, stationery, brochures, and printed brand collateral with polished delivery.",
    eyebrow: "Print design and collateral",
    h1: "Print Services That Carry Your Brand Beyond the Screen.",
    intro:
      "We design print collateral that feels aligned with your digital presence, from stationery and business cards to flyers, brochures, and branded launch materials.",
    includes: ["Business Cards", "Letterheads", "Envelopes", "Flyers", "Brochures", "Stationery Design"],
    details: [
      "Print-ready artwork prepared with professional layout standards.",
      "Stationery design available with logo and brand identity packages.",
      "Consistent colours, typography, and layout across all printed touchpoints.",
      "Support for launch kits, events, sales material, and local promotions."
    ],
    metaTitle: "Print Design Services | Austro Web & Logo",
    metaDescription:
      "Austro Web & Logo designs print collateral including business cards, letterheads, envelopes, flyers, brochures, and branded stationery."
  }
];

export const homeServices = [
  { title: "Online Store Development", text: "High-converting, secure custom eCommerce stores with smooth checkout experiences.", slug: "web-design-and-development-services" },
  { title: "Website Design & Development", text: services[1].summary, slug: "web-design-and-development-services" },
  { title: "Logo Design & Branding", text: services[0].summary, slug: "logo-design-service" },
  { title: "Graphic Designing", text: services[5].summary, slug: "graphics-design-services" },
  { title: "Search Engine Optimization", text: "SEO strategies that improve visibility, traffic, and organic growth over time.", slug: "digital-marketing-services" },
  { title: "Content Writing", text: "Search-focused copy that builds trust, attracts users, and increases conversion.", slug: "digital-marketing-services" },
  { title: "Video Editing", text: "Promotional videos, ads, reels, and animations that bring brand stories to life.", slug: "digital-marketing-services" },
  { title: "Mobile App Design", text: services[2].summary, slug: "mobile-app-services" }
];

const sharedPackageFeatures = ["Free Rush Delivery", "100% Satisfaction Guaranteed", "Dedicated Designers", "Unique Designs Guaranteed", "Tailored to Your Needs"];

export type PackageItem = {
  name: string;
  price: string;
  originalPrice: string;
  features: string[];
};

export const packages: Array<{ group: string; intro: string; items: PackageItem[] }> = [
  {
    group: "Logo Design",
    intro: "Select a package with business objectives and budget. Each package includes professional production, fast concepts, revisions, ownership rights, and dedicated designers.",
    items: [
      { name: "Logo Basic", price: "$59", originalPrice: "$197 only", features: ["6 Unique Logo Concepts", "Get Initial Concepts within 24 hours", "Unlimited Revisions", "Free Icon", "100% Ownership Rights", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] },
      { name: "Logo Plus", price: "$129", originalPrice: "$437 only", features: ["12 Unique Logo Concepts", "Get Initial Concepts within 24 hours", "Unlimited Revisions", "Free Icon", "100% Ownership Rights", "Stationery Design (Business Card Letterhead, Envelope)", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] },
      { name: "Logo Infinity", price: "$299", originalPrice: "$997 only", features: ["Infinite Logo Concepts", "Get Initial Concepts within 24 hours", "Unlimited Revisions", "Free Icon", "100% Ownership Rights", "Stationery Design (Business Card Letterhead, Envelope)", "Free 500 Business Cards Prints", "Printing", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] },
      { name: "3D Design", price: "$249", originalPrice: "$837 only", features: ["2 Unique 3D Logo Concepts", "Get Initial Concepts within 24 hours", "3D Effect through lights & shades", "Unlimited Revisions", "Free Icon", "100% Ownership Right", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] },
      { name: "Illustration", price: "$349", originalPrice: "$997 only", features: ["4 Unique 3D Logo Concepts", "Get Initial Concepts within 24 hours", "3D Effect through lights & shades", "Unlimited Revisions", "Free Icon", "100% Ownership Right", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] },
      { name: "Mascot", price: "$499", originalPrice: "$1667 only", features: ["2 Unique Mascot Concepts", "Get Initial Concepts within 24 hours", "2 - 3 Combinations", "100% Custom Illustration", "Unlimited Revisions", "Free Icon", "100% Ownership Right", "AI, PSD, EPS, GIF, BMP, JPEG PNG Formats", ...sharedPackageFeatures] }
    ]
  }
];

export const homeCapabilities = [
  {
    title: "Custom Logo Design",
    text: "Our talented designers craft custom logos that reflect your brand from the heart — built to leave a lasting impression and represent your business values across every platform.",
    types: ["Two-Dimensional Logo", "Three-Dimensional Logo", "Mascot Logo", "Brewery Logo", "Illustrative Logo", "Animated Logo"],
    href: "/services/logo-design-service"
  },
  {
    title: "Website Design & Development",
    text: "Our developers and designers work together to build websites that are visually captivating and highly functional — aligned with your brand, fast to load, and ready to convert.",
    types: ["Magento Development", "WordPress Design", "Shopify Solutions", "OpenCart Integration", "CRM Customization"],
    href: "/services/web-design-and-development-services"
  },
  {
    title: "Mobile App Development",
    text: "Our developers build custom mobile apps tailored to your needs, with intuitive, visually engaging interfaces for iOS and Android digital products.",
    types: ["iOS App Development", "Android App Development", "Unity App Creation", "Game Development", "AR/VR App Development"],
    href: "/services/mobile-app-services"
  },
  {
    title: "Video Animation",
    text: "Our animators bring your brand story to life with engaging, memorable videos — from explainer videos and product demos to motion graphics that grab attention.",
    types: ["Whiteboard Animations", "Motion Graphics", "Screencast Videos", "2D Animations", "3D Animations"],
    href: "/services/digital-marketing-services"
  }
];

export const whyChooseUs = [
  { title: "100% Custom & Creative Designs", text: "Every logo, website, and brand asset is designed from scratch to truly reflect your business." },
  { title: "Australian Design Professionals", text: "A specialist team that understands the local market and what Australian audiences respond to." },
  { title: "Fast Turnaround & On-Time Delivery", text: "Rapid processing and timely delivery so your brand launches exactly when you need it." },
  { title: "SEO-Optimised, High-Converting Sites", text: "Built on an SEO-ready framework that loads fast and turns visitors into paying customers." },
  { title: "Clear & Affordable Pricing", text: "Transparent, competitive pricing with no hidden fees — exactly what you expect from a trusted agency." },
  { title: "24/7 Dedicated Support", text: "Ongoing customer support, maintenance, and updates that keep your brand running smoothly." }
];

export const testimonials = [
  { name: "Sarah Mitchell", role: "eCommerce Founder", quote: "Austro Web & Logo completely transformed our online image. Our new site is modern, fast-loading, and gathers more leads than ever before." },
  { name: "Mark Robinson", role: "Startup Director", quote: "Their branding and logo work went beyond what we expected. The team was innovative, professional, and delivered high-quality results right on time." },
  { name: "Mike Johnson", role: "Local Business Owner", quote: "Highly recommended. Their marketing and SEO helped us climb the Google rankings within weeks — fantastic service throughout the project." }
];

export const faqs: Array<[string, string]> = [
  ["Do you offer custom logo design concepts?", "Yes. Every logo is tailored to your brand identity, with multiple concepts and revisions available depending on the selected package."],
  ["How long does it take to design and develop a website?", "Most websites are delivered within 5-15 days depending on size and features. Larger eCommerce and custom builds may need a longer production window."],
  ["Can you help with complete branding, not just a logo?", "Yes. We create brand identity systems, style direction, stationery, digital assets, and guidelines so your business looks consistent everywhere."],
  ["Can you help my business rank higher on Google?", "Yes. Our SEO services include keyword research, technical optimization, on-page improvements, and content planning for stronger visibility."],
  ["Do you design mobile app interfaces and digital products?", "Yes. We plan user flows, wireframes, UI screens, prototypes, and app-ready assets for iOS, Android, startup, and enterprise mobile products."],
  ["Can you create print and graphic design materials?", "Yes. We design brochures, flyers, business cards, packaging, banners, social media graphics, campaign assets, and other branded visuals."],
  ["How do your packages and project process work?", "Choose a package or request a quote, share your brief, review the initial concepts, request revisions, and receive final production-ready files or launch support."],
  ["Do you provide ongoing support after project completion?", "Yes. We provide maintenance, updates, and support to keep websites, brand assets, and digital campaigns moving after launch."]
];
