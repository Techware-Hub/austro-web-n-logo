import type { MetadataRoute } from "next";
import { site } from "./content";
import { servicePageContent } from "./servicePageContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/services", "/portfolio", "/packages", "/contact", "/privacy", "/terms", "/refund"];
  const serviceRoutes = servicePageContent.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.6
  }));
}
