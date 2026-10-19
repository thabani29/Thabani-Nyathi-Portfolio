import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thabani-nyathi.dev';

  return [
    {
      url: baseUrl,
      images: [`${baseUrl}/thabani.png`],
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
