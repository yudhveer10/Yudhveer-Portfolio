'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Mail,
  Megaphone,
  Palette,
  Wrench,
  Workflow,
} from 'lucide-react';
import { industries, services } from '@/app/services/data';

const icons = { BrainCircuit, Megaphone, Workflow, Code2, BarChart3, Wrench, Palette };
const publishedServices = services.filter(service => service.published);

const flow = [
  { label: 'Attract', title: 'Facebook & Instagram ads', text: 'Reach the right audience with a clear offer.', icon: Megaphone },
  { label: 'Capture', title: 'Lead capture', text: 'Bring enquiries into one reliable place.', icon: ArrowDownToLine },
  { label: 'Organise', title: 'CRM integration', text: 'Give each lead context and a next step.', icon: Workflow },
  { label: 'Respond', title: 'Automated follow-up', text: 'Follow up with consent and at the right time.', icon: Mail },
  { label: 'Convert', title: 'Customer conversion', text: 'Help your team act on qualified interest.', icon: Check },
  { label: 'Learn', title: 'Business analytics', text: 'See what worked and improve the journey.', icon: BarChart3 },
];

export function ServiceExplorer() {
  const [selectedId, setSelectedId] = useState(publishedServices[0].id);
  const selected = publishedServices.find(service => service.id === selectedId) || publishedServices[0];
  const SelectedIcon = icons[selected.icon];

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice(1);
      if (publishedServices.some(service => service.id === id)) setSelectedId(id);
    };
    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, []);

  function select(id) {
    setSelectedId(id);
    window.history.replaceState(null, '', `#${id}`);
  }

  return <div className="service-explorer">
    <div className="service-explorer-menu" aria-label="Explore services">
      {publishedServices.map(service => {
        const Icon = icons[service.icon];
        return <button
          key={service.id}
          id={service.id}
          className={selectedId === service.id ? 'is-selected' : ''}
          type="button"
          aria-pressed={selectedId === service.id}
          onClick={() => select(service.id)}
        >
          <span className="service-menu-number mono">{service.number}</span>
          <Icon aria-hidden="true" />
          <span>{service.title}</span>
          <ArrowRight className="service-menu-arrow" aria-hidden="true" />
        </button>;
      })}
    </div>
    <article className="service-explorer-panel" aria-live="polite">
      <div className="service-panel-top"><span className="mono">Selected service / {selected.number}</span><SelectedIcon aria-hidden="true" /></div>
      <h3>{selected.title}</h3>
      <p className="service-panel-description">{selected.description}</p>
      <div className="service-panel-benefit"><span className="mono">What it changes</span><p>{selected.benefit}</p></div>
      <div className="service-panel-deliverables"><span className="mono">Possible scope</span><ul>{selected.deliverables.map(deliverable => <li key={deliverable}><Check aria-hidden="true" />{deliverable}</li>)}</ul></div>
      <div className="service-panel-actions"><a className="service-panel-cta" href={`/services/${selected.id}`}>View details <ArrowUpRight aria-hidden="true" /></a><a className="service-panel-cta" href={`/contact?service=${encodeURIComponent(selected.title)}`}>Discuss this service <ArrowUpRight aria-hidden="true" /></a></div>
    </article>
  </div>;
}

export function CustomerFlowDiagram() {
  return <div className="flow-wrap">
    <div className="flow-caption"><span>One connected system</span><span>From first interaction to a clearer decision</span></div>
    <ol className="flow-diagram">
      {flow.map((step, index) => {
        const Icon = step.icon;
        return <li key={step.title}>
          <div className="flow-node"><Icon aria-hidden="true" /></div>
          <span className="flow-step mono">0{index + 1} / {step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>;
      })}
    </ol>
    <div className="flow-summary"><span className="flow-summary-mark">AI</span><p>Automation connects the handoffs. Your team stays in control of the conversations, customer data and decisions.</p></div>
  </div>;
}

export function IndustryExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = industries[selectedIndex];
  return <div className="industry-explorer">
    <div className="industry-picker" aria-label="Choose an industry">
      {industries.map((industry, index) => <button
        type="button"
        key={industry.title}
        className={index === selectedIndex ? 'is-selected' : ''}
        aria-pressed={index === selectedIndex}
        onClick={() => setSelectedIndex(index)}
      ><span>{industry.title}</span><ArrowUpRight aria-hidden="true" /></button>)}
    </div>
    <article className="industry-story" aria-live="polite">
      <span className="mono">Example application / {String(selectedIndex + 1).padStart(2, '0')}</span>
      <h3>{selected.title}</h3>
      <p>{selected.description}</p>
      <div className="industry-story-line" />
      <span className="mono">A possible starting point</span>
      <ol>{selected.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
      <a href="#enquiry">Explore a use case for your business <ArrowUpRight aria-hidden="true" /></a>
    </article>
  </div>;
}
