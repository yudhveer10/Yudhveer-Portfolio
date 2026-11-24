import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sellableProducts } from '@/content/platform';
import { PageFrame, money } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() { return sellableProducts.map(item => ({ slug: item.slug })); }
export function generateMetadata({ params }) {
  const item = sellableProducts.find(product => product.slug === params.slug);
  return item ? pageMetadata(item.title, item.description, `/store/${item.slug}`) : {};
}
export default function ProductPage({ params }) {
  const item = sellableProducts.find(product => product.slug === params.slug);
  if (!item) notFound();
  return <PageFrame active="store" eyebrow={`Digital product / ${item.category}`} title={item.title} intro={item.description}><div className="platform-callout"><span className="mono">Before you buy</span><p>Review the preview and licence. Delivery is handled by the checkout provider.</p></div><section className="platform-section"><h2>Included</h2><ul className="platform-feature-grid">{item.includes.map(feature => <li key={feature}>{feature}</li>)}</ul><p><a href={item.previewUrl} target="_blank" rel="noopener noreferrer">View preview ↗</a></p><p><strong>Licence:</strong> {item.license}</p><p><strong>Price:</strong> {money(item.price)}</p><a className="button" href={item.checkoutUrl} target="_blank" rel="noopener noreferrer">Continue to checkout ↗</a></section><Link className="platform-back" href="/store">← Digital products</Link></PageFrame>;
}
