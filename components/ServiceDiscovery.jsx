'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Megaphone,
  Palette,
  Wrench,
  Workflow,
} from 'lucide-react';
import { industries, services } from '@/app/services/data';

const icons = { BrainCircuit, Megaphone, Workflow, Code2, BarChart3, Wrench, Palette };
const publishedServices = services.filter(service => service.published);

const flow = [
  { label: 'Attract', title: 'Run a focused campaign', text: 'Reach people with a clear offer on Facebook or Instagram.' },
  { label: 'Capture', title: 'Collect enquiries', text: 'Send form responses to one place where nothing gets lost.' },
  { label: 'Organise', title: 'Keep the context', text: 'Record the source, request and next step for each lead.' },
  { label: 'Respond', title: 'Follow up on time', text: 'Use agreed reminders and messages when a reply is due.' },
  { label: 'Convert', title: 'Make the conversation count', text: 'Give your team the information it needs to close the right enquiries.' },
  { label: 'Learn', title: 'Review what worked', text: 'See which campaigns led to real conversations and customers.' },
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
    <div className="flow-caption"><span>Example workflow</span><span>Six steps, adapted to the way your business works</span></div>
    <ol className="flow-diagram">
      {flow.map((step, index) => <li key={step.title}>
          <span className="flow-step mono">0{index + 1} <span>{step.label}</span></span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>)}
    </ol>
    <p className="flow-summary"><strong>People stay in control.</strong> Automation can handle routine handoffs while your team manages the conversations, customer data and decisions.</p>
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
