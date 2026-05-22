export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: {
    heading: string;
    copy: string[];
    image: string;
    imageAlt: string;
  };
  highlights: Array<{ title: string; copy: string }>;
  introSections: Array<{
    heading: string;
    copy: string[];
    image?: string;
    imageAlt?: string;
  }>;
  servicesHeading: string;
  servicesCopy: string;
  cards: Array<{
    title: string;
    copy: string;
    image?: string;
    imageAlt?: string;
  }>;
  processHeading?: string;
  processCopy?: string;
  process?: Array<{
    title: string;
    copy: string;
    image?: string;
    imageAlt?: string;
  }>;
  trustHeading?: string;
  trustCopy?: string[];
  faqHeading?: string;
  faqs?: Array<[string, string]>;
  ctaHeading: string;
  ctaCopy: string;
};

const logoBase = "/assets/services/logo-design";
const digitalBase = "/assets/services/Digital%20Marketting";
const brandBase = "/assets/services/brand";
const graphicsBase = "/assets/services/graphic%20designer";
const printBase = "/assets/services/print";
const websiteBase = "/assets/services/website";
const mobileBase = "/assets/services/mobile%20app";

export const servicePageContent: ServicePageContent[] = [
  {
    slug: "web-design-and-development-services",
    title: "Website Design & Development Services",
    metaTitle: "Website Design & Development Services in Australia",
    metaDescription: "Austro Web and Logo provides custom website development services for Australian businesses, including UI/UX design, eCommerce, CMS, web apps, maintenance, optimization, security, migration, API integration, and redesign.",
    eyebrow: "Website Design & Development",
    hero: {
      heading: "Exceptional Website Development Services for Australian Businesses",
      copy: [
        "Austro Web and Logo is a high performance and fully customized website development services aimed at enabling the Australian business to increase its speed and competitiveness in the world of the internet.",
        "Being a reputable web development company, we develop responsive, modern, and user-friendly websites that are based on robust functionality and conversion-oriented UI/UX design."
      ],
      image: `${websiteBase}/What%20Makes%20Austro%20Web%20and%20Logothe%20Right%20Web%20Develo.png`,
      imageAlt: "Austro Web and Logo website development services"
    },
    highlights: [
      { title: "Conversion-Focused", copy: "UI/UX built to turn visitors into enquiries, leads, and paying customers." },
      { title: "Fully Responsive", copy: "Flawless performance and layout across desktop, tablet, and mobile screens." },
      { title: "SEO-Ready Build", copy: "Fast-loading, search-friendly structure that helps your website rank." },
      { title: "Secure & Scalable", copy: "Clean code, security measures, and architecture that grows with your business." }
    ],
    introSections: [
      {
        heading: "Engaging and Customized Website Designs for Every Business",
        copy: [
          "To design a site that is a proper reflection of your brand, it takes more than mere images to create visual appeal; it also takes planning, attention to detail and knowledge of your audience.",
          "Our web design and development services are developed with the focus on creating digital experiences which are aesthetically attractive, very functional, and conversion-optimised."
        ],
        image: `${websiteBase}/What%20Makes%20Austro%20Web%20and%20Logothe%20Right%20Web%20Development%20Company.png`,
        imageAlt: "Engaging customized website design"
      },
      {
        heading: "Powerful & Future-Prospective Web designs among Australian companies",
        copy: [
          "We give brands the power of innovative digital solutions created at Austro Web and Logo, designed to perform, be reliable and grow in the long term.",
          "All our websites are completely responsive and can be browsed without problems on desktops, tablets and mobile devices. We focus on speed, user experience and technical accuracy."
        ],
        image: `${websiteBase}/Powerful%20&%20Future-Prospective%20Web%20designs.png`,
        imageAlt: "Powerful future prospective web designs"
      },
      {
        heading: "What Makes Austro Web and Logo the Right Web Development Company?",
        copy: [
          "Investing in the appropriate agency is essential in developing a performing digital presence. The web development services that we offer are aimed at providing quality, speed and long-term scalability.",
          "Our priorities are user-friendly websites, search engine friendly websites, and high-security measures to design websites that rank, load fast and resist security threats."
        ],
        image: `${websiteBase}/What%20Makes%20Austro%20Web%20and%20Logothe%20Right%20Web%20Development%20Company.png`,
        imageAlt: "Right web development company"
      }
    ],
    servicesHeading: "Our Professional Website Development Services",
    servicesCopy: "Austro Web and Logo provides a full spectrum of website development services which enable Australian businesses to expand, scale and improve visibility online.",
    cards: [
      { title: "Custom Website Development", copy: "Fully tailored websites built from scratch to match your brand identity, business goals, and functional requirements.", image: `${websiteBase}/Custom%20website%20development.png`, imageAlt: "Custom website development" },
      { title: "Website Design (UI/UX)", copy: "Modern, intuitive, and conversion-focused designs built using user research, wireframing, and clean interface layouts.", image: `${websiteBase}/Webdesign%20UI%20UX.png`, imageAlt: "Website design UI UX" },
      { title: "E-Commerce Website Development", copy: "High-performing online stores with secure checkout, product management, and mobile-friendly shopping experiences.", image: `${websiteBase}/E%20commerce%20website%20development.png`, imageAlt: "E-commerce website development" },
      { title: "CMS-Based Website Development", copy: "Easy-to-manage websites built on WordPress, Shopify, Webflow, or custom CMS frameworks.", image: `${websiteBase}/CMS%20based%20website%20development.png`, imageAlt: "CMS based website development" },
      { title: "Web Application Development", copy: "Advanced web apps built with scalable architecture, custom integrations, dashboards, and business automation tools.", image: `${websiteBase}/Web%20application%20development.png`, imageAlt: "Web application development" },
      { title: "Website Maintenance & Support", copy: "Ongoing updates, backups, monitoring, and security patches to ensure your website stays safe and performs reliably.", image: `${websiteBase}/Website%20maintence%20and%20support.png`, imageAlt: "Website maintenance and support" },
      { title: "Landing Page Development", copy: "High-converting landing pages optimised for lead generation, marketing campaigns, and paid advertising funnels.", image: `${websiteBase}/Landing%20page%20development.png`, imageAlt: "Landing page development" },
      { title: "Website Optimization Services", copy: "Speed, performance, and technical SEO enhancements to improve search rankings and user experience.", image: `${websiteBase}/website%20optimization%20services%20.png`, imageAlt: "Website optimization services" },
      { title: "Website Security Services", copy: "Firewall setup, malware protection, SSL configuration, and vulnerability fixes for maximum website protection.", image: `${websiteBase}/Website%20security%20services.png`, imageAlt: "Website security services" },
      { title: "Website Migration Services", copy: "Smooth, secure migration from any platform or hosting without losing data, rankings, or design.", image: `${websiteBase}/website%20migitration.png`, imageAlt: "Website migration services" },
      { title: "API Integration Services", copy: "CRM, payment gateway, booking tools, analytics, and third-party system integrations for advanced functionality.", image: `${websiteBase}/API%20intregration%20services%20.png`, imageAlt: "API integration services" },
      { title: "Website Redesign Service", copy: "Modern redesigns that elevate your brand, improve performance, and increase conversions.", image: `${websiteBase}/Website%20Redesign.png`, imageAlt: "Website redesign service" }
    ],
    processHeading: "Our 4-Step Website Development Process",
    processCopy: "At Austro Web and Logo, our lean workflow promotes clarity, precision, and a high level of quality output for every project.",
    process: [
      { title: "Consultation & Discovery", copy: "Our engagement starts with a detailed talk to get to know your objectives, target audience, brand personality and functionality features needed.", image: `${websiteBase}/process/Consultation%20&%20Discovery.png`, imageAlt: "Consultation and discovery" },
      { title: "Wireframing and Prototype Design", copy: "Then we develop structured layouts and UI/UX prototypes to demonstrate visual direction, user experience and page structure.", image: `${websiteBase}/process/Wireframing%20and%20Prototype%20Design.png`, imageAlt: "Wireframing and prototype design" },
      { title: "Complete Development and Implementation", copy: "Our developers transform your design into a real life application with clean code, responsive frameworks, security and integrations.", image: `${websiteBase}/process/Complete%20Development%20and%20Implementation.png`, imageAlt: "Complete development and implementation" },
      { title: "Testing, Launch and Optimization", copy: "Your site is tested for speed, mobile performance and security before launch, then optimized so everything works smoothly.", image: `${websiteBase}/process/Testing,%20Launch%20and%20Optimization.png`, imageAlt: "Testing launch and optimization" }
    ],
    trustHeading: "The Effect of Web Design of Good Quality",
    trustCopy: [
      "An effective web site does not just help make your brand appear professional; it directly impacts interaction, engagement and conversion among users.",
      "Good web design boosts trust, increases credibility and provides a smooth experience that helps visitors take meaningful action."
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["How much does website development cost in Australia?", "Website development cost in Australia varies depending on the size, features, and complexity of your website. At Austro Web and Logo, we provide transparent quotes based on your exact business requirements."],
      ["How long does it take to develop a website?", "Most business websites take 2-4 weeks to complete, depending on project scope, revisions, and features required."],
      ["Do you offer custom website development services?", "Yes. We specialise in custom website development services tailored to your brand, audience, and business goals."],
      ["Will my website be mobile-friendly and responsive?", "Absolutely. Every website we build is fully responsive across mobile, tablet, and desktop devices."],
      ["Do you develop eCommerce websites?", "Yes. We build eCommerce websites with secure checkout systems, product management, inventory control, and fast shopping experiences."]
    ],
    ctaHeading: "Start Your Web Project Today",
    ctaCopy: "Austro Web and Logo helps businesses build modern, responsive and conversion-focused websites that support long-term digital growth."
  },
  {
    slug: "mobile-app-services",
    title: "Mobile App Services",
    metaTitle: "Mobile App Design and Development Services in Australia",
    metaDescription: "Austro Web and Logo provides mobile app design and development services for Australian businesses, including UI/UX, iOS, Android, Flutter, React Native, prototyping, redesign, startup apps, enterprise apps, and app maintenance.",
    eyebrow: "Mobile App Services",
    hero: {
      heading: "Mobile App Design and Development Services in Australia",
      copy: [
        "At Austro Web and Logo, we offer mobile app design and development services to Australian based businesses willing to go digital.",
        "Our team combines strategy, innovation, and performance-based UI/UX to develop apps that achieve quantifiable growth."
      ],
      image: `${mobileBase}/icon3/Mobile%20app%20UI%20UX%20design.png`,
      imageAlt: "Mobile app design and development services"
    },
    highlights: [
      { title: "User-First UI/UX", copy: "Intuitive, engaging interfaces designed around how real users behave." },
      { title: "iOS & Android", copy: "Native and cross-platform apps that perform smoothly on every device." },
      { title: "Scalable Builds", copy: "Secure, well-structured architecture ready to grow with your user base." },
      { title: "Launch & Support", copy: "Testing, deployment, and ongoing maintenance to keep your app reliable." }
    ],
    introSections: [
      {
        heading: "Engaging & Scalable Mobile App Solutions for Modern Businesses",
        copy: [
          "A robust mobile application is not only a design, but a business booster. Austro Web and Logo provides outcome-based mobile application development services that enhance customer interaction, streamline operations and boost revenues.",
          "We are user experience, performance, and scalability oriented and make sure that your app is able to scale with the growth of your business."
        ],
        image: `${mobileBase}/icon3/Premier%20mobile%20app%20development%20.png`,
        imageAlt: "Premier mobile app development"
      },
      {
        heading: "Why Australian Businesses Choose Austro Web and Logo for App Development",
        copy: [
          "Australian brands collaborate with Austro Web and Logo due to our ability to provide results-oriented mobile app design and development services that are performance-based, secure, and able to grow.",
          "We are strategic and technologically advanced to make all our apps worth real business."
        ],
        image: `${mobileBase}/icon/Custom%20UIUX%20Design.png`,
        imageAlt: "Custom mobile UI UX design"
      }
    ],
    servicesHeading: "End-to-End Mobile App Design & Development Services We Offer",
    servicesCopy: "Our mobile application services cover planning, UI/UX design, development, testing, launch, and ongoing support for startups, SMEs and enterprises.",
    cards: [
      { title: "Mobile App UI/UX Design", copy: "Interactive and friendly user interface and experience that enhances interaction, usability and retention of customers in all devices.", image: `${mobileBase}/icon3/Mobile%20app%20UI%20UX%20design.png`, imageAlt: "Mobile app UI UX design" },
      { title: "Premier Mobile App Development", copy: "App solutions designed to suit your business logic, functionality, and scalability needs to expand over the long term.", image: `${mobileBase}/icon3/Premier%20mobile%20app%20development%20.png`, imageAlt: "Premier mobile app development" },
      { title: "iOS & Android mobile app design and development", copy: "Native and cross-platform applications that provide a high level of performance on both iOS and Android platforms.", image: `${mobileBase}/icon3/IOS%20and%20mobile%20app%20design%20and%20development.png`, imageAlt: "iOS and Android mobile app design and development" },
      { title: "Flutter App Development", copy: "Quick and economical cross platform apps based on Flutter to provide uniformity in performance and modern user interfaces.", image: `${mobileBase}/icon3/Flutter%20app%20development.png`, imageAlt: "Flutter app development" },
      { title: "React Native App Development", copy: "Scalable and flexible mobile applications created using React Native to minimize time-to-market without affecting quality.", image: `${mobileBase}/icon3/Mobile%20app%20UI%20UX%20design.png`, imageAlt: "React Native app development" },
      { title: "Mobile App Prototyping and Wireframing", copy: "User flow, interactive prototypes, and wireframes used to test ideas, user journeys and functionality prior to development.", image: `${mobileBase}/icon3/Mobile%20app%20prototyping%20and%20wireframing.png`, imageAlt: "Mobile app prototyping and wireframing" },
      { title: "App Redesign & Modernization", copy: "Modernize old applications with a new interface, better performance, and new user experience criteria.", image: `${mobileBase}/icon3/App%20redesign%20and%20modernization.png`, imageAlt: "App redesign and modernization" },
      { title: "Mobile App Development start-up", copy: "MVP-driven app development that assists startups to launch fast, test concepts, and scale confidently.", image: `${mobileBase}/icon3/Mobile%20app%20development%20startup.png`, imageAlt: "Mobile app development startup" },
      { title: "Enterprise Mobile Application Development", copy: "Strong, safe mobile systems capable of managing complicated procedures, integrations, and high user numbers.", image: `${mobileBase}/icon3/Enterprise%20mobile%20app%20development.png`, imageAlt: "Enterprise mobile application development" },
      { title: "App Maintenance & Support", copy: "Continuous updates, monitoring, and optimizing to guarantee credible mobile application development services after launch.", image: `${mobileBase}/icon3/App%20maintence%20and%20support.png`, imageAlt: "App maintenance and support" }
    ],
    processHeading: "Our Tested Mobile App Design and Development",
    process: [
      { title: "Discovery & Strategy", copy: "We start by knowing your business objectives, target audience and technical specifications.", image: `${mobileBase}/icon2/Discovery%20and%20strategy.png`, imageAlt: "Discovery and strategy" },
      { title: "UI/UX Design", copy: "Our designers build user-friendly and aesthetically attractive interfaces that improve interaction and corporate design.", image: `${mobileBase}/icon2/UI%20UX%20Design.png`, imageAlt: "UI UX design" },
      { title: "Development", copy: "We create secure and scalable mobile app functionality with a clean development approach.", image: `${mobileBase}/icon2/Development.png`, imageAlt: "Development" },
      { title: "Testing", copy: "All apps are tested for functionality, performance, security and compatibility across devices.", image: `${mobileBase}/icon2/Testing.png`, imageAlt: "Testing" },
      { title: "Launch & Support", copy: "Our post deployment services include monitoring, updates and technical support.", image: `${mobileBase}/icon2/Launch%20and%20support.png`, imageAlt: "Launch and support" }
    ],
    trustHeading: "The Relaxing Mobile Apps to Showcase Your Brand",
    trustCopy: [
      "Bring your ideas to life and create high impact mobile experiences that take your brand to the next level.",
      "Our professional team provides mobile app design services centered on usability, performance, and aesthetic beauty."
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["What are the industries on which you develop mobile apps?", "Our mobile apps are developed across startups, eCommerce, healthcare, real estate, logistics, education, and enterprise businesses throughout Australia."],
      ["Are you an iOS and Android apps designer?", "Yes, we build and develop both iOS and Android based apps with native and cross-platform technologies."],
      ["Which is the approximate time of mobile app development?", "Timelines are based on complexity, features and platforms. A simple application can take 6-8 weeks, while more complex applications can take months."],
      ["Will you assist with app UI/UX design only?", "Absolutely. We also provide standalone UI/UX design, wireframing and prototyping for businesses that already have development teams."],
      ["Do you provide post-launch maintenance of apps?", "Our implementation of long-term reliability includes maintenance, updates, performance monitoring, and security assurances."]
    ],
    ctaHeading: "Ready to Build a High-Performance Mobile App?",
    ctaCopy: "The next step towards digital progress is a mobile application that can perform, scale, and attract users. Austro Web and Logo transforms ideas into mobile solutions that create business impact."
  },
  {
    slug: "logo-design-service",
    title: "Logo Design Service",
    metaTitle: "Best Logo Design Services in Australia",
    metaDescription: "Get the best logo design services in Australia with custom concepts, fast delivery, affordable packages, and professional designers creating logos that elevate your brand.",
    eyebrow: "Logo Design Service",
    hero: {
      heading: "Australia's Best Logo Design Services for Modern Brands",
      copy: [
        "Need the best logo design services that will build your brand within seconds? Austro Web/Logo is a reliable logo design agency Australia, which provides startup, small, and big business logo designing services in Australia. We are the team specialising in the creation of powerful visual impression with the help of individual ideas and professional logo design Australia created to achieve long-term success.",
        "Why do you want our logo designing services? Unique 100 percent industry-tailored concepts. Infinite amendments to absolute satisfaction. Quick, quality service and delivery. Extensive ownership privileges on each project."
      ],
      image: `${logoBase}/choose.png`,
      imageAlt: "Why Australian businesses choose Austro Web and Logo for logo design"
    },
    highlights: [
      { title: "Custom Concepts", copy: "100% industry-tailored logo concepts designed from scratch — never templates." },
      { title: "Unique Brand Identity", copy: "Distinct, strategic visuals that make your brand stand out across every platform." },
      { title: "Unlimited Revisions", copy: "Infinite amendments until your logo feels exactly right for your brand." },
      { title: "Final Files Included", copy: "Production-ready files for web, print, merchandise, and signage with full ownership rights." }
    ],
    introSections: [
      {
        heading: "Creating Logos that create Strong Brands",
        copy: [
          "Austro Web & Logo provides superior quality branding and logo designing services to organizations in Australia, enabling brands to make strong first impressions using distinct and strategic images. Our portfolio includes minimal, modern, mascot, illustration, high-quality artwork, 3D and animated designs."
        ]
      },
      {
        heading: "Why Australian Businesses Choose Austro Web & Logo",
        copy: [
          "To create an effective brand identity, you can use more than a designer; you require a logo design agency that is strategic, and that comprehends your business, your audience, and your long-term perspective. Our best logo design services provided at Austro Web & Logo are research-based, creative and experienced in the industry.",
          "We combine the heavy emphasis on branding with contemporary aesthetics, which enables us to create images that cut across all media, including print, digital, merchandise and signage. Our customers are confident in us due to our personalised branding and logo design services whereby each idea is unique, relevant and developed to help you grow.",
          "You need quality, speed and a team with local market knowledge when you hire a logo designer Australia. Through Austro Web & Logo, you do not only get a logo but a whole image that enhances your brand name and enables you to be conspicuous in the Australian competitive market."
        ],
        image: `${logoBase}/laptop.webp`,
        imageAlt: "Professional logo design shown on a laptop"
      }
    ],
    servicesHeading: "Our Logo Design Services",
    servicesCopy: "Austro Web & Logo offers complete best logo design services to businesses operating in Australia and wishing to create a solid visual image.",
    cards: [
      { title: "Minimal Logo Design", copy: "Clean, timeless, and professional--perfect for brands wanting simplicity and clarity. Ideal for corporate firms, tech companies, and modern startups.", image: `${logoBase}/Minimal%20logo%20design.png`, imageAlt: "Minimal logo design" },
      { title: "Modern Logo Design", copy: "A bold and innovative style that helps businesses appear fresh and forward-thinking. Our logo design services Australia ensure every concept is tailored to your market.", image: `${logoBase}/Minimal%20logo%20design.png`, imageAlt: "Modern logo design" },
      { title: "Abstract Logo Design", copy: "Creative, unique, and concept-driven. These symbolic logos help brands express deeper meaning beyond literal shapes.", image: `${logoBase}/Abstract%20logo%20design.png`, imageAlt: "Abstract logo design" },
      { title: "Logo Redesign", copy: "If your existing identity feels outdated or ineffective, our custom logo design services refresh and refine your logo while maintaining your brand essence.", image: `${logoBase}/logo%20Redesigning.png`, imageAlt: "Logo redesign" },
      { title: "Mascot Logo Design", copy: "Fun, dynamic, and memorable. Mascot logos are highly effective for gaming teams, sports clubs, entertainment brands, and merchandise.", image: `${logoBase}/Mascot%20logo%20design.png`, imageAlt: "Mascot logo design" },
      { title: "Illustration Logo Design", copy: "Hand-crafted visuals created with attention to detail. Perfect for artistic brands that need high-level illustration.", image: `${logoBase}/illustration%20logo%20design.png`, imageAlt: "Illustration logo design" },
      { title: "Premium Artwork Logo", copy: "Luxury-grade artwork with advanced shading, depth, and precision--ideal for premium or high-end brands.", image: `${logoBase}/Premium%20Art%20Work.png`, imageAlt: "Premium artwork logo" },
      { title: "Signature Logo Design", copy: "Elegant, handwritten-style logos crafted for influencers, coaches, photographers, and lifestyle brands.", image: `${logoBase}/Signature%20logo%20design.png`, imageAlt: "Signature logo design" },
      { title: "Gaming Logo Design", copy: "Powerful, high-energy visuals created for gamers, streamers, and digital creators looking for standout identity.", image: `${logoBase}/gaming%20logo%20design.png`, imageAlt: "Gaming logo design" },
      { title: "Esports Team Logo", copy: "Competitive-grade branding designed for jerseys, banners, overlays, and digital platforms.", image: `${logoBase}/Esport%20team%20logo%20.png`, imageAlt: "Esports team logo" },
      { title: "Clothing Brand Logo Design", copy: "Fashion-forward visuals crafted with trend awareness and merch appeal for clothing labels.", image: `${logoBase}/Clothing%20logo%20design.png`, imageAlt: "Clothing brand logo design" },
      { title: "3D Logo Design", copy: "A modern and realistic approach that adds depth, shadow, and dimension--highly effective for tech, construction, and digital brands seeking professional logo design Australia.", image: `${logoBase}/3D%20metalic%20logo%20design.png`, imageAlt: "3D logo design" },
      { title: "Animated & Cinematic Logo Design", copy: "Bring your brand to life with smooth animation and polished reveal sequences--perfect for YouTube intros, brand ads, and digital marketing campaigns.", image: `${logoBase}/Animated%20&%20Cinematic%20Logo%20Design.png`, imageAlt: "Animated cinematic logo design" }
    ],
    processHeading: "Our Logo Design Process",
    processCopy: "At Austro Web and Logo we have a sophisticated process of custom logo that is aimed at producing the most strategic and effective outcomes.",
    process: [
      { title: "Creative Brief", copy: "Every project begins with a detailed discovery phase where we learn about your business, audience, competitors, and brand goals.", image: `${logoBase}/process-icon/Creative%20Brief.png`, imageAlt: "Creative brief" },
      { title: "Research & Strategy", copy: "We conduct market analysis, study industry trends, evaluate colour psychology, and review competitor branding.", image: `${logoBase}/process-icon/Research%20&%20Strategy.png`, imageAlt: "Research and strategy" },
      { title: "Concept Development", copy: "Our designers create unique logo concepts from scratch--never templates.", image: `${logoBase}/process-icon/Concept%20Development.png`, imageAlt: "Concept development" },
      { title: "Revisions & Refinement", copy: "Your feedback drives refinement. We adjust shapes, colours, typography, and proportions to perfect your chosen concept.", image: `${logoBase}/process-icon/Concept%20Development.png`, imageAlt: "Revisions and refinement" },
      { title: "Final Delivery in All Formats", copy: "Once completed, your final logo is delivered in all essential file types, ready for web, print, merchandise, signage, and advertising.", image: `${logoBase}/process-icon/Final%20Delivery%20in%20All%20Formats.png`, imageAlt: "Final delivery in all formats" }
    ],
    trustHeading: "Why Australian Businesses Trust Us",
    trustCopy: [
      "Austro Web & Logo is reputed to be one of the best logo design agency Australia in the sense that we are not all about beautiful pictures but long term strategic branding.",
      "Customers prefer us since our services are quick, accurate and supported by experience. You may be building a new identity or updating an existing one, we customize it all to suit your purpose.",
      "The other reason why businesses choose us is transparency--you get 100 percent ownership rights of your final logo with no restriction and no undisclosed charges."
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["What is the average logo design cost Australia?", "The logo design cost Australia depends on the style, number of concepts, and level of detail required. Our pricing is transparent and designed to offer premium quality at a fair rate."],
      ["What is the typical logo design price Australia for small businesses?", "Most small businesses prefer our Starter or Professional packages, which provide an affordable logo design price Australia while maintaining high-quality branding."],
      ["Do you provide custom logo design services from scratch?", "Yes -- all our logos are built through complete custom logo design services, ensuring originality and brand-aligned creativity. We never use templates or pre-made elements."],
      ["How long does the logo design process take?", "Initial concepts are usually delivered within 2-4 days, with revisions depending on your feedback and complexity."],
      ["Will I fully own the final logo?", "Absolutely. You receive complete ownership rights once the project is finalized."]
    ],
    ctaHeading: "Ready to Elevate Your Brand With Professional Logo Design?",
    ctaCopy: "In case you need the best logo design services to boost your brand, then Austro Web & Logo is the place to visit. Our team of experts provides high quality logo design services Australia, tailored to your business goals."
  },
  {
    slug: "digital-marketing-services",
    title: "Digital Marketing Services",
    metaTitle: "Best Digital Marketing Services in Australia",
    metaDescription: "Austro Web and Logo provides digital marketing services for Australian businesses, including SEO, social media, Google Ads, content marketing, analytics, and reporting.",
    eyebrow: "Digital Marketing Services",
    hero: {
      heading: "Best Digital Marketing Services in Australia That Grow Your Business",
      copy: [
        "We are Austro Web and Logo, and we offer the best digital marketing services that enable Australian businesses to find more customers, create quality leads, and gain more revenue.",
        "Whether you are a startup or an old brand, our team of experts designs tailored digital marketing services that deliver against your business objectives, reach the right people and get the most out of your investment."
      ],
      image: `${digitalBase}/Digital%20Marketing%20with%20Results-OrientedModern%20Business.png`,
      imageAlt: "Digital marketing with results-oriented modern business"
    },
    highlights: [
      { title: "Data-Driven Strategy", copy: "Campaigns built on research, analytics, and measurable performance." },
      { title: "More Qualified Leads", copy: "Reach the right audience and turn attention into real enquiries." },
      { title: "Multi-Channel Reach", copy: "SEO, social media, Google Ads, and content working together for growth." },
      { title: "Transparent Reporting", copy: "Clear performance reports with insights and practical next steps." }
    ],
    introSections: [
      { heading: "Digital Marketing with Results-Oriented Modern Business", copy: ["To become successful in the digital world today, it is necessary to do more than being online; one needs to have a strategy, accurate implementation, and measurable results.", "Our online marketing service is creative and uses data to make sure your brand remains competitive, relevant, and poised to grow long-term in the Australian market."], image: `${digitalBase}/Digital%20Marketing%20with%20Results-OrientedModern%20Business.png`, imageAlt: "Results oriented digital marketing" },
      { heading: "Reliable Digital Marketing Consultants of Australian Companies", copy: ["Over years of experience in the industry, Austro Web and Logo has been able to grow Australia businesses based on smart and performance-based marketing strategies.", "Through our strategic understanding and established digital marketing services, we will make sure that your brand is informed, constantly optimized, and a long-term online success within the competitive Australian market."], image: `${digitalBase}/Reliable%20Digital%20MarketingConsultants%20of%20Australian%20Companies.png`, imageAlt: "Reliable digital marketing consultants" },
      { heading: "Our Digital Marketing Success Stories", copy: ["Our performance speaks louder than words. Through well planned digital campaigns, we have assisted businesses in Australia to gain greater online presence, engagement and steady lead streams."], image: `${digitalBase}/Our%20Digital%20Marketing%20Success%20Stories.png`, imageAlt: "Digital marketing success stories" }
    ],
    servicesHeading: "Complete Digital Marketing Services Under One Roof",
    servicesCopy: "At Austro Web and Logo we offer end-to-end digital marketing services intended to assist businesses to grow faster, smarter and in a more sustainable manner.",
    cards: [
      { title: "Social Media Marketing", copy: "We develop platform-based campaigns that develop brand awareness, engagement, and leads using a strategic online marketing service that is unique to your audience.", image: `${digitalBase}/Social%20media%20markeitng.png`, imageAlt: "Social media marketing" },
      { title: "Search Engine Optimization (SEO)", copy: "Our digital marketing services are long-term, data-driven, and aimed at rankings, organic traffic, and conversions.", image: `${digitalBase}/Search%20engine%20optimiziation.png`, imageAlt: "Search engine optimization" },
      { title: "Google Ads", copy: "Our ad campaigns are high converting and are created to make the most of visibility and ROI by using a performance-based digital marketing service.", image: `${digitalBase}/Google%20ADS.png`, imageAlt: "Google Ads" },
      { title: "Content Marketing", copy: "We have great content strategies, which draw in, train, and transform audiences based on the expertise of a seasoned digital marketing consultant.", image: `${digitalBase}/Content%20Marketing.png`, imageAlt: "Content marketing" },
      { title: "Email Marketing", copy: "We create email campaigns that support customer communication, trust-building, and repeat engagement.", image: `${digitalBase}/Email%20markeitng.png`, imageAlt: "Email marketing" },
      { title: "Graphic Design", copy: "Our visuals reinforce campaigns and shape identity as well as branding assets within small business digital marketing services.", image: `${digitalBase}/Graphic%20design.png`, imageAlt: "Graphic design" },
      { title: "Website Development", copy: "As a reputable digital marketing agency for small business, we build conversion-oriented websites that help them achieve growth objectives.", image: `${digitalBase}/Website%20development.png`, imageAlt: "Website development" },
      { title: "Influencer Marketing", copy: "We identify brands with relevant creators to initiate trust, reach and engagement by use of a strategic online marketing service.", image: `${digitalBase}/Influencer%20marekting%20.png`, imageAlt: "Influencer marketing" },
      { title: "Analytics & Reporting", copy: "We report performance, insights, and ROI in detail under the advice of a data-driven digital marketing consultant.", image: `${digitalBase}/Analytics%20and%20report.png`, imageAlt: "Analytics and reporting" }
    ],
    processHeading: "How We Turn Strategy Into Real Digital Growth",
    process: [
      { title: "Discover", copy: "We start by understanding your business goals, target audience, market and digital opportunities.", image: `${digitalBase}/stragety/Discover.png`, imageAlt: "Discover" },
      { title: "Strategy", copy: "We build a tailored marketing roadmap aligned with your growth objectives.", image: `${digitalBase}/stragety/Strategy.png`, imageAlt: "Strategy" },
      { title: "Execute", copy: "We launch campaigns across the right platforms with clear creative and performance tracking.", image: `${digitalBase}/stragety/Execute.png`, imageAlt: "Execute" },
      { title: "Optimize & Scale", copy: "We analyze results, improve campaigns, and scale what works.", image: `${digitalBase}/stragety/Optimize%20&%20Scale.png`, imageAlt: "Optimize and scale" }
    ],
    trustHeading: "Marketing Strategies Crafted for Real Business Growth",
    trustCopy: ["At Austro Web and Logo we feel that the key to good marketing is to be familiar with your business and it is not merely selling a service.", "We are a reliable digital marketing agency for small business, and we believe in long-term relationships and creativity, data, and performance metrics."],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["Which digital marketing services do you provide?", "We provide SEO, social media marketing, Google Ads, content marketing, email marketing, influencer marketing, campaign graphics, website development, analytics, and reporting."],
      ["Can digital marketing help my business generate more leads?", "Yes. We build campaigns around your audience, search intent, landing pages, and conversion goals so your marketing attracts better qualified enquiries."],
      ["Do you offer SEO for small businesses?", "Yes. Our SEO work includes keyword research, technical improvements, on-page optimisation, local visibility, and content planning for sustainable organic growth."],
      ["Do you manage Google Ads and paid campaigns?", "Yes. We create and optimise paid campaigns focused on visibility, lead quality, conversion tracking, and return on investment."],
      ["Will I receive digital marketing reports?", "Yes. We provide clear performance reporting with campaign insights, traffic data, lead indicators, and practical recommendations for the next stage."]
    ],
    ctaHeading: "Start Your Digital Marketing Journey Today",
    ctaCopy: "Ready to grow online with strategic digital marketing services? Austro Web and Logo can help your business attract, convert, and scale with a performance-focused plan."
  },
  {
    slug: "brand-services",
    title: "Brand Services",
    metaTitle: "Brand Design Services in Australia",
    metaDescription: "Build a recognisable brand with Austro Web and Logo brand design services, including brand identity, style guides, rebranding, stationery, and brand systems.",
    eyebrow: "Brand Services",
    hero: {
      heading: "Brand Design Services for Australian Businesses",
      copy: ["Austro Web and Logo helps businesses create strong, consistent and scalable brand identities that support recognition, trust and professional growth."],
      image: `${brandBase}/brand_banner.png`,
      imageAlt: "Brand design services"
    },
    highlights: [
      { title: "Strategic Identity", copy: "Brand systems planned around your goals, market, and audience." },
      { title: "Consistent Everywhere", copy: "A visual language that works across digital, print, and social media." },
      { title: "Recognisable & Trusted", copy: "Branding that builds recognition, credibility, and customer trust." },
      { title: "Scalable Brand System", copy: "Guidelines and assets that grow alongside your business." }
    ],
    introSections: [
      { heading: "Strategic Branding That Makes Businesses Recognisable", copy: ["The effective brand can make your business look, sound and feel the same at all points of contact. Austro Web and Logo develops brand identities that are strategically planned and creatively designed."], image: `${brandBase}/Strategic%20Branding%20That%20Makes%20Businesses%20Recognisable.png`, imageAlt: "Strategic branding" },
      { heading: "Professional Brand Identity Design Services in Australia", copy: ["Our brand identity design services in Australia are focused on giving companies a visual system that can work across digital and print platforms."], image: `${brandBase}/Professional%20Brand%20Identity%20Design%20Services%20in%20Australia.png`, imageAlt: "Professional brand identity design" }
    ],
    servicesHeading: "Full Brand Designing Services to expanding companies",
    servicesCopy: "We provide complete branding support for companies that need recognition, clarity and consistency.",
    cards: [
      { title: "Brand Identity Design", copy: "A complete identity direction built around your goals, market and customer expectations." },
      { title: "Brand Style Guide", copy: "Structured brand rules that define logo usage, colours, typography, imagery and layout direction." },
      { title: "Full Branding Kit", copy: "A practical set of brand assets that helps your business show up consistently across channels." },
      { title: "Rebranding Service", copy: "We help existing businesses refresh or reposition their visual identity while keeping what customers already recognise." },
      { title: "Corporate Branding", copy: "Professional branding for corporate companies that need trust, consistency and authority." },
      { title: "Business Card Design", copy: "Business card designs that present your brand with clarity and confidence." },
      { title: "Letterhead & Envelope Design", copy: "Stationery assets that carry your brand into everyday communication." },
      { title: "Full Stationery Package", copy: "A complete stationery package for businesses that need a polished brand system." },
      { title: "Email Signature Design", copy: "Professional email signatures that keep your brand present in daily communication." },
      { title: "Content Strategy Design", copy: "Creative and strategic direction for consistent branded content." }
    ],
    processHeading: "Our Established Branding System",
    process: [
      { title: "Discover", copy: "We learn about your business, audience and position.", image: `${brandBase}/icon/Discover.png`, imageAlt: "Discover" },
      { title: "Strategy", copy: "We shape a brand strategy that supports recognition and growth.", image: `${brandBase}/icon/Strategy.png`, imageAlt: "Strategy" },
      { title: "Design", copy: "We create the visual system and brand assets.", image: `${brandBase}/icon/Design.png`, imageAlt: "Design" },
      { title: "Launch", copy: "We prepare your assets for digital and print rollout.", image: `${brandBase}/icon/Launch.png`, imageAlt: "Launch" },
      { title: "Scale", copy: "We help the brand system grow with the business.", image: `${brandBase}/icon/Scale.png`, imageAlt: "Scale" }
    ],
    trustHeading: "The reasons why Australian Businesses prefer Austro Web and Logo",
    trustCopy: ["Australian companies choose Austro Web and Logo because our branding process combines creativity, consistency and practical delivery.", "We build brand systems that work across websites, social media, print, marketing and customer-facing materials."],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["What are brand design services and why are they important?", "Brand design services focus on creating a consistent visual and strategic identity for your business. They help build recognition, trust, and a professional image across all customer touchpoints."],
      ["What is included in your Business Branding Services?", "Our Business Branding Services include brand identity design, brand guidelines, stationery design, and complete branding systems tailored to your business goals."],
      ["Do you offer rebranding for existing businesses?", "Yes, we help businesses refresh or reposition their brands to stay relevant, competitive, and aligned with new goals."],
      ["How do you ensure brand consistency?", "We create structured brand guidelines that define logo usage, colours, typography, and design rules."]
    ],
    ctaHeading: "Design Your Brand Today with Our Experts",
    ctaCopy: "Austro Web and Logo assists Australian companies to develop powerful, stable and scalable brand identities that lead to actual growth."
  },
  {
    slug: "graphics-design-services",
    title: "Graphic Design Services",
    metaTitle: "Best Graphic Design Services in Australia",
    metaDescription: "Austro Web and Logo provides graphic design services in Australia, including branding, social media graphics, marketing materials, packaging, and digital design.",
    eyebrow: "Graphic Design Services",
    hero: {
      heading: "Best Graphic Design Services in Australia That Elevate Your Brand",
      copy: ["Austro Web and Logo provides result oriented graphic design services Australia based businesses rely on to outshine competitors. Strategy, innovation, and visual excellence come together to produce designs that enhance brand awareness and increase interaction."],
      image: `${graphicsBase}/graphic_banner.png`,
      imageAlt: "Graphic design services"
    },
    highlights: [
      { title: "Creative Excellence", copy: "Eye-catching visuals shaped by both strategy and design craft." },
      { title: "On-Brand Consistency", copy: "Every asset aligned with your identity, audience, and tone." },
      { title: "Print & Digital Ready", copy: "Files prepared for web, social media, and high-quality print." },
      { title: "Affordable Packages", copy: "Flexible pricing with clear deliverables and fast turnaround." }
    ],
    introSections: [
      { heading: "Australian Businesses Professional Graphic Design Services", copy: ["Our professional graphic design services are designed to enable Australian business to develop powerful, outstanding, and conversion based brand images."], image: `${graphicsBase}/Australian%20Businesses%20Professional%20Graphic%20Design%20Services.png`, imageAlt: "Professional graphic design services" },
      { heading: "Portfolio of Creative Graphic Design", copy: ["Take a look at our various portfolio of custom graphic design services created to suit businesses in Australia."], image: `${graphicsBase}/Portfolio%20of%20Creative%20Graphic%20Design.png`, imageAlt: "Creative graphic design portfolio" },
      { heading: "Complete Graphic Design Services in Australia", copy: ["Austro Web and Logo provide complete graphic design services Australia businesses count on in order to establish strong, consistent, and aesthetically appealing brands."], image: `${graphicsBase}/Complete%20Graphic%20Design%20Services%20in%20Australia.png`, imageAlt: "Complete graphic design services in Australia" }
    ],
    servicesHeading: "Complete Graphic Design Services Under One Roof",
    servicesCopy: "Every deliverable is aligned with your goals, audience, and brand tone.",
    cards: [
      { title: "Logo Design", copy: "We come up with catchy logos which represent your brand persona and leave a lasting first impression both online and in print media.", image: `${graphicsBase}/icon/Logo%20design.png`, imageAlt: "Logo design" },
      { title: "Brand Name and Brand Model", copy: "The branding solutions we offer are used by Australian businesses to create a unified visual identity to build strength of recognition and trust.", image: `${graphicsBase}/icon/Brand%20name%20and%20brand%20model.png`, imageAlt: "Brand name and brand model" },
      { title: "Social Media Graphic Design", copy: "Visuals aimed at enhancing interaction, brand awareness, and consistency on all social media platforms.", image: `${graphicsBase}/icon/Logo%20design.png`, imageAlt: "Social media graphic design" },
      { title: "Marketing & Print Design", copy: "Professional print designs to support promotions and offline campaigns, from brochures to flyers.", image: `${graphicsBase}/icon/Logo%20design.png`, imageAlt: "Marketing and print design" },
      { title: "Digital Graphic Design and Web Site", copy: "Strong visuals optimized for websites, landing pages and online assets to enhance experience and conversions.", image: `${graphicsBase}/icon/Logo%20design.png`, imageAlt: "Digital graphic design and website" },
      { title: "Packaging & Label Design", copy: "Extremely attractive packaging that makes products stand out on shelves and conveys quality and brand worth.", image: `${graphicsBase}/icon/Logo%20design.png`, imageAlt: "Packaging and label design" }
    ],
    trustHeading: "Affordable Graphic Design Packages for Australian Businesses",
    trustCopy: ["High quality graphic design services can be affordable to both large and small businesses in Australia due to our flexible pricing.", "We provide clear packages with visible deliverables, short delivery time and revisions to deliver maximum satisfaction."],
    faqHeading: "Frequently asked questions of graphic design services",
    faqs: [
      ["What graphic design services do you offer in Australia?", "We offer complete graphic design services Australia businesses need, including logo design, branding, social media graphics, marketing materials, digital design, packaging, and custom on-demand design solutions."],
      ["Are your graphic design services suitable for small businesses?", "Yes. Our services are designed for startups, small businesses, and growing companies looking for professional-quality design that fits their budget and brand goals."],
      ["Do you provide custom graphic design services?", "Yes, all our solutions are tailored. Our custom graphic design services are created based on your brand identity, audience, and marketing objectives."],
      ["How do I get started with a graphic design specialist?", "Simply contact us for a consultation, and a dedicated graphic design specialist will guide you through the process from concept to completion."]
    ],
    ctaHeading: "Let us create a Powerful Visual Identity of your Brand",
    ctaCopy: "Your brand needs designs that are distinct and expressive. Austro Web and Logo is available to assist you on a long-term creative support or a single project."
  },
  {
    slug: "print-services",
    title: "Print Services",
    metaTitle: "Professional Print Design Services for Australian Businesses",
    metaDescription: "Austro Web and Logo provides print design services for brochures, flyers, packaging, labels, banners, stationery, merchandise, magazines, and reports.",
    eyebrow: "Print Services",
    hero: {
      heading: "Professional Print Design Services for Australian Businesses",
      copy: ["Austro Web and Logo is an organization offering quality print design services to businesses in Australia to make them prompt in competitive markets. From eye-catching brochures and flyers to high-quality packaging and business stationery, every asset is designed to capture attention and support the brand name."],
      image: `${printBase}/print_banner.png`,
      imageAlt: "Print design services"
    },
    highlights: [
      { title: "High-Impact Designs", copy: "Print work that grabs attention and supports your marketing." },
      { title: "Print-Ready Files", copy: "High-resolution, production-ready artwork prepared for any printer." },
      { title: "Brand Consistency", copy: "Colours, typography, and layout aligned with your identity." },
      { title: "Full Collateral Range", copy: "Brochures, packaging, stationery, banners, and branded merchandise." }
    ],
    introSections: [
      { heading: "High Impact Print Design That Makes Your Brand Stand Out", copy: ["Professionally created print materials are still important in creating trust and brand recognition. We produce visual work that assists your marketing process and makes your message clear to the audience."], image: `${printBase}/High%20Impact%20Print%20Design%20That%20Makes%20Your%20Brand%20Stand%20Out.png`, imageAlt: "High impact print design" },
      { heading: "Creative Print Design Portfolio", copy: ["Our creative portfolio is a varied selection of print projects created to serve businesses in Australia, including brochures, flyers, packaging and branded stationery."] }
    ],
    servicesHeading: "Full Design and Printing Services We Provide",
    servicesCopy: "Our professional print design solutions are full-scale and designed to meet the requirements of Australian businesses.",
    cards: [
      { title: "Packaging Design Services", copy: "Our high-end package designs make it easier to sell products with better shelf life and convey your brand story through the package design.", image: `${printBase}/icon/Packaging%20Design%20Services.png`, imageAlt: "Packaging design services" },
      { title: "Label and Sticker Design", copy: "Our custom label and sticker designs are designed with visibility and brand recognition in mind.", image: `${printBase}/icon/Label%20and%20Sticker%20Design.png`, imageAlt: "Label and sticker design" },
      { title: "Merchandise and Design of Apparels", copy: "Be unique with professionally crafted products and clothes for uniforms, promotional wear and branded merchandise.", image: `${printBase}/icon/Merchandise%20and%20Design%20of%20Apparels.png`, imageAlt: "Merchandise and apparel design" },
      { title: "Banner Design Event and Exhibition Banner Design", copy: "Our banner designs appeal to people in busy event areas with striking visuals and direct messages.", image: `${printBase}/icon/Banner%20Design%20Event%20and%20Exhibition%20Banner%20Design.png`, imageAlt: "Banner design" },
      { title: "Flyer and Poster Design", copy: "Market your deals in an artistic way through flyers and posters crafted for greatest effect.", image: `${printBase}/icon/Flyer%20and%20Poster%20Design.png`, imageAlt: "Flyer and poster design" },
      { title: "Business Card and Stationery Design", copy: "Professional business card and stationery designs that keep your brand consistent.", image: `${printBase}/icon/Business%20Card%20and%20Stationery%20Design.png`, imageAlt: "Business card and stationery design" },
      { title: "Design of Magazines and Annual Reports", copy: "Magazine and annual report designs focused on readability, visual hierarchy, and refined presentation.", image: `${printBase}/icon/Design%20of%20Magazines%20and%20Annual%20Reports.png`, imageAlt: "Magazine and annual report design" }
    ],
    processHeading: "Our Straightforward Print Designing Process",
    processCopy: "With our online design and printing services, we guarantee our clients are presented with an efficient process delivered with clarity, creativity and precision.",
    process: [
      { title: "Discovery & Consultation", copy: "We know your business objectives, branding and print demands.", image: `${printBase}/icon2/Discovery%20&%20Consultation.png`, imageAlt: "Discovery and consultation" },
      { title: "Distinctive Designs", copy: "Our designers create layout, colours and typography that are in line with your brand name.", image: `${printBase}/icon2/Distinctive%20Designs.png`, imageAlt: "Distinctive designs" },
      { title: "Design Execution", copy: "We design professional prints that are aimed at image effect and readability.", image: `${printBase}/icon2/Design%20Execution.png`, imageAlt: "Design execution" },
      { title: "Revisions & Refinement", copy: "You go through the designs, and we make modifications according to your response.", image: `${printBase}/icon2/Revisions%20&%20Refinement.png`, imageAlt: "Revisions and refinement" },
      { title: "Final Print & Delivery", copy: "Our files are high resolution and print-ready for flawless production.", image: `${printBase}/icon2/Final%20Print%20&%20Delivery.png`, imageAlt: "Final print and delivery" }
    ],
    trustHeading: "Why Australian Businesses Choose Austro Web and Logo",
    trustCopy: ["Australian companies use the services of Austro Web and Logo because of reliability, creativity and result-oriented print design services.", "Our commitment to quality, effective communication and customer satisfaction helps Australian brands showcase themselves with confidence."],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      ["What are print design services?", "Print design services include creating professional designs for physical marketing materials such as brochures, flyers, packaging, banners, and stationery that are ready for high-quality printing."],
      ["Do you offer design and printing services together?", "Yes, we provide complete design and printing services, delivering professionally designed, print-ready files that can be used with any printing provider in Australia."],
      ["Can I order print design services online?", "Absolutely. Our online design and printing services allow you to collaborate remotely, review designs, and receive final files without visiting a physical location."],
      ["What file formats do you provide for printing?", "We deliver high-resolution, print-ready files such as PDF, AI, EPS, and JPG, optimised for professional printing standards."]
    ],
    ctaHeading: "Get Professional Print Design Services Today",
    ctaCopy: "Austro web and logo provides innovative, trustworthy and professional solutions that will make you confident in marketing."
  }
];
