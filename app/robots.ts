import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
        sitemap: "https://alfazh.vercel.app/sitemap.xml",
    };
}
