export const services = [
  {
    id: 'ai-automation', icon: 'BrainCircuit', number: '01', title: 'AI & business automation',
    description: 'Practical AI systems that reduce repetitive work and make your existing information easier to use.',
    benefit: 'Give your team more time for decisions and customer conversations.',
    deliverables: ['Custom AI agents and assistants', 'AI customer support chatbots', 'RAG knowledge assistants', 'Workflow automation', 'Document processing and OCR', 'Automated reporting', 'AI API integrations', 'Business process automation', 'Intelligent data extraction'],
    startingPrices: [], status: 'Scoped to requirements', published: true,
  },
  {
    id: 'meta-ads', icon: 'Megaphone', number: '02', title: 'Digital marketing & advertising',
    description: 'Campaign planning and management for Facebook and Instagram, grounded in clear reporting.',
    benefit: 'Understand where enquiries come from and how your budget is performing.',
    deliverables: ['Meta Ads management', 'Facebook and Instagram advertising', 'Google Ads management', 'Lead generation campaigns', 'Social media management', 'Local SEO', 'Google Business Profile optimisation', 'Email marketing automation', 'WhatsApp marketing setup', 'Social media creative design', 'Reels and short-form editing', 'Campaign reporting'],
    startingPrices: [['Meta Ads management', 4999, 'month'], ['Google Ads management', 5999, 'month'], ['Social media management', 4999, 'month'], ['Local SEO', 3999, 'month'], ['Google Business Profile setup', 1999, 'project'], ['Creative package', 2499, 'month'], ['Reels editing', 499, 'video'], ['Email marketing setup', 2999, 'project'], ['WhatsApp marketing setup', 2999, 'project']], status: 'Scoped to requirements', published: true,
  },
  {
    id: 'lead-crm', icon: 'Workflow', number: '03', title: 'Lead generation & CRM automation',
    description: 'Connect lead capture, qualification and follow-up so promising enquiries are easier to manage.',
    benefit: 'Keep the sales pipeline organised and respond with less manual effort.',
    deliverables: ['Automated lead collection', 'Meta lead form integrations', 'Custom CRM dashboards', 'Lead qualification and tracking', 'WhatsApp Business API integrations', 'Consent-based follow-ups', 'Customer enquiry management', 'Sales pipeline management', 'Appointment scheduling', 'Email and notification automation'],
    startingPrices: [], status: 'Scoped to requirements', published: true,
  },
  {
    id: 'web-development', icon: 'Code2', number: '04', title: 'Website & software development',
    description: 'Fast, considered digital products built around the way your business actually works.',
    benefit: 'Turn a business need into a dependable tool or customer experience.',
    deliverables: ['Business websites', 'Landing pages', 'Personal portfolios', 'E-commerce websites', 'Full-stack applications', 'Mobile applications', 'SaaS applications', 'Custom dashboards', 'API development and integration', 'Payment gateway integration', 'Website redesign', 'Performance optimisation'],
    startingPrices: [['Landing page', 3999, 'project'], ['Personal portfolio', 4999, 'project'], ['Business website', 7999, 'project'], ['E-commerce website', 14999, 'project'], ['Custom web application', 19999, 'project'], ['Mobile application', 19999, 'project'], ['Payment gateway integration', 2999, 'project']], status: 'Scoped to requirements', published: true,
  },
  {
    id: 'analytics', icon: 'BarChart3', number: '05', title: 'Data analytics & business intelligence',
    description: 'Reporting systems that bring useful business signals into one readable view.',
    benefit: 'Spend less time assembling spreadsheets and more time acting on the numbers.',
    deliverables: ['Power BI dashboards', 'Tableau dashboards', 'Excel automation', 'Google Sheets automation', 'Data visualisation', 'Business reporting', 'Sales analytics', 'Customer analytics', 'Data cleaning and processing', 'Automated report generation'],
    startingPrices: [['Excel automation', 1999, 'project'], ['Google Sheets automation', 1999, 'project'], ['Business analytics dashboard', 4999, 'project'], ['Power BI dashboard', 4999, 'project']], status: 'Scoped to requirements', published: true,
  },
  {
    id: 'business-it', icon: 'Wrench', number: '06', title: 'Business IT & technology support',
    description: 'Help with the practical setup and upkeep behind a dependable digital presence.',
    benefit: 'Keep the essentials working and make technical decisions with more confidence.',
    deliverables: ['Business email configuration', 'Domain registration assistance', 'Hosting and deployment', 'Website maintenance', 'SSL and basic security configuration', 'Database setup', 'Software integrations', 'Cloud deployment', 'Technical troubleshooting', 'Technology consultation'],
    startingPrices: [['Domain and business email setup', 1499, 'project'], ['Hosting and deployment', 1999, 'project'], ['Website maintenance', 1499, 'month'], ['Technical support', 999, 'session']], status: 'Available on request', published: true,
  },
  {
    id: 'creative-content', icon: 'Palette', number: '07', title: 'Creative & digital content',
    description: 'Visual content and presentation work, scoped around a clear brief and agreed deliverables.',
    benefit: 'Present your business consistently across the channels that matter.',
    deliverables: ['Social media creatives', 'Canva designs', 'Business presentations', 'Pitch decks', 'Promotional posters', 'Short-form video editing', 'Digital brochures', 'Basic motion graphics', 'Animated maps and railway route visualisations', 'Business branding assistance'],
    startingPrices: [], status: 'Available on request', published: true,
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
  { title: 'Education & coaching', description: 'Make it easier to respond to course enquiries and support prospective students.', steps: ['Capture admissions enquiries', 'Route them to the right counsellor', 'Track follow-ups and common questions'] },
  { title: 'Real estate', description: 'Keep property enquiries organised across listings, campaigns and agents.', steps: ['Collect property interest', 'Qualify location and budget', 'Route enquiries to an agent'] },
  { title: 'Fitness & wellness', description: 'Give trial requests and class enquiries a more reliable path to your team.', steps: ['Capture trial interest', 'Share class or membership details', 'Measure enquiry patterns'] },
  { title: 'Salons & wellness', description: 'Support appointment enquiries and consent-based customer communication.', steps: ['Collect service requests', 'Organise appointment follow-up', 'Review demand by service'] },
  { title: 'Travel', description: 'Turn scattered trip requests into a clearer itinerary and follow-up process.', steps: ['Collect destination and dates', 'Qualify trip requirements', 'Track quotes and responses'] },
  { title: 'Restaurants & cafés', description: 'Connect local campaigns with reservation requests and simple reporting.', steps: ['Promote a local offer', 'Capture reservation interest', 'Understand channel performance'] },
  { title: 'Recruitment', description: 'Make candidate intake and application tracking easier to manage.', steps: ['Collect applications', 'Organise candidate status', 'Automate routine updates'] },
  { title: 'Local businesses', description: 'Build a dependable online presence and a clear way to handle new enquiries.', steps: ['Publish a useful website', 'Capture enquiries', 'Follow up with consent'] },
  { title: 'Startups & SMEs', description: 'Create focused software, analytics and operational workflows as needs evolve.', steps: ['Map the current process', 'Build a focused tool', 'Measure usage and improve'] },
];

export const processSteps = [
  ['01', 'Discovery consultation', 'We discuss your goals, current tools and the problem to solve.'],
  ['02', 'Requirements & strategy', 'I outline the scope, approach, measures and estimated costs.'],
  ['03', 'Setup', 'I build the campaign or solution and review the key details with you.'],
  ['04', 'Launch & improve', 'We launch, monitor performance and make measured adjustments.'],
  ['05', 'Reporting', 'You get clear updates and a plan for continued improvement.'],
];

export const faqs = [
  ['How much do your services cost?', 'The right scope depends on your goals and existing tools. See the Pricing page for transparent starting figures, or send a brief for a tailored quote.'],
  ['Is the advertising budget included?', 'No. You pay the advertising platform directly. API, hosting and messaging charges are also separate.'],
  ['Do you guarantee leads or sales?', 'No. Campaign performance depends on factors including your offer, market, budget and sales process. I provide transparent measurement and ongoing optimisation.'],
  ['How long does campaign setup take?', 'Timing depends on access, creative assets, approvals and integration needs. I will confirm a realistic timeline after discovery.'],
  ['Can I hire you for a one-time project?', 'Yes. Websites, AI automations, dashboards and other custom builds can be scoped as one-time projects.'],
  ['Can you automate my existing business processes?', 'Yes. I can review your current tools and design a workflow that fits them, subject to available integrations and permissions.'],
  ['Who owns the advertising account?', 'You retain ownership of your advertising accounts, business assets and customer data.'],
  ['Do you provide ongoing maintenance?', 'Yes. We can agree on support and maintenance based on the solution and the level of help you need.'],
  ['Can you work with international clients?', 'Yes. We can discuss time zones, communication and billing during the consultation.'],
];
