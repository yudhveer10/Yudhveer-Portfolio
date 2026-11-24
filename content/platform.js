// Public offerings are controlled here. A checkout or demo link is shown only when configured.
export const solutions = [
  { id: 'restaurant-menu', slug: 'restaurant-digital-menu', title: 'Restaurant digital menu', audience: 'Restaurants & cafés', description: 'A branded, mobile-friendly menu reached by a QR code, with a simple path to updates and enquiries.', features: ['QR code menu', 'Food categories and pricing', 'Restaurant branding', 'Menu updates', 'Optional WhatsApp enquiry'], setup: 2999, monthly: 499, status: 'Available on request', demoUrl: null, published: true },
  { id: 'gym-management', slug: 'gym-management-system', title: 'Gym management system', audience: 'Gyms & studios', description: 'A proposed membership workspace for staff to organise attendance, renewals and payments.', features: ['Membership records', 'Attendance tracking', 'Renewal reminders', 'Payment tracking', 'Member view', 'Business reporting'], setup: 4999, monthly: 999, status: 'Available on request', demoUrl: null, published: true },
  { id: 'coaching-management', slug: 'coaching-institute-system', title: 'Coaching institute system', audience: 'Education & coaching', description: 'A configurable administration workspace for enquiries, students, courses and fee records.', features: ['Student records', 'Admission enquiry tracking', 'Attendance', 'Fee tracking', 'Parent notifications', 'Course management'], setup: 7999, monthly: 1499, status: 'Available on request', demoUrl: null, published: true },
  { id: 'appointments', slug: 'appointment-booking-system', title: 'Appointment booking system', audience: 'Salons, consultants & services', description: 'A booking flow shaped around availability, confirmations and customer records.', features: ['Online bookings', 'Availability management', 'Customer records', 'Confirmations', 'Reminders', 'Admin view'], setup: 4999, monthly: 999, status: 'Available on request', demoUrl: null, published: true },
  { id: 'wedding-invitations', slug: 'digital-wedding-invitations', title: 'Digital wedding invitations', audience: 'Couples & event planners', description: 'A personalised event website with practical guest information and a shareable invitation link.', features: ['Couple introduction', 'Event schedule', 'Photo gallery', 'Venue map', 'RSVP form', 'Custom visual theme'], setup: 1499, monthly: null, status: 'Available on request', demoUrl: null, published: true },
  { id: 'business-cards', slug: 'digital-business-cards', title: 'Digital business cards', audience: 'Individuals & small teams', description: 'A shareable professional profile with links and contact actions.', features: ['Contact details', 'Social links', 'QR code', 'Downloadable contact card', 'WhatsApp link', 'Shareable URL'], setup: 499, monthly: null, status: 'Available on request', demoUrl: null, published: true },
  { id: 'inventory-billing', slug: 'inventory-billing-system', title: 'Inventory & billing system', audience: 'Retail & local businesses', description: 'A proposed system for stock, invoices and sales records, scoped to your current process.', features: ['Inventory records', 'Stock tracking', 'Sales records', 'Invoice generation', 'Low-stock alerts', 'Business reports'], setup: 9999, monthly: null, status: 'Available on request', demoUrl: null, published: true },
  { id: 'custom-crm', slug: 'custom-crm-system', title: 'Custom CRM system', audience: 'Sales & service teams', description: 'A tailored workspace for customer records, pipeline stages and follow-up reminders.', features: ['Lead management', 'Customer records', 'Sales pipeline', 'Follow-up reminders', 'Role-based access', 'Business analytics'], setup: 9999, monthly: null, status: 'Available on request', demoUrl: null, published: true },
];

export const storeCategories = [
  'Developer resources', 'AI & automation', 'Business resources', 'Career & productivity', 'Creative resources',
];

// Add only original, finished products with a real preview, licence, file and checkout URL.
export const digitalProducts = [];
export const sellableProducts = digitalProducts.filter(item => item.published && item.previewUrl && item.license && item.checkoutUrl && item.deliveryReady);

