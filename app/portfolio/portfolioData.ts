export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

export const portfolioCategories = [
  "All",
  "Logo Design",
  "Website",
  "Branding",
  "Graphic Design",
  "Print Design",
  "Mobile Apps"
];

export const portfolioItems: PortfolioItem[] = [
  // Logo Design
  { title: "Animated Logo Concept 01", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/2.gif", alt: "Animated 2D logo design concept" },
  { title: "Animated Logo Concept 02", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/4.gif", alt: "Animated 2D logo design concept" },
  { title: "Animated Logo Concept 03", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/5.gif", alt: "Animated 2D logo design concept" },
  { title: "Animated Logo Concept 04", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/6.gif", alt: "Animated 2D logo design concept" },
  { title: "Animated Logo Concept 05", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/7.gif", alt: "Animated 2D logo design concept" },
  { title: "Animated Logo Concept 06", category: "Logo Design", image: "/assets/images/portfolio/2D-logo-design/8.gif", alt: "Animated 2D logo design concept" },
  { title: "Dimensional 3D Logo 01", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/1.gif", alt: "Dimensional 3D logo design" },
  { title: "Dimensional 3D Logo 02", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/2.gif", alt: "Dimensional 3D logo design" },
  { title: "Dimensional 3D Logo 03", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/3.gif", alt: "Dimensional 3D logo design" },
  { title: "Dimensional 3D Logo 04", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/4.gif", alt: "Dimensional 3D logo design" },
  { title: "Dimensional 3D Logo 05", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/5.gif", alt: "Dimensional 3D logo design" },
  { title: "Dimensional 3D Logo 06", category: "Logo Design", image: "/assets/images/portfolio/3D-logo-design/6.gif", alt: "Dimensional 3D logo design" },
  { title: "Iconic Brand Logo 01", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/1.jpg", alt: "Iconic brand logo design" },
  { title: "Iconic Brand Logo 02", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/2.jpg", alt: "Iconic brand logo design" },
  { title: "Iconic Brand Logo 03", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/3.jpg", alt: "Iconic brand logo design" },
  { title: "Iconic Brand Logo 04", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/4.jpg", alt: "Iconic brand logo design" },
  { title: "Iconic Brand Logo 05", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/5.jpg", alt: "Iconic brand logo design" },
  { title: "Iconic Brand Logo 06", category: "Logo Design", image: "/assets/services/logo-design/portfolio-logo/6.jpg", alt: "Iconic brand logo design" },

  // Website
  { title: "Custom Website Development", category: "Website", image: "/assets/services/website/Custom website development.png", alt: "Custom website development portfolio visual" },
  { title: "Website UI/UX Design", category: "Website", image: "/assets/services/website/Webdesign UI UX.png", alt: "Website UI UX design portfolio visual" },
  { title: "E-Commerce Website", category: "Website", image: "/assets/services/website/E commerce website development.png", alt: "E-commerce website portfolio visual" },
  { title: "CMS Based Website", category: "Website", image: "/assets/services/website/CMS based website development.png", alt: "CMS based website portfolio visual" },
  { title: "Landing Page Development", category: "Website", image: "/assets/services/website/Landing page development.png", alt: "Landing page development portfolio visual" },
  { title: "Web Application Development", category: "Website", image: "/assets/services/website/Web application development.png", alt: "Web application development portfolio visual" },
  { title: "Website Redesign", category: "Website", image: "/assets/services/website/Website Redesign.png", alt: "Website redesign portfolio visual" },
  { title: "API Integration Services", category: "Website", image: "/assets/services/website/API intregration services .png", alt: "API integration services portfolio visual" },
  { title: "Website Optimization", category: "Website", image: "/assets/services/website/website optimization services .png", alt: "Website optimization portfolio visual" },
  { title: "Website Maintenance & Support", category: "Website", image: "/assets/services/website/Website maintence and support.png", alt: "Website maintenance and support portfolio visual" },
  { title: "Website Security Services", category: "Website", image: "/assets/services/website/Website security services.png", alt: "Website security services portfolio visual" },
  { title: "Future-Ready Web Design", category: "Website", image: "/assets/services/website/Powerful & Future-Prospective Web designs.png", alt: "Future-ready web design portfolio visual" },

  // Branding
  { title: "Brand Identity Design", category: "Branding", image: "/assets/services/brand/Professional Brand Identity Design Services in Australia.png", alt: "Brand identity design portfolio visual" },
  { title: "Small Business Branding", category: "Branding", image: "/assets/services/brand/Small Business Branding That Gives Trust and Recognition.png", alt: "Small business branding portfolio visual" },
  { title: "Strategic Branding", category: "Branding", image: "/assets/services/brand/Strategic Branding That Makes Businesses Recognisable.png", alt: "Strategic branding portfolio visual" },
  { title: "Complete Brand System", category: "Branding", image: "/assets/services/brand/brand_banner.png", alt: "Complete brand system portfolio visual" },
  { title: "Brand Colour Palette", category: "Branding", image: "/assets/services/brand/icon2/Colour Palette.png", alt: "Brand colour palette portfolio visual" },
  { title: "Logo Direction", category: "Branding", image: "/assets/services/brand/icon2/Logo Direction.png", alt: "Brand logo direction portfolio visual" },
  { title: "Typography Systems", category: "Branding", image: "/assets/services/brand/icon2/Typography Systems.png", alt: "Brand typography systems portfolio visual" },
  { title: "Visual Consistency", category: "Branding", image: "/assets/services/brand/icon2/Visual Consistency.png", alt: "Brand visual consistency portfolio visual" },

  // Graphic Design
  { title: "Professional Graphic Design", category: "Graphic Design", image: "/assets/services/graphic designer/Australian Businesses Professional Graphic Design Services.png", alt: "Professional graphic design portfolio visual" },
  { title: "Complete Graphic Design", category: "Graphic Design", image: "/assets/services/graphic designer/Complete Graphic Design Services in Australia.png", alt: "Complete graphic design portfolio visual" },
  { title: "Creative Graphic Portfolio", category: "Graphic Design", image: "/assets/services/graphic designer/Portfolio of Creative Graphic Design.png", alt: "Creative graphic design portfolio visual" },
  { title: "Graphic Design Showcase", category: "Graphic Design", image: "/assets/services/graphic designer/graphic_banner.png", alt: "Graphic design showcase portfolio visual" },
  { title: "Brand Name & Model", category: "Graphic Design", image: "/assets/services/graphic designer/icon/Brand name and brand model.png", alt: "Brand name and model graphic design visual" },
  { title: "Logo Graphic Design", category: "Graphic Design", image: "/assets/services/graphic designer/icon/Logo design.png", alt: "Logo graphic design portfolio visual" },
  { title: "Marketing Graphics", category: "Graphic Design", image: "/assets/services/Digital Marketting/Graphic design.png", alt: "Marketing graphics portfolio visual" },

  // Print Design
  { title: "Banner & Exhibition Design", category: "Print Design", image: "/assets/services/print/icon/Banner Design Event and Exhibition Banner Design.png", alt: "Banner and exhibition print design visual" },
  { title: "Business Card & Stationery", category: "Print Design", image: "/assets/services/print/icon/Business Card and Stationery Design.png", alt: "Business card and stationery design visual" },
  { title: "Magazine & Annual Reports", category: "Print Design", image: "/assets/services/print/icon/Design of Magazines and Annual Reports.png", alt: "Magazine and annual report design visual" },
  { title: "Flyer & Poster Design", category: "Print Design", image: "/assets/services/print/icon/Flyer and Poster Design.png", alt: "Flyer and poster print design visual" },
  { title: "Label & Sticker Design", category: "Print Design", image: "/assets/services/print/icon/Label and Sticker Design.png", alt: "Label and sticker print design visual" },
  { title: "Merchandise & Apparel", category: "Print Design", image: "/assets/services/print/icon/Merchandise and Design of Apparels.png", alt: "Merchandise and apparel print design visual" },
  { title: "Packaging Design", category: "Print Design", image: "/assets/services/print/icon/Packaging Design Services.png", alt: "Packaging print design visual" },
  { title: "High Impact Print Design", category: "Print Design", image: "/assets/services/print/High Impact Print Design That Makes Your Brand Stand Out.png", alt: "High impact print design visual" },
  { title: "Print Design Showcase", category: "Print Design", image: "/assets/services/print/print_banner.png", alt: "Print design showcase visual" },

  // Mobile Apps
  { title: "App Maintenance & Support", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/App maintence and support.png", alt: "Mobile app maintenance and support visual" },
  { title: "App Redesign & Modernization", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/App redesign and modernization.png", alt: "Mobile app redesign and modernization visual" },
  { title: "Enterprise Mobile App", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Enterprise mobile app development.png", alt: "Enterprise mobile app development visual" },
  { title: "Flutter App Development", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Flutter app development.png", alt: "Flutter app development visual" },
  { title: "iOS App Design & Development", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/IOS and mobile app design and development.png", alt: "iOS app design and development visual" },
  { title: "Mobile App UI/UX Design", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Mobile app UI UX design.png", alt: "Mobile app UI UX design visual" },
  { title: "Startup Mobile App", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Mobile app development startup.png", alt: "Startup mobile app development visual" },
  { title: "App Prototyping & Wireframing", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Mobile app prototyping and wireframing.png", alt: "Mobile app prototyping and wireframing visual" },
  { title: "Premier Mobile App Development", category: "Mobile Apps", image: "/assets/services/mobile app/icon3/Premier mobile app development .png", alt: "Premier mobile app development visual" }
];
