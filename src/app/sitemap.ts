import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mentoria-lb.netlify.app/', // LINK FINAL DO SITE
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}