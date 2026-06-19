'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, Box, BrainCircuit, Github, Linkedin, Mail, MapPin, Rocket, Terminal } from 'lucide-react';

const projects = [
  { number: '01', title: 'Flo.AI', type: 'Agentic workflow engine', description: 'Multi-step AI automation built for reliable decisions, lower latency, and real product work.', stack: ['Next.js', 'Python', 'Gemini 2.5', 'PostgreSQL'], result: '98% workflow success', href: 'https://github.com/yudhveer10' },
  { number: '02', title: 'The Crop Doctor', type: 'Computer vision · AgriTech', description: 'A fast crop-disease diagnosis experience trained on 5,000+ annotated images.', stack: ['React', 'TensorFlow', 'CNN', 'FastAPI'], result: '95% validation accuracy', href: 'https://github.com/yudhveer10/tomato-plant-disease-detection' },
  { number: '03', title: 'GlucoPredict', type: 'Predictive health platform', description: 'Diabetes-risk prediction made more robust with synthetic-data-assisted modelling.', stack: ['Flask', 'Python', 'GAN', 'scikit-learn'], result: 'Explainable predictions', href: 'https://github.com/yudhveer10/Glucopredict' },
  { number: '04', title: 'Biometric Authentication', type: 'Identity · Security', description: 'Face recognition, liveness detection, and identity verification in one secure flow.', stack: ['WebRTC', 'OpenCV', 'Python', 'FastAPI'], result: 'Privacy-first verification', href: 'https://github.com/aarinbadola/Authentication-proj' },
];

const capabilities = [
  { icon: Box, title: 'Product Engineering', text: 'I turn ambitious ideas into responsive, dependable products with clear architecture.', items: ['Full-stack web & mobile', 'System design & APIs', 'Performance & reliability'] },
  { icon: BrainCircuit, title: 'Applied AI', text: 'I make models useful—shaping data, evaluation, and interfaces around real people.', items: ['LLMs & agentic systems', 'Vision & deep learning', 'RAG & vector search'] },
  { icon: Rocket, title: 'Ship & Scale', text: 'I carry the work from prototype to production with a bias for momentum and quality.', items: ['Cloud & containers', 'CI/CD & observability', 'Security-minded delivery'] },
];

const journey = [
  ['2026 — Now', 'Full Stack AI Developer', 'Building product experiences and intelligent automation at TechAivv.'],
  ['2025', 'Agentic Product Builder', 'Shipped Flo.AI and workflow automation systems around generative AI.'],
  ['2024', 'Applied ML Engineer', 'Built and deployed computer-vision and predictive-health products.'],
  ['2022 — 2026', 'B.Tech · AI & Data Science', 'Strengthened the foundations: algorithms, systems, data, and product thinking.'],
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.16 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } };

function SectionHeader({ index, title, copy }) {
  return <div className="section-header"><div><span className="mono">// {index}</span><h2>{title}</h2></div>{copy ? <p>{copy}</p> : null}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Yudhveer home"><span>YS</span><strong>Yudhveer Singh Panwar</strong></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#journey">Journey</a><a href="#contact">Contact</a></nav>
        <a className="button button-small" href="#contact">Let&apos;s work together <ArrowUpRight /></a>
      </header>

      <section className="hero" id="home">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <h1>I build AI products that feel <em>human.</em></h1>
          <p>Full-stack AI developer crafting intelligent products end-to-end—from a rough idea to software people trust, understand, and enjoy using.</p>
          <div className="hero-actions"><a className="button" href="#work">View selected work <ArrowUpRight /></a><a className="button button-ghost" href="/Yudhveer_resume2.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowDownToLine /></a></div>
          <div className="availability mono"><span className="live-dot" />Based in New Delhi <i /> Available for meaningful AI product work</div>
        </motion.div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .12 }}>
          <div className="portrait-grid" /><span className="corner corner-a" /><span className="corner corner-b" />
          <Image src="/yudhveer.jpg" alt="Yudhveer Singh Panwar" width={900} height={1200} priority className="portrait" />
          <div className="portrait-meta mono"><span>FULL STACK / AI</span><span>28.6139° N<br />77.2090° E</span></div>
        </motion.div>
      </section>

      <section className="section" id="work">
        <SectionHeader index="01" title="Selected work" copy="Four products where engineering depth meets useful, thoughtful experience." />
        <div className="project-list">
          {projects.map((project, i) => <motion.a key={project.title} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }} className="project-row" href={project.href} target="_blank" rel="noreferrer">
            <span className="project-number mono">{project.number}</span><div className="project-main"><span className="mono">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="stack mono">{project.stack.map(x => <span key={x}>{x}</span>)}</div></div><div className="project-result"><span className="mono">Outcome</span><strong>{project.result}</strong></div><span className="project-arrow"><ArrowUpRight /></span>
          </motion.a>)}
        </div>
      </section>

      <section className="section" id="capabilities">
        <SectionHeader index="02" title="What I bring" copy="One builder across product, intelligence, and production—not a chain of handoffs." />
        <div className="capability-grid">{capabilities.map((cap, i) => { const Icon = cap.icon; return <motion.article key={cap.title} {...reveal} transition={{ ...reveal.transition, delay: i * .08 }} className="capability"><Icon /><span className="mono">0{i + 1}</span><h3>{cap.title}</h3><p>{cap.text}</p><ul>{cap.items.map(item => <li key={item}>{item}</li>)}</ul></motion.article>; })}</div>
      </section>

      <section className="section journey-section" id="journey">
        <SectionHeader index="03" title="A builder’s journey" copy="The through-line is simple: learn the system, make it useful, then ship it well." />
        <div className="timeline">{journey.map(([date, role, description], i) => <motion.div key={role} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }} className="timeline-row"><span className="timeline-dot" /><time className="mono">{date}</time><h3>{role}</h3><p>{description}</p></motion.div>)}</div>
      </section>

      <section className="contact" id="contact">
        <motion.div {...reveal} className="contact-copy"><span className="mono">// 04 · Contact</span><h2>Have an ambitious idea?<br />Let&apos;s make it <em>real.</em></h2><p>Tell me what you&apos;re trying to build. I&apos;ll bring clarity, technical range, and the energy to move it forward.</p><a className="button" href="mailto:yudhveerp10@gmail.com">Start a conversation <Mail /></a></motion.div>
        <div className="contact-links"><a href="mailto:yudhveerp10@gmail.com"><Mail />yudhveerp10@gmail.com</a><span><MapPin />New Delhi, India</span><a href="https://github.com/yudhveer10" target="_blank" rel="noreferrer"><Github />github.com/yudhveer10</a><a href="https://www.linkedin.com/in/yudhveer10" target="_blank" rel="noreferrer"><Linkedin />linkedin.com/in/yudhveer10</a></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><span className="mono"><Terminal /> Built with intent. Shipped with care.</span></footer>
    </main>
  );
}
