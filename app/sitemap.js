import { siteUrl } from './site-config';

export default function sitemap() {
  const now = new Date();
  return ['', '#work', '#capabilities', '#skills', '#journey', '#contact'].map(
    (hash) => ({
      url: `${siteUrl}/${hash}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: hash === '' ? 1 : 0.7,
    })
  );
}
