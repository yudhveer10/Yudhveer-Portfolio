import { siteUrl } from '@/app/site-config';

export function pageMetadata(title, description, path, type = 'website') {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Yudhveer Singh Panwar`, description, url: `${siteUrl}${path}`, type },
  };
}
