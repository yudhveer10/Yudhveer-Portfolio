import BlogContent from './BlogContent';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Insights & Guides', 'Practical guides on automation, web development and business technology.', '/blog');

export default function BlogPage() {
  return <BlogContent />;
}
