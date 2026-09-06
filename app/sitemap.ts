import type { MetadataRoute } from "next";
import { phases } from "@/data/phases";

const siteUrl = "https://burundioptimization.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/research",
    "/research/project-1",
    "/research/project-1/results",
    "/research/project-1/methodology",
    "/research/project-1/data-sources",
    "/research/project-1/validation",
    "/research/project-1/reproducibility",
    "/research/project-1/citation",
  ];

  const phaseRoutes = phases.map(
    (phase) => `/research/project-1/phases/${phase.id}`
  );

  return [...staticRoutes, ...phaseRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : route === "/research/project-1"
          ? 0.9
          : 0.7,
  }));
}
