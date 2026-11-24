'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { GrowthCalculator } from '../services/ServicesContent';
import { plans, priceNotes } from '../services/data';
import { partnerPlans } from '@/content/platform';

const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const paths = [
  { id: 'campaigns', index: '01', title: 'I need more enquiries', copy: 'Get campaigns running with clear targeting and reporting.', planId: 'starter', outcome: 'A measured Meta ads foundation' },
  { id: 'followup', index: '02', title: 'I need a better follow-up system', copy: 'Connect campaigns, lead capture and a simple sales workflow.', planId: 'growth', outcome: 'A more organised lead journey' },
  { id: 'intelligence', index: '03', title: 'I want AI across the journey', copy: 'Add support, landing pages and deeper automation.', planId: 'premium', outcome: 'An integrated growth system' },
  { id: 'custom', index: '04', title: 'I need something custom', copy: 'Scope a website, AI tool, dashboard or specialist build.', planId: null, outcome: 'A proposal shaped around your requirements' },
];

function ScopeFinder() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = paths.find(path => path.id === selectedId);
  const matchedPlan = selected?.planId ? plans.find(plan => plan.id === selected.planId) : null;

  return <section className="section service-section pricing-discovery" id="find-your-start">
    <div className="section-header"><div><span className="mono">A useful starting point</span><h2>What would you like to improve?</h2></div><p>Pick the closest goal. This is a guide to the conversation, not a fixed recommendation.</p></div>
    <div className="path-grid">{paths.map(path => <button type="button" key={path.id} className={selectedId === path.id ? 'path-card is-selected' : 'path-card'} aria-pressed={selectedId === path.id} onClick={() => setSelectedId(path.id)}><span className="mono">{path.index} / Your goal</span><strong>{path.title}</strong><span>{path.copy}</span><ArrowUpRight aria-hidden="true" /></button>)}</div>
    {selected && <div className="path-result" aria-live="polite"><div><span className="mono">A possible starting scope</span><h3>{selected.outcome}</h3><p>{matchedPlan ? matchedPlan.description : 'We can define the deliverables, integrations, timeline and support level after a short discovery conversation.'}</p></div><div>{matchedPlan && <ul>{matchedPlan.features.slice(0, 3).map(feature => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>}<Link href="/services#enquiry">Talk through your project <ArrowUpRight /></Link></div></div>}
  </section>;
}

export default function PricingContent() {
  return <main id="main-content">
    <SiteHeader active="pricing" />
    <section className="pricing-hero shell"><div><span className="mono">Ways to work together</span><h1>Start with the outcome. <em>Then shape the scope.</em></h1><p>Good work starts with understanding your business. Choose what you want to improve, see a practical starting point, and review the investment when you are ready.</p><div className="hero-actions"><a className="button" href="#find-your-start">Find your starting point <ArrowDown /></a><a className="button button-ghost" href="#investment">See starting prices <ArrowRight /></a></div></div><div className="pricing-hero-rail" aria-hidden="true"><span>01 / Understand</span><i /><span>02 / Scope</span><i /><span>03 / Build & improve</span></div></section>

    <ScopeFinder />

    <section className="section service-section investment-section" id="investment"><div className="section-header"><div><span className="mono">Transparent starting figures</span><h2>Scope & investment</h2></div><p>These are monthly starting prices for defined service levels. Your final proposal will reflect your goals, tools and required setup.</p></div><div className="pricing-grid">{plans.map(plan => <article className={`plan-card ${plan.featured ? 'plan-featured' : ''}`} key={plan.id}><div className="plan-top"><div><span className="mono">{plan.name}</span>{plan.featured && <span className="plan-tag">Connected approach</span>}</div><h3>{plan.subtitle}</h3><p>{plan.description}</p><div className="plan-price"><small>Starting at</small><strong>{money(plan.price)}</strong><span>/ month</span></div></div><ul>{plan.features.map(feature => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><Link className={plan.featured ? 'button' : 'button button-ghost'} href="/services#enquiry">Discuss this scope <ArrowUpRight /></Link></article>)}</div><div className="custom-plan"><div><span className="mono">A different scope?</span><h3>Custom solutions</h3><p>Websites, AI development, specialised software and one-time projects are quoted around your requirements.</p></div><Link className="button button-ghost" href="/services#enquiry">Request a custom quote <ArrowUpRight /></Link></div><ul className="pricing-notes">{priceNotes.map(note => <li key={note}>{note}</li>)}</ul></section>

    <GrowthCalculator />

    <section className="section service-section" id="ongoing-support"><div className="section-header"><div><span className="mono">Ongoing support</span><h2>A technology partner, month to month</h2></div><p>For businesses that need upkeep and a set amount of practical support. The included hours and requests are explicit so the scope stays clear.</p></div><div className="pricing-grid">{partnerPlans.map(plan => <article className="plan-card" key={plan.id}><div className="plan-top"><span className="mono">{plan.title}</span><h3>{plan.title} support</h3><p>{plan.description}</p><div className="plan-price"><small>Starting at</small><strong>{money(plan.price)}</strong><span>/ month</span></div></div><ul>{plan.features.map(feature => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><p className="service-fineprint">{plan.limits}</p><Link className="button button-ghost" href={`/contact?interest=${encodeURIComponent(`${plan.title} technology partnership`)}`}>Discuss support <ArrowUpRight /></Link></article>)}</div><p className="service-fineprint">Software subscriptions, advertising spend and new projects are separate. Final scope is agreed in writing.</p></section>

    <section className="section service-section pricing-close"><div><span className="mono">Your next step</span><h2>A short conversation is enough to begin.</h2><p>Tell me where you are now and what you want to improve. I’ll suggest a sensible scope and make the costs clear before any work starts.</p></div><Link className="button" href="/services#enquiry">Share your project <ArrowUpRight /></Link></section>
    <footer><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><Link href="/services">Explore services <ArrowUpRight /></Link></footer>
  </main>;
}
