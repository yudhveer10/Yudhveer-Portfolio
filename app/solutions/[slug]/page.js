import { notFound } from 'next/navigation';
import Link from 'next/link';
import { solutions } from '@/content/platform';
import { PageFrame, SectionHeading, EnquiryLink, money } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() { return solutions.filter(item => item.published).map(item => ({ slug: item.slug })); }
export function generateMetadata({ params }) {
  const item = solutions.find(solution => solution.slug === params.slug && solution.published);
  return item ? pageMetadata(item.title, item.description, `/solutions/${item.slug}`) : {};
}
export default function SolutionDetail({ params }) {
  const item = solutions.find(solution => solution.slug === params.slug && solution.published);
  if (!item) notFound();
  return <PageFrame active="solutions" eyebrow={`Solution concept / ${item.audience}`} title={item.title} intro={item.description}>
    <div className="platform-callout"><span className="mono">Available on request</span><p>This is a proposed configuration. Features, integrations and delivery are agreed before any build starts.</p></div>
    <section className="platform-section"><SectionHeading eyebrow="Configuration" title="Possible components" /><ul className="platform-feature-grid">{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
    <section className="platform-section"><SectionHeading eyebrow="Indicative investment" title="A starting point for discussion" /><div className="platform-price-list"><div><span>Initial setup</span><strong>From {money(item.setup)}</strong></div>{item.monthly && <div><span>Ongoing support</span><strong>From {money(item.monthly)} / month</strong></div>}</div><p className="platform-note">Hosting, integrations and third-party charges are scoped separately. These figures are indicative, not an instant quote.</p></section>
    <div className="platform-bottom"><h2>Would this fit your workflow?</h2><EnquiryLink interest={item.title}>Discuss a configuration</EnquiryLink></div><Link className="platform-back" href="/solutions">← All solutions</Link>
  </PageFrame>;
}
