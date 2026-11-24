'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { processSteps, faqs } from './data';
import { CustomerFlowDiagram, IndustryExplorer, ServiceExplorer } from '@/components/ServiceDiscovery';
import EnquiryForm from '@/components/EnquiryForm';


const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
const finiteNonnegative = value => Number.isFinite(Number(value)) && Number(value) >= 0;

export function GrowthCalculator() {
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

export default function ServicesContent() {
  return <main id="main-content">
    <SiteHeader active="services" />
    <section className="services-hero shell"><div><span className="mono">Independent services · New Delhi & remote</span><h1>Engineering for the work behind <em>growth.</em></h1><p>I help businesses connect AI, software and digital campaigns into useful systems, from the first enquiry to the decisions that follow.</p><div className="hero-actions"><a className="button" href="#services-list">Explore services <ArrowDown /></a><a className="button button-ghost" href="#workflow">See the approach <ArrowUpRight /></a></div></div><div className="services-hero-aside"><span className="mono">How I work</span><p>One person to understand the problem, build the solution and make the results understandable.</p><Link href="/#work">See selected work <ArrowUpRight /></Link></div></section>

    <section className="section service-section" id="services-list"><div className="section-header"><div><span className="mono">What I can build and manage</span><h2>Find the right kind of help</h2></div><p>Choose a service to see what it can solve and what a project might include.</p></div><ServiceExplorer /></section>

    <section className="section service-section workflow-section" id="workflow"><div className="section-header"><div><span className="mono">A connected journey</span><h2>From clicks to customers — powered by AI</h2></div><p>Advertising starts the conversation. Automation can help capture, organise and follow up with potential customers.</p></div><CustomerFlowDiagram /></section>

    <section className="section service-section" id="industries"><div className="section-header"><div><span className="mono">Potential applications</span><h2>Explore a use case</h2></div><p>Choose an industry to see a possible workflow. These are examples, not past client projects.</p></div><IndustryExplorer /></section>

    <DemoDashboard />

    <section className="section service-section scope-bridge"><div><span className="mono">Ready to make it concrete?</span><h2>Start with the problem. Shape the scope together.</h2><p>Every business has a different starting point. Explore ways to work together, then choose the level of support that fits.</p></div><Link className="button" href="/pricing">Explore ways to work together <ArrowUpRight /></Link></section>

    <section className="section service-section" id="process"><div className="section-header"><div><span className="mono">A clear path from idea to launch</span><h2>How we work together</h2></div><p>Each project begins with the business need, then moves into a practical scope and measurable work.</p></div><div className="process-list">{processSteps.map(([number, title, copy]) => <div key={number}><span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section className="section service-section" id="faq"><div className="section-header"><div><span className="mono">Good to know</span><h2>Frequently asked questions</h2></div><p>Practical answers about scope, ownership, timelines and outcomes.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

    <section className="section service-section enquiry-section" id="enquiry"><div className="section-header"><div><span className="mono">Start a conversation</span><h2>Tell me what you need.</h2></div><p>Share a few details and I’ll get back to you about a useful next step. No commitment required.</p></div><EnquiryForm /></section>
    <footer><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><Link href="/">Back to portfolio <ArrowUpRight /></Link></footer>
  </main>;
}
