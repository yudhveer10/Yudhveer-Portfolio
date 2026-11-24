import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from './SiteHeader';

export const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export function PageFrame({ active, eyebrow, title, intro, children }) {
  return <main id="main-content"><SiteHeader active={active} /><div className="platform-shell"><header className="platform-intro"><span className="mono">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header>{children}</div><footer className="platform-footer"><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><Link href="/contact">Start a conversation <ArrowUpRight /></Link></footer></main>;
}

export function SectionHeading({ eyebrow, title, description }) {
  return <div className="platform-heading"><span className="mono">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function EnquiryLink({ interest, children = 'Discuss this' }) {
  return <Link className="button" href={`/contact?interest=${encodeURIComponent(interest)}`}>{children} <ArrowUpRight /></Link>;
}
