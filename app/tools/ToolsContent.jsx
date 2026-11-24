'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageFrame, SectionHeading, money } from '@/components/PlatformPage';
import { GrowthCalculator } from '../services/ServicesContent';

function Numeric({ label, value, onChange, suffix, min = 0, max }) {
  return <label className="tool-field"><span>{label}</span><div className="input-with-unit"><input type="number" min={min} max={max} step="any" value={value} onChange={event => onChange(event.target.value)} />{suffix && <span>{suffix}</span>}</div></label>;
}

function SolutionFinder() {
  const [goal, setGoal] = useState('');
  const [size, setSize] = useState('');
  const [budget, setBudget] = useState('');
  const suggestions = goal === 'leads' ? [['Digital marketing & advertising', '/services/meta-ads'], ['Lead generation & CRM automation', '/services/lead-crm']] : goal === 'manual' ? [['AI & business automation', '/services/ai-automation'], ['Business automation consultation', '/consultation']] : goal === 'website' ? [['Website & software development', '/services/web-development'], ['Business IT & technology support', '/services/business-it']] : goal === 'data' ? [['Data analytics & business intelligence', '/services/analytics'], ['Business automation consultation', '/consultation']] : [];
  return <section className="platform-section" id="finder"><SectionHeading eyebrow="01 / Discovery" title="Find a starting direction" description="Answer three quick questions. This is a guide, not a tailored recommendation." /><div className="tool-input-grid"><label className="tool-field">What needs attention?<select value={goal} onChange={event => setGoal(event.target.value)}><option value="">Choose a goal</option><option value="leads">More enquiries</option><option value="manual">Less repetitive work</option><option value="website">A better website or product</option><option value="data">Clearer business reporting</option></select></label><label className="tool-field">Team size<select value={size} onChange={event => setSize(event.target.value)}><option value="">Choose a size</option><option>Solo</option><option>2–10 people</option><option>11–50 people</option><option>50+ people</option></select></label><label className="tool-field">Indicative budget<select value={budget} onChange={event => setBudget(event.target.value)}><option value="">Choose a range</option><option>Below ₹5,000</option><option>₹5,000–25,000</option><option>₹25,000–50,000</option><option>₹50,000+</option></select></label></div>{goal && size && budget && <div className="tool-result"><span className="mono">Possible next steps</span><div className="platform-grid">{suggestions.map(([name, href]) => <Link className="platform-card" href={href} key={name}><h3>{name}</h3><span>Explore scope ↗</span></Link>)}</div><Link href={`/contact?interest=${encodeURIComponent(`Solution finder: ${goal}, ${size}, ${budget}`)}`}>Discuss these options ↗</Link></div>}</section>;
}

function AutomationCalculator() {
  const [hours, setHours] = useState('8');
  const [people, setPeople] = useState('2');
  const [rate, setRate] = useState('500');
  const [reduction, setReduction] = useState('50');
  const numbers = [hours, people, rate, reduction].map(Number);
  const valid = numbers.every(Number.isFinite) && numbers.every(n => n >= 0) && numbers[3] <= 100;
  const savedHours = valid ? numbers[0] * numbers[1] * numbers[3] / 100 : 0;
  return <section className="platform-section" id="automation"><SectionHeading eyebrow="02 / Operations" title="Automation savings estimator" description="Estimate time released each month. It does not account for build cost, maintenance or exceptions." /><div className="tool-input-grid"><Numeric label="Hours per person / month" value={hours} onChange={setHours} /><Numeric label="People doing the task" value={people} onChange={setPeople} /><Numeric label="Estimated hourly cost" value={rate} onChange={setRate} suffix="₹" /><Numeric label="Time reduction" value={reduction} onChange={setReduction} suffix="%" max={100} /></div><div className="tool-result" aria-live="polite">{valid ? <><strong>{savedHours.toFixed(1)} hours / month</strong><p>Indicative labour capacity: {money(savedHours * numbers[2])} per month. This is capacity value, not guaranteed cash savings.</p></> : <p>Enter non-negative values and a reduction between 0 and 100%.</p>}</div></section>;
}

function WebsiteEstimator() {
  const [type, setType] = useState('landing');
  const [pages, setPages] = useState('1');
  const [features, setFeatures] = useState([]);
  const prices = { landing: 3999, portfolio: 4999, business: 7999, ecommerce: 14999 };
  const extras = { forms: 1000, cms: 3000, booking: 3000, integrations: 4000 };
  const count = Number(pages);
  const valid = Number.isInteger(count) && count >= 1 && count <= 100;
  const estimate = valid ? prices[type] + Math.max(0, count - 1) * 1000 + features.reduce((sum, feature) => sum + extras[feature], 0) : 0;
  return <section className="platform-section" id="website"><SectionHeading eyebrow="03 / Build" title="Website cost estimator" description="A rough starting estimate for a defined scope. A proposal will confirm content, design, integrations and ongoing costs." /><div className="tool-input-grid"><label className="tool-field">Project type<select value={type} onChange={event => setType(event.target.value)}><option value="landing">Landing page</option><option value="portfolio">Portfolio</option><option value="business">Business website</option><option value="ecommerce">E-commerce website</option></select></label><Numeric label="Number of pages" value={pages} onChange={setPages} min={1} max={100} /></div><div className="tool-options">{Object.entries({ forms: 'Custom forms', cms: 'Content management', booking: 'Booking flow', integrations: 'External integrations' }).map(([key, label]) => <label key={key}><input type="checkbox" checked={features.includes(key)} onChange={() => setFeatures(features.includes(key) ? features.filter(item => item !== key) : [...features, key])} />{label}</label>)}</div><div className="tool-result" aria-live="polite">{valid ? <><strong>From {money(estimate)}</strong><p>Indicative project total, excluding hosting, licences, payment provider fees and maintenance.</p></> : <p>Enter between 1 and 100 pages.</p>}</div></section>;
}

export default function ToolsContent() {
  return <PageFrame active="tools" eyebrow="Planning tools / 07" title="Put a number to the next step." intro="Explore a possible direction and test your own assumptions. These tools are illustrative; real scope and outcomes depend on your business."><SolutionFinder /><AutomationCalculator /><WebsiteEstimator /><div className="platform-calculator"><GrowthCalculator /></div></PageFrame>;
}
