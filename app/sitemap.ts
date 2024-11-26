import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-nextjs-chi-beryl.vercel.app/",
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: "https://portfolio-nextjs-chi-beryl.vercel.app/changlog",
    //   lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: "https://portfolio-nextjs-chi-beryl.vercel.app/contact",
    //   lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}