export const services = [
  {
    id: 'ai-automation', icon: 'BrainCircuit', number: '01', title: 'AI & business automation',
    description: 'Practical AI systems that reduce repetitive work and make your existing information easier to use.',
    benefit: 'Give your team more time for decisions and customer conversations.',
    deliverables: ['Custom AI agents and assistants', 'Customer support chatbots', 'Workflow automation', 'Document processing and OCR', 'Automated reporting', 'AI integrations', 'RAG knowledge assistants'],
  },
  {
    id: 'meta-ads', icon: 'Megaphone', number: '02', title: 'Meta ads & digital marketing',
    description: 'Campaign planning and management for Facebook and Instagram, grounded in clear reporting.',
    benefit: 'Understand where enquiries come from and how your budget is performing.',
    deliverables: ['Facebook and Instagram advertising', 'Lead generation campaigns', 'Audience research and targeting', 'Campaign setup and management', 'Ad creative strategy', 'Performance monitoring and optimisation', 'Weekly and monthly reporting'],
  },
  {
    id: 'lead-crm', icon: 'Workflow', number: '03', title: 'Lead generation & CRM automation',
    description: 'Connect lead capture, qualification and follow-up so promising enquiries are easier to manage.',
    benefit: 'Keep the sales pipeline organised and respond with less manual effort.',
    deliverables: ['Automated lead collection', 'Meta lead form integration', 'Custom CRM dashboards', 'Lead tracking and qualification', 'WhatsApp Business API integration', 'Consent-based automated follow-ups', 'Sales pipeline management'],
  },
  {
    id: 'web-development', icon: 'Code2', number: '04', title: 'Website & software development',
    description: 'Fast, considered digital products built around the way your business actually works.',
    benefit: 'Turn a business need into a dependable tool or customer experience.',
    deliverables: ['Business websites', 'Landing pages', 'Full-stack web applications', 'Custom business dashboards', 'API development and integration', 'Website maintenance and optimisation', 'SaaS development'],
  },
  {
    id: 'analytics', icon: 'BarChart3', number: '05', title: 'Data analytics & business intelligence',
    description: 'Reporting systems that bring useful business signals into one readable view.',
    benefit: 'Spend less time assembling spreadsheets and more time acting on the numbers.',
    deliverables: ['Interactive business dashboards', 'Power BI and Tableau solutions', 'Automated Excel reporting', 'Data visualisation', 'Business performance analytics'],
  },
];

export const plans = [
  {
    id: 'starter', name: 'Starter', subtitle: 'Digital Growth', price: 4999,
    description: 'A clear starting point for businesses ready to run and measure Meta campaigns.',
    features: ['Facebook and Instagram ad management', 'Basic ad creatives', 'Audience targeting', 'Lead generation campaign setup', 'Weekly performance reporting'],
  },
  {
    id: 'growth', name: 'Growth', subtitle: 'Ads & Automation', price: 9999, featured: true,
    description: 'Campaigns connected to a simple lead management and follow-up system.',
    features: ['Everything in Starter', 'Automated lead collection', 'CRM integration', 'WhatsApp follow-up integration', 'Lead management dashboard', 'Campaign optimisation'],
  },
  {
    id: 'premium', name: 'Premium', subtitle: 'AI-Powered Business Growth', price: 14999,
    description: 'A broader setup for teams that need customer support, workflows and analytics.',
    features: ['Everything in Growth', 'AI customer support chatbot', 'Custom landing page', 'Advanced workflow automation', 'Business analytics dashboard', 'Custom integrations'],
  },
];

export const priceNotes = [
  'Advertising budgets are paid separately by clients.',
  'Third-party API, hosting and messaging costs are excluded.',
  'Custom development may require additional setup charges.',
  'Final pricing depends on project requirements.',
  'Advertising outcomes are not guaranteed.',
];

export const industries = [
  ['Education & coaching', 'Enquiry capture, admissions follow-up and student support.'],
  ['Real estate', 'Property enquiry routing and agent follow-up.'],
  ['Fitness & wellness', 'Trial enquiries, class bookings and customer reminders.'],
  ['Salons & wellness', 'Appointment enquiries and consent-based reminders.'],
  ['Travel', 'Trip enquiries, qualification and itinerary workflows.'],
  ['Restaurants & cafés', 'Local campaigns, reservation requests and reporting.'],
  ['Recruitment', 'Candidate intake and application tracking.'],
  ['Local businesses', 'Simple websites, lead capture and customer follow-up.'],
  ['Startups & SMEs', 'Custom software, analytics and operational automation.'],
];

export const processSteps = [
  ['01', 'Discovery consultation', 'We discuss your goals, current tools and the problem to solve.'],
  ['02', 'Requirements & strategy', 'I outline the scope, approach, measures and estimated costs.'],
  ['03', 'Setup', 'I build the campaign or solution and review the key details with you.'],
  ['04', 'Launch & improve', 'We launch, monitor performance and make measured adjustments.'],
  ['05', 'Reporting', 'You get clear updates and a plan for continued improvement.'],
];

export const faqs = [
  ['How much do your services cost?', 'Monthly plans start at ₹4,999. Custom websites, AI systems and specialist software are scoped separately. Final pricing depends on your requirements.'],
  ['Is the advertising budget included?', 'No. You pay the advertising platform directly. API, hosting and messaging charges are also separate.'],
  ['Do you guarantee leads or sales?', 'No. Campaign performance depends on factors including your offer, market, budget and sales process. I provide transparent measurement and ongoing optimisation.'],
  ['How long does campaign setup take?', 'Timing depends on access, creative assets, approvals and integration needs. I will confirm a realistic timeline after discovery.'],
  ['Can I hire you for a one-time project?', 'Yes. Websites, AI automations, dashboards and other custom builds can be scoped as one-time projects.'],
  ['Can you automate my existing business processes?', 'Yes. I can review your current tools and design a workflow that fits them, subject to available integrations and permissions.'],
  ['Who owns the advertising account?', 'You retain ownership of your advertising accounts, business assets and customer data.'],
  ['Do you provide ongoing maintenance?', 'Yes. We can agree on support and maintenance based on the solution and the level of help you need.'],
  ['Can you work with international clients?', 'Yes. We can discuss time zones, communication and billing during the consultation.'],
];
