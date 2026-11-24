import PricingContent from './PricingContent';
import { siteUrl } from '../site-config';

export const metadata = {
  title: 'Ways to Work Together | Pricing',
  description: 'Explore a practical starting scope for digital campaigns, lead automation and AI-powered business systems. See transparent starting prices and request a tailored quote.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Ways to Work Together | Yudhveer Singh Panwar',
    description: 'Find a starting scope that fits your goals, then review transparent pricing for digital growth and automation services.',
    url: `${siteUrl}/pricing`,
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
