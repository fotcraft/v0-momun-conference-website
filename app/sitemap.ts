import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://momun.gr"
  const routes = [
    "",
    "/about",
    "/first-momun",
    "/first-momun/student-officers",
    "/agenda",
    "/programme",
    "/register/guide",
    "/register/school",
    "/register/individual",
    "/apply/chair",
    "/country-list",
    "/info/travel",
    "/contact",
    "/privacy-policy",
  ]

  return routes.map((route) => ({ url: `${baseUrl}${route}` }))
}
