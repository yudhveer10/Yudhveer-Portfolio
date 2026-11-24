import Link from 'next/link';
import { solutions } from '@/content/platform';
import { PageFrame, SectionHeading, money } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Business Solution Concepts', 'Explore configurable business software concepts, available to scope on request.', '/solutions');

export default function SolutionsPage() {
  return <PageFrame active="solutions" eyebrow="Business solutions / 02" title="A practical system for a specific job." intro="These are proposed configurations, built to your requirements after a discovery conversation. No prebuilt product or live demo is implied."><section className="platform-section"><SectionHeading eyebrow="Explore applications" title="Choose a useful starting point" /><div className="platform-grid">{solutions.filter(item => item.published).map((item, i) => <Link className="platform-card" href={`/solutions/${item.slug}`} key={item.id}><span className="mono">{String(i + 1).padStart(2, '0')} / {item.audience}</span><h3>{item.title}</h3><p>{item.description}</p><span className="platform-card-bottom">From {money(item.setup)} setup <b>↗</b></span></Link>)}</div></section></PageFrame>;
}
