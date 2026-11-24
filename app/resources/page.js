import { resourceCategories, resources } from '@/content/platform';
import { PageFrame, SectionHeading, EnquiryLink } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Official Resources & References', 'Official documentation and public research tools for digital work.', '/resources');

export default function ResourcesPage() {
  const published = resources.filter(item => item.published && item.url);
  return <PageFrame active="resources" eyebrow="Resource library / 05" title="Useful references, from their source." intro="A small collection of official documentation and public research tools. These links are not paid placements or endorsements."><section className="platform-section"><SectionHeading eyebrow="Official sources" title={published.length ? 'Start with the primary source' : 'The library is being curated'} description={published.length ? 'Check each tool’s current terms and fit before adopting it.' : 'There are no endorsed tools or affiliate links here yet.'} /><div className="platform-grid">{published.map(item => <article className="platform-card" key={item.id}><span className="mono">{item.category} / {item.publisher}</span><h3>{item.title}</h3><p>{item.description}</p><a className="platform-card-bottom" href={item.url} target="_blank" rel={item.affiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}>Visit official site ↗</a>{item.affiliate && <small>Affiliate link: I may earn a commission.</small>}</article>)}</div></section><div className="platform-bottom"><div><span className="mono">More to come</span><h2>Other topics under review</h2><div className="platform-chips">{resourceCategories.map(category => <span key={category}>{category}</span>)}</div></div><EnquiryLink interest="Technology recommendation">Ask about a tool</EnquiryLink></div></PageFrame>;
}
