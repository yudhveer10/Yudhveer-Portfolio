import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/content/articles';
import { PageFrame } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';
import { siteUrl } from '@/app/site-config';

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export function generateMetadata({ params }) {
  const article = articles.find(item => item.slug === params.slug);
  return article ? pageMetadata(article.title, article.summary, `/blog/${article.slug}`, 'article') : {};
}
export default function ArticlePage({ params }) {
  const article = articles.find(item => item.slug === params.slug);
  if (!article) notFound();
  const related = articles.filter(item => item.slug !== article.slug).slice(0, 2);
  return <PageFrame active="blog" eyebrow={`${article.category} / ${article.date}`} title={article.title} intro={article.summary}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.summary, datePublished: article.date, author: { '@type': 'Person', name: 'Yudhveer Singh Panwar' }, mainEntityOfPage: `${siteUrl}/blog/${article.slug}` }) }} /><article className="platform-article">{article.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</article><div className="platform-bottom"><div><span className="mono">Continue reading</span>{related.map(item => <p key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title} ↗</Link></p>)}</div><Link href="/blog">All guides ↗</Link></div></PageFrame>;
}
