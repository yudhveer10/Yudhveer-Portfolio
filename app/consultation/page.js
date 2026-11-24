import { consultations, platformConfig } from '@/content/platform';
import { PageFrame, SectionHeading, EnquiryLink, money } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Consultations & Mentorship', 'Explore one-to-one tutoring, portfolio reviews and business technology consultations.', '/consultation');

export default function ConsultationPage() {
  return <PageFrame active="consultation" eyebrow="Consultations / 04" title="One focused conversation can move the work forward." intro="Choose a topic and send an enquiry. Sessions are subject to availability around my full-time work; I will confirm timing and scope before payment."><section className="platform-section"><SectionHeading eyebrow="Ways to meet" title="Find the right conversation" /><div className="platform-grid">{consultations.filter(item => item.published).map(item => <article className="platform-card" key={item.id}><span className="mono">{item.audience}</span><h3>{item.title}</h3><p>{item.description}</p><p className="platform-outcome"><strong>Takeaway</strong> {item.outcome}</p><div className="platform-card-bottom"><span>From {money(item.price)} / {item.unit}<small>{item.duration}</small></span>{item.bookingUrl || platformConfig.bookingUrl ? <a href={item.bookingUrl || platformConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Check availability ↗</a> : <EnquiryLink interest={item.title}>Enquire</EnquiryLink>}</div></article>)}</div></section></PageFrame>;
}
