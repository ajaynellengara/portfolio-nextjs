import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: "https://portfolio-nextjs-chi-beryl.vercel.app/sitemap.xml",
  }
}