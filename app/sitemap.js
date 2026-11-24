import { siteUrl } from './site-config';

export default function sitemap() {
  const now = new Date();
  return ['', 'services'].map(
    (path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    })
  );
}
