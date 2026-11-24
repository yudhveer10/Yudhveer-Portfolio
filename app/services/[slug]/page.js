import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../data';
import { PageFrame, SectionHeading, EnquiryLink, money } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';
import { siteUrl } from '@/app/site-config';

export function generateStaticParams() { return services.filter(service => service.published).map(service => ({ slug: service.id })); }
export function generateMetadata({ params }) {
  const service = services.find(item => item.id === params.slug && item.published);
  return service ? pageMetadata(service.title, service.description, `/services/${service.id}`) : {};
}

export default function ServiceDetail({ params }) {
  const service = services.find(item => item.id === params.slug && item.published);
  if (!service) notFound();
  return <PageFrame active="services" eyebrow={`Service / ${service.number}`} title={service.title} intro={service.description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, url: `${siteUrl}/services/${service.id}`, provider: { '@type': 'Person', name: 'Yudhveer Singh Panwar' } }) }} />
    <div className="platform-callout"><span className="mono">The outcome</span><p>{service.benefit}</p><span className="platform-status">{service.status}</span></div>
    <section className="platform-section"><SectionHeading eyebrow="Possible scope" title="What we can include" description="The exact deliverables depend on your requirements and current systems." /><ul className="platform-feature-grid">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></section>
    {service.startingPrices.length > 0 && <section className="platform-section"><SectionHeading eyebrow="Starting figures" title="A clearer first estimate" description="Final scope and third-party costs are confirmed in a proposal." /><div className="platform-price-list">{service.startingPrices.map(([name, price, unit]) => <div key={name}><span>{name}</span><strong>From {money(price)} <small>/ {unit}</small></strong></div>)}</div></section>}
    <div className="platform-bottom"><div><span className="mono">Have a different requirement?</span><h2>Let’s scope the useful first step.</h2></div><EnquiryLink interest={service.title}>Enquire about this service</EnquiryLink></div><Link className="platform-back" href="/services">← All services</Link>
  </PageFrame>;
}
