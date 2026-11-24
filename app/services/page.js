import ServicesContent from './ServicesContent';
import { siteUrl } from '../site-config';
import { services } from './data';

export const metadata = {
  title: 'AI Automation, Digital Growth & Development Services',
  description: 'Explore AI automation, Meta ads, CRM, web development and analytics services from Yudhveer Singh Panwar. Find a useful solution and request a tailored quote.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'AI Automation & Digital Growth Services | Yudhveer Singh Panwar',
    description: 'Practical AI, software and digital growth services for businesses. Explore connected solutions and real use cases.',
    url: `${siteUrl}/services`,
    type: 'website',
  },
};

export default function ServicesPage() {
  const catalog = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Yudhveer Singh Panwar — Services',
    url: `${siteUrl}/services`,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@type': 'Service', name: service.title, description: service.description, url: `${siteUrl}/services/${service.id}` },
    })),
  };
  return <>
    <ServicesContent />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalog) }} />
  </>;
}
