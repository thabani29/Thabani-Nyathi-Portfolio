import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Thabani Nyathi — Software Engineer & Full Stack Developer in Zimbabwe',
    short_name: 'Thabani Nyathi',
    description:
      'Portfolio of Thabani Nyathi — Software Engineer, Full Stack Developer, and Computer Science student at Harare Institute of Technology in Zimbabwe.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020818',
    theme_color: '#7c3aed',
    icons: [
      {
        src: '/thabani.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/thabani.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
