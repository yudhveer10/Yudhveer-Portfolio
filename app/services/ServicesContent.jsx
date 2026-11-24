'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Check, ChevronDown, Code2, Megaphone, Workflow } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { services, plans, priceNotes, industries, processSteps, faqs } from './data';

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xgvnlrrn';
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

const icons = { BrainCircuit, Megaphone, Workflow, Code2, BarChart3 };
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
const finiteNonnegative = value => Number.isFinite(Number(value)) && Number(value) >= 0;

function GrowthCalculator() {
  const [values, setValues] = useState({ budget: '20000', cpl: '250', conversion: '10', profit: '3000', fee: '9999' });
  const fields = [
    ['budget', 'Monthly advertising budget', '₹', '1000'],
    ['cpl', 'Estimated cost per lead', '₹', '1'],
    ['conversion', 'Lead-to-customer conversion', '%', '0.1'],
    ['profit', 'Contribution profit per customer', '₹', '1'],
    ['fee', 'Monthly management fee', '₹', '0'],
  ];
  const valid = fields.every(([key]) => finiteNonnegative(values[key])) && Number(values.cpl) > 0 && Number(values.conversion) <= 100;
  const leads = valid ? Number(values.budget) / Number(values.cpl) : 0;
  const customers = leads * Number(values.conversion) / 100;
  const spend = Number(values.budget) + Number(values.fee);
  const contribution = customers * Number(values.profit);
  const net = contribution - spend;
  const roi = spend > 0 ? (net / spend) * 100 : 0;

  return <section className="section service-section" id="calculator">
    <div className="section-header"><div><span className="mono">Plan with clearer numbers</span><h2>Business growth calculator</h2></div><p>Test your own assumptions about leads, customers and marketing costs.</p></div>
    <div className="calculator-grid">
      <div className="calculator-inputs">{fields.map(([key, label, unit, min]) => <label key={key}><span>{label}</span><div className="input-with-unit"><span>{unit}</span><input type="number" inputMode="decimal" min={min} max={key === 'conversion' ? '100' : undefined} step="any" value={values[key]} onChange={event => setValues({ ...values, [key]: event.target.value })} aria-invalid={!finiteNonnegative(values[key]) || (key === 'cpl' && Number(values[key]) <= 0) || (key === 'conversion' && Number(values[key]) > 100)} /></div></label>)}</div>
      <div className="calculator-results" aria-live="polite">
        {valid ? <>
          <div><span>Estimated leads</span><strong>{Math.floor(leads).toLocaleString('en-IN')}</strong></div>
          <div><span>Estimated new customers</span><strong>{customers.toFixed(1)}</strong></div>
          <div><span>Total marketing expenditure</span><strong>{money(spend)}</strong></div>
          <div><span>Customer contribution profit</span><strong>{money(contribution)}</strong></div>
          <div className="result-emphasis"><span>Estimated net incremental profit</span><strong>{money(net)}</strong></div>
          <div><span>Return on marketing investment</span><strong>{roi.toFixed(1)}%</strong></div>
        </> : <p className="form-error">Enter non-negative numbers, a cost per lead above zero and a conversion rate from 0 to 100%.</p>}
      </div>
    </div>
    <p className="service-fineprint">Illustrative estimates only. Actual leads, customers and returns vary and are not guaranteed. Contribution profit is before marketing costs.</p>
  </section>;
}

const demoLeads = [
  ['Aarav Mehta', 'Website enquiry', 'Contacted'], ['Nisha Rao', 'Meta lead form', 'Qualified'], ['Rohan Das', 'Meta lead form', 'New'], ['Priya Kapoor', 'Landing page', 'Qualified'], ['Kabir Sethi', 'Meta lead form', 'Contacted'],
];
const weekly = [12, 18, 15, 24];