export const consultations = [
  { id: 'python-tutoring', title: 'Python tutoring', audience: 'Beginners and working developers', duration: '60 minutes', price: 399, unit: 'hour', description: 'Work through a Python concept or a practical coding problem together.', outcome: 'A clearer plan for practice and next steps.', published: true, bookingUrl: null },
  { id: 'ai-ml-tutoring', title: 'AI & machine learning tutoring', audience: 'Students and early-career builders', duration: '60 minutes', price: 599, unit: 'hour', description: 'Discuss core ML concepts, project structure or model evaluation.', outcome: 'A focused explanation and learning plan.', published: true, bookingUrl: null },
  { id: 'portfolio-review', title: 'Résumé & portfolio review', audience: 'Students and job seekers', duration: '45 minutes', price: 299, unit: 'session', description: 'Review clarity, presentation and evidence in your résumé or portfolio.', outcome: 'Actionable edits you can make yourself.', published: true, bookingUrl: null },
  { id: 'interview-prep', title: 'Technical interview preparation', audience: 'Developers preparing for interviews', duration: '60 minutes', price: 499, unit: 'session', description: 'Practice technical communication and problem-solving structure.', outcome: 'Feedback and a short practice plan.', published: true, bookingUrl: null },
  { id: 'architecture', title: 'Project architecture consultation', audience: 'Founders and developers', duration: '60 minutes', price: 799, unit: 'session', description: 'Discuss a software idea, trade-offs and an implementation path.', outcome: 'A practical outline of next decisions.', published: true, bookingUrl: null },
  { id: 'automation', title: 'Business automation consultation', audience: 'Business owners and operators', duration: '60 minutes', price: 999, unit: 'session', description: 'Map a repetitive process and identify sensible automation opportunities.', outcome: 'A proposed workflow and questions to validate.', published: true, bookingUrl: null },
  { id: 'website-consultation', title: 'Website & software consultation', audience: 'Businesses planning a build', duration: '60 minutes', price: 799, unit: 'session', description: 'Clarify requirements, features, integrations and a realistic scope.', outcome: 'A prioritised project brief.', published: true, bookingUrl: null },
  { id: 'coding-mentorship', title: 'Coding mentorship', audience: 'Developers seeking ongoing guidance', duration: 'Monthly, by agreement', price: 1999, unit: 'month', description: 'Ongoing guidance around learning goals, code reviews and portfolio work.', outcome: 'A monthly learning plan with agreed check-ins.', published: true, bookingUrl: null },
];

export const partnerPlans = [
  { id: 'essential', title: 'Essential', price: 4999, description: 'Keep a small business website and its technical basics in good shape.', features: ['Website maintenance', 'Basic technical support', 'Minor website updates', 'Google Business Profile assistance', 'Monthly technical review'], limits: 'Up to 2 support hours and 2 minor update requests per month. Business-hours support.' },
  { id: 'growth', title: 'Growth', price: 9999, description: 'Connect website upkeep with campaign and lead-management support.', features: ['Everything in Essential', 'Meta Ads management', 'Lead generation support', 'Basic CRM automation', 'Monthly performance report'], limits: 'Up to 4 support hours and 4 minor update requests per month. Campaign scope agreed in writing.' },
  { id: 'advanced', title: 'Advanced', price: 14999, description: 'A broader technology partnership for a more connected operation.', features: ['Everything in Growth', 'Advanced workflow automation', 'Business analytics dashboard', 'AI chatbot integration', 'WhatsApp automation', 'Priority technical support'], limits: 'Up to 6 support hours and 6 minor update requests per month. New builds and integrations are separately scoped.' },
];

export const resourceCategories = [
  'AI tools', 'Developer tools', 'Web hosting', 'Domain providers', 'Cloud platforms', 'Business software', 'CRM tools', 'Productivity tools', 'Learning platforms', 'Travel accessories', 'Content creation tools',
];

// These are direct publisher links, not affiliate recommendations or partnerships.
export const resources = [
  { id: 'python-docs', category: 'Developer tools', title: 'Python documentation', description: 'The language tutorial, library reference and setup guidance from the Python project.', url: 'https://docs.python.org/3/', publisher: 'Python Software Foundation', affiliate: false, published: true },
  { id: 'next-docs', category: 'Developer tools', title: 'Next.js documentation', description: 'Official guides and API reference for building with the Next.js framework.', url: 'https://nextjs.org/docs', publisher: 'Vercel', affiliate: false, published: true },
  { id: 'search-central', category: 'Business software', title: 'Google Search Central', description: 'Official guidance on how Google Search discovers and presents websites.', url: 'https://developers.google.com/search/docs', publisher: 'Google', affiliate: false, published: true },
  { id: 'meta-ad-library', category: 'Business software', title: 'Meta Ad Library', description: 'A public place to inspect ads currently running across Meta technologies.', url: 'https://business.facebook.com/ads/library', publisher: 'Meta', affiliate: false, published: true },
];

export const blogCategories = [
  'Artificial Intelligence', 'Business Automation', 'Digital Marketing', 'Web Development', 'Data Analytics', 'Business Technology', 'Career & Productivity', 'Software Reviews', 'Travel Technology',
];

export const platformConfig = {
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '',
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || '',
  affiliateDisclosure: 'Some future links may be affiliate links. If enabled, qualifying purchases may earn a commission at no extra cost to you.',
};
