import { siteUrl } from './site-config';
import { services } from './services/data';
import { solutions } from '@/content/platform';
import { articles } from '@/content/articles';

export default function sitemap() {
  const now = new Date();
  const paths = ['', 'services', 'pricing', 'solutions', 'store', 'consultation', 'resources', 'blog', 'tools', 'contact',
    ...services.filter(item => item.published).map(item => `services/${item.id}`),
    ...solutions.filter(item => item.published).map(item => `solutions/${item.slug}`),
    ...articles.map(item => `blog/${item.slug}`),
  ];
  return paths.map(
    (path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : ['services', 'pricing', 'solutions'].includes(path) ? 0.8 : 0.6,
    })
  );
}