function DemoDashboard() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? demoLeads : demoLeads.filter(lead => lead[2] === filter);
  return <section className="section service-section" id="demo">
    <div className="section-header"><div><span className="mono">Interactive Demo — Sample Data</span><h2>See the lead flow</h2></div><p>A fictional example of the dashboard I can build for campaign and sales visibility.</p></div>
    <div className="demo-board">
      <div className="demo-metrics">{[['Ad spend', '₹17,940'], ['Leads', '69'], ['Cost per lead', '₹260'], ['Contacted', '43'], ['Qualified', '24'], ['Conversion rate', '8.7%'], ['Acquisition cost', '₹2,990']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="demo-visuals">
        <div><h3>Weekly lead generation</h3><div className="demo-bars" role="img" aria-label="Sample leads by week: 12, 18, 15 and 24">{weekly.map((count, i) => <div key={i}><span style={{ height: `${count / 24 * 100}%` }} title={`${count} leads`} /><small>W{i + 1}</small></div>)}</div></div>
        <div><h3>Lead conversion funnel</h3><div className="demo-funnel">{[['Leads captured', 69], ['Contacted', 43], ['Qualified', 24], ['Customers', 6]].map(([label, count]) => <div key={label}><span>{label}</span><strong>{count}</strong><i style={{ width: `${count / 69 * 100}%` }} /></div>)}</div></div>
      </div>
      <div className="demo-table-wrap"><div className="demo-table-heading"><h3>Sample lead queue</h3><div className="demo-filters" aria-label="Filter leads">{['All', 'New', 'Contacted', 'Qualified'].map(value => <button key={value} type="button" className={filter === value ? 'selected' : ''} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>)}</div></div><div className="demo-table" role="table" aria-label="Fictional sample leads"><div role="row" className="demo-table-header"><span role="columnheader">Name</span><span role="columnheader">Source</span><span role="columnheader">Status</span></div>{visible.map(([name, source, status]) => <div role="row" key={name}><span role="cell">{name}</span><span role="cell">{source}</span><span role="cell">{status}</span></div>)}</div></div>
    </div>
  </section>;
}

function EnquiryForm() {
  const [status, setStatus] = useState('idle');
  const [selectedService, setSelectedService] = useState('');
  const serviceOptions = ['Meta Ads Management', 'AI Automation', 'Website Development', 'Lead Generation', 'CRM & WhatsApp Automation', 'Data Analytics', 'Custom Project'];
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error('Submission was not confirmed.');
      form.reset();
      setSelectedService('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
  return <form className="service-form" onSubmit={submit} onChange={() => { if (status === 'error') setStatus('idle'); }}>
    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
    <div className="form-pair"><label>Full name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Business name<input name="business" autoComplete="organization" required maxLength={120} /></label></div>
    <div className="form-pair"><label>Email address<input type="email" name="email" autoComplete="email" required maxLength={160} /></label><label>Phone or WhatsApp<input type="tel" name="phone" autoComplete="tel" required minLength={7} maxLength={24} /></label></div>
    <div className="form-pair"><label>Industry<input name="industry" required maxLength={100} placeholder="e.g. Education" /></label><label>Required service<select name="service" value={selectedService} onChange={event => setSelectedService(event.target.value)} required><option value="">Select a service</option>{serviceOptions.map(option => <option key={option}>{option}</option>)}</select></label></div>
    <div className="form-pair"><label>Estimated budget<select name="budget" required defaultValue=""><option value="">Select a range</option>{['Below ₹5,000', '₹5,000–10,000', '₹10,000–25,000', '₹25,000–50,000', '₹50,000+', 'Need a consultation'].map(option => <option key={option}>{option}</option>)}</select></label><label>Preferred contact<select name="preferred_contact" required defaultValue=""><option value="">Select a method</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label></div>
    <label>Project requirements<textarea name="requirements" required minLength={10} maxLength={4000} rows={5} placeholder="Tell me about your business, what you need and your timeline." /></label>
    <label className="consent-line"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted about this enquiry using the details above.</span></label>
    <div className="form-actions"><button className="button" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowUpRight /></button><span>Or email <a href="mailto:yudhveerp10@gmail.com">yudhveerp10@gmail.com</a></span>{bookingUrl && <a href={bookingUrl} target="_blank" rel="noreferrer">Book a consultation</a>}{whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>}</div>
    {status === 'success' && <p className="form-success" role="status">Your enquiry was received. I’ll reply using your preferred contact method.</p>}
    {status === 'error' && <p className="form-error" role="alert">The enquiry could not be confirmed. Please try again or email me directly.</p>}
  </form>;
}

export default function ServicesContent() {
  useEffect(() => {
    const openLinkedService = () => {
      const item = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (item?.matches('details.service-item')) {
        item.open = true;
        requestAnimationFrame(() => item.scrollIntoView({ block: 'start' }));
      }
    };
    openLinkedService();
    window.addEventListener('hashchange', openLinkedService);
    return () => window.removeEventListener('hashchange', openLinkedService);
  }, []);
  return <main id="main-content">
    <SiteHeader active="services" />
    <section className="services-hero shell"><div><span className="mono">Independent services · New Delhi & remote</span><h1>Engineering for the work behind <em>growth.</em></h1><p>I help businesses connect AI, software and digital campaigns into useful systems, from the first enquiry to the decisions that follow.</p><div className="hero-actions"><a className="button" href="#services-list">Explore services <ArrowDown /></a><a className="button button-ghost" href="#pricing">View plans <ArrowRight /></a></div></div><div className="services-hero-aside"><span className="mono">How I work</span><p>One person to understand the problem, build the solution and make the results understandable.</p><Link href="/#work">See selected work <ArrowUpRight /></Link></div></section>

    <section className="section service-section" id="services-list"><div className="section-header"><div><span className="mono">What I can build and manage</span><h2>Services, in detail</h2></div><p>Open a service to see the deliverables and the business problem it can help address.</p></div><div className="service-list">{services.map(item => { const Icon = icons[item.icon]; return <details className="service-item" key={item.id} id={item.id}><summary><span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-summary"><small className="mono">{item.number} / Service</small><strong>{item.title}</strong><span>{item.description}</span></span><ChevronDown className="service-chevron" aria-hidden="true" /></summary><div className="service-detail"><div><span className="mono">What this can include</span><ul>{item.deliverables.map(deliverable => <li key={deliverable}><Check aria-hidden="true" />{deliverable}</li>)}</ul></div><aside><span className="mono">Business benefit</span><p>{item.benefit}</p><a href="#enquiry">Get a quote <ArrowUpRight /></a></aside></div></details>; })}</div></section>

    <section className="section service-section workflow-section" id="workflow"><div className="section-header"><div><span className="mono">A connected journey</span><h2>From clicks to customers — powered by AI</h2></div><p>Advertising starts the conversation. Automation can help capture, organise and follow up with potential customers.</p></div><ol className="workflow-steps">{['Facebook & Instagram ads', 'Lead capture', 'CRM integration', 'Automated follow-up', 'Customer conversion', 'Business analytics'].map((step, i) => <li key={step}><span className="mono">0{i + 1}</span><strong>{step}</strong><ArrowRight aria-hidden="true" /></li>)}</ol></section>

    <section className="section service-section" id="industries"><div className="section-header"><div><span className="mono">Potential applications</span><h2>Industries I can support</h2></div><p>Examples of where these systems may be useful, not a list of past clients.</p></div><div className="industry-grid">{industries.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="section service-section" id="pricing"><div className="section-header"><div><span className="mono">Straightforward starting points</span><h2>Plans & pricing</h2></div><p>Choose a starting package. I’ll confirm the scope and final quote after we discuss your requirements.</p></div><div className="pricing-grid">{plans.map(plan => <article className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} key={plan.id}><div className="plan-top"><div><span className="mono">{plan.name}</span>{plan.featured && <span className="plan-tag">Popular starting point</span>}</div><h3>{plan.subtitle}</h3><p>{plan.description}</p><div className="plan-price"><small>Starting at</small><strong>{money(plan.price)}</strong><span>/ month</span></div></div><ul>{plan.features.map(feature => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><a className={plan.featured ? 'button' : 'button button-ghost'} href="#enquiry">Discuss this plan <ArrowUpRight /></a></article>)}</div><div className="custom-plan"><div><span className="mono">A different scope?</span><h3>Custom solutions</h3><p>Websites, AI development, specialised software and one-time projects are quoted around your requirements.</p></div><a className="button button-ghost" href="#enquiry">Request a custom quote <ArrowUpRight /></a></div><ul className="pricing-notes">{priceNotes.map(note => <li key={note}>{note}</li>)}</ul></section>

    <GrowthCalculator />
    <DemoDashboard />

    <section className="section service-section" id="process"><div className="section-header"><div><span className="mono">A clear path from idea to launch</span><h2>How we work together</h2></div><p>Each project begins with the business need, then moves into a practical scope and measurable work.</p></div><div className="process-list">{processSteps.map(([number, title, copy]) => <div key={number}><span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section className="section service-section" id="faq"><div className="section-header"><div><span className="mono">Good to know</span><h2>Frequently asked questions</h2></div><p>Practical answers about scope, ownership, timelines and outcomes.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

    <section className="section service-section enquiry-section" id="enquiry"><div className="section-header"><div><span className="mono">Start a conversation</span><h2>Tell me what you need.</h2></div><p>Share a few details and I’ll get back to you about a useful next step. No commitment required.</p></div><EnquiryForm /></section>
    <footer><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><Link href="/">Back to portfolio <ArrowUpRight /></Link></footer>
  </main>;
}
