import Link from 'next/link';
import { sellableProducts, storeCategories } from '@/content/platform';
import { PageFrame, SectionHeading, EnquiryLink } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Digital Products', 'Original digital products and practical resources by Yudhveer Singh Panwar.', '/store');

export default function StorePage() {
  const products = sellableProducts;
  return <PageFrame active="store" eyebrow="Digital products / 03" title="Useful things, ready when they are ready." intro="This space is for original templates, tools and guides. A product will appear here only when its preview, licence, delivery and checkout are ready."><section className="platform-section"><SectionHeading eyebrow="Product catalogue" title={products.length ? 'Browse the collection' : 'The collection is being prepared'} description={products.length ? 'Review the product details and terms before purchase.' : 'There are no finished products for sale yet. Tell me what would be useful to you.'} /><p className="platform-note">Areas being explored</p><div className="platform-chips" aria-label="Planned categories">{storeCategories.map(category => <span key={category}>{category}</span>)}</div>{products.length > 0 && <div className="platform-grid">{products.map(item => <Link className="platform-card" href={`/store/${item.slug}`} key={item.id}><span className="mono">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><span className="platform-card-bottom">Review product <b>↗</b></span></Link>)}</div>}</section><div className="platform-bottom"><h2>Need a custom resource?</h2><EnquiryLink interest="Custom digital resource">Share an idea</EnquiryLink></div></PageFrame>;
}
