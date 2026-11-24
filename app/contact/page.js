import EnquiryForm from '@/components/EnquiryForm';
import { PageFrame } from '@/components/PlatformPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact & Project Enquiry', 'Discuss a project, consultation or service with Yudhveer Singh Panwar.', '/contact');

export default function ContactPage() {
  return <PageFrame active="contact" eyebrow="Start here / 01" title="Tell me what you want to build." intro="Share the problem, your timeline and a rough budget if you have one. I will reply with a useful next step."><section className="platform-form-wrap"><EnquiryForm /></section></PageFrame>;
}
