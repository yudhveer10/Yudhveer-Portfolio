'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import SiteHeader from '@/components/SiteHeader';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Terminal,
} from 'lucide-react';

const projects = [
  { number: '01', title: 'Flo.AI', type: 'Agentic workflow engine', description: 'Multi-step AI automation built for reliable decisions, lower latency, and real product work.', stack: ['Next.js', 'Python', 'Gemini 2.5', 'PostgreSQL'], result: '98% workflow success', href: 'https://github.com/yudhveer10' },
  { number: '02', title: 'Brahmastra', type: 'FinTech · Options intelligence', description: 'A private options-intelligence terminal with responsive NIFTY 50 and BANK NIFTY dashboards, simulating real-time market ticks with candlestick, VWAP, option-chain, IV, open-interest, delta, and defined-risk spread analysis.', stack: ['React', 'TypeScript', 'Vite', 'Node.js'], result: 'Modular broker-provider layers', href: null },
  { number: '03', title: 'SSB Sarthi', type: 'EdTech · Defence exam prep', description: 'A full-stack platform helping Indian defence aspirants prepare for the SSB, with personalised prep plans, OIR timed practice tests, PPDT story-writing, OLQ reflection journals, and a readiness dashboard.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'], result: 'Row-level secured user data', href: 'https://github.com/yudhveer10/SSB-Sarthi' },
  { number: '04', title: 'The Crop Doctor', type: 'Computer vision · AgriTech', description: 'A deep-learning classifier trained on 5,000+ annotated images across 10 disease categories, wired into a web interface that returns a diagnosis in under two seconds.', stack: ['Python', 'TensorFlow', 'CNN', 'Deep Learning'], result: '95% validation accuracy', href: 'https://github.com/yudhveer10/tomato-plant-disease-detection' },
];

const capabilities = [
  { icon: Box, title: 'Product Engineering', text: 'I turn ambitious ideas into responsive, dependable products with clear architecture.', items: ['Full-stack web & mobile', 'System design & APIs', 'Performance & reliability'] },
  { icon: BrainCircuit, title: 'Applied AI', text: 'I make models useful—shaping data, evaluation, and interfaces around real people.', items: ['LLMs & agentic systems', 'Vision & deep learning', 'RAG & vector search'] },
  { icon: Rocket, title: 'Ship & Scale', text: 'I carry the work from prototype to production with a bias for momentum and quality.', items: ['Cloud & containers', 'CI/CD & observability', 'Security-minded delivery'] },
];

const skills = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'C'] },
  { label: 'Frameworks', items: ['Next.js', 'React.js', 'Express.js', 'Tailwind CSS'] },
  { label: 'Databases', items: ['SQL', 'NoSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { label: 'Tools & Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'TensorFlow/Keras', 'CI/CD'] },
];

const journey = [
  ['June 2026 — Present', 'AI Engineer · TechAivv Technologies', 'Building a scalable full-stack AI SaaS platform—integrating generative models to automate 80% of manual user workflows, and engineering backends for real-time inference under 200ms.'],
  ['Nov 2025 — June 2026', 'Software Developer Intern · TechAivv Technologies', 'Designed responsive interfaces in Next.js and React, reaching a 95+ Lighthouse score and cutting initial page-load latency by 45% through efficient component modularity.'],
  ['July 2025 — Aug 2025', 'Python Developer Intern · Paisalo Digital Limited', 'Built internal workflow automation with Python, Pandas, NumPy, and OCR—automating 80% of repetitive tasks, halving manual effort, and improving data-flow reliability by 35%.'],
  ['2022 — 2026', 'B.Tech · AI & Data Science', 'Strengthened the fundamentals: algorithms, data structures, statistics, data engineering, model thinking, and problem decomposition.'],
];

const achievements = [
  { icon: GraduationCap, title: 'Vivekananda Institute of Professional Studies', meta: 'GGSIPU · New Delhi · 2022 — 2026', text: 'B.Tech in AI & Data Science, graduated with an 8.57 CGPA.' },
  { icon: Award, title: "Core Team '25 · TEDxVIPS", meta: 'External relations & partnerships', text: 'Managed vendor partnerships and secured the key sponsorships behind the event’s operational success.' },
  { icon: Code2, title: '300+ problems solved on LeetCode', meta: '100 Days Badge · 2025', text: 'Arrays, trees, and dynamic programming—earned through consistent daily problem-solving.' },
];

const growthSkills = ['Applied AI engineering', 'Prompt design', 'Model evaluation', 'React architecture', 'API design', 'Production debugging', 'Git collaboration', 'Clear technical communication'];

const ease = [0.22, 1, 0.36, 1];
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.16 }, transition: { duration: 0.65, ease } };

// Hero entrance: children fade up one after another.
const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const heroItem = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const heroWord = { hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.8, ease } } };

// Chips inside a card pop in one by one once the card scrolls into view.
const chipGroup = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease, staggerChildren: 0.045, delayChildren: 0.15 } } };
const chip = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease } } };

const headline = ['I', 'build', 'AI', 'products', 'that', 'feel'];

function SectionHeader({ index, title, copy }) {
  return <motion.div {...reveal} className="section-header"><div><span className="mono">{index}</span><h2>{title}</h2></div>{copy ? <p>{copy}</p> : null}</motion.div>;
}

// Cards with the .spot class get a soft glow that follows the pointer.
function useSpotlight() {
  useEffect(() => {
    const onMove = (event) => {
      const card = event.target.closest?.('.spot');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}

function ProjectBody({ project }) {
  return (
    <>
      <span className="project-number mono">{project.number}</span>
      <div className="project-main">
        <span className="mono">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack mono">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
      </div>
      <div className="project-result"><span className="mono">Outcome</span><strong>{project.result}</strong></div>
      <span className="project-arrow">{project.href ? <ArrowUpRight /> : <Lock />}</span>
    </>
  );
}

export default function Home() {
  useSpotlight();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 56]);

  return (
    <MotionConfig reducedMotion="user">
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <motion.div className="hero-copy" variants={heroStagger} initial="hidden" animate="show">
          <h1 aria-label="I build AI products that feel human.">
            {headline.map(word => <span key={word} className="word" aria-hidden="true"><motion.span variants={heroWord}>{word}</motion.span></span>)}
            <span className="word" aria-hidden="true">
              <motion.em variants={heroWord}>human.</motion.em>
              <svg className="scribble" viewBox="0 0 200 16" preserveAspectRatio="none"><motion.path d="M3 11 C 45 3, 95 3, 130 8 S 185 13, 197 6" variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 0.75, ease } } }} /></svg>
            </span>
          </h1>
          <motion.p variants={heroItem}>AI Engineer at TechAivv, crafting intelligent products end-to-end—from a rough idea to software people trust, understand, and enjoy using.</motion.p>
          <motion.div variants={heroItem} className="hero-actions"><a className="button" href="#work">View selected work <ArrowUpRight /></a><a className="button button-ghost" href="/Yudhveer-Singh-Panwar-Resume.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowDownToLine /></a></motion.div>
          <motion.div variants={heroItem} className="availability mono"><span className="live-dot" />Based in New Delhi <i /> Available for meaningful AI product work</motion.div>
          <motion.div variants={heroItem} className="role-pill"><BriefcaseBusiness /><span>Current role</span><strong>AI Engineer · TechAivv</strong></motion.div>
        </motion.div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15, ease }}>
          <motion.div className="portrait-parallax" style={{ y: portraitY }}>
            <Image src="/yudhveer.webp" alt="Yudhveer Singh Panwar" width={1500} height={2250} priority sizes="(max-width: 960px) 92vw, 520px" className="portrait" />
          </motion.div>
          <motion.div className="portrait-meta mono" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .7, ease }}><span>AI Engineer · Full Stack</span><span>New Delhi, India</span></motion.div>
        </motion.div>
      </section>

      <section className="section" id="work">
        <SectionHeader index="Work" title="Selected work" copy="Four products where engineering depth meets useful, thoughtful experience." />
        <div className="project-list">
          {projects.map((project, i) => project.href
            ? <motion.a key={project.title} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }} className="project-row spot" href={project.href} target="_blank" rel="noreferrer"><ProjectBody project={project} /></motion.a>
            : <motion.div key={project.title} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }} className="project-row project-row-private spot" title="Private repository"><ProjectBody project={project} /></motion.div>
          )}
        </div>
      </section>

      <section className="section" id="capabilities">
        <SectionHeader index="Capabilities" title="What I bring" copy="One builder across product, intelligence, and production—not a chain of handoffs." />
        <div className="capability-grid">{capabilities.map((cap, i) => { const Icon = cap.icon; return <motion.article key={cap.title} {...reveal} transition={{ ...reveal.transition, delay: i * .08 }} className="capability spot"><Icon /><span className="mono">0{i + 1}</span><h3>{cap.title}</h3><p>{cap.text}</p><ul>{cap.items.map(item => <li key={item}>{item}</li>)}</ul></motion.article>; })}</div>
      </section>

      <section className="section" id="skills">
        <SectionHeader index="Skills" title="Technical toolkit" copy="The stack I reach for—chosen for reliability in production, not novelty." />
        <div className="skill-grid">{skills.map((group, i) => <motion.div key={group.label} variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="skill-group spot"><span className="mono">{group.label}</span><ul>{group.items.map(item => <motion.li key={item} variants={chip}>{item}</motion.li>)}</ul></motion.div>)}</div>
      </section>

      <section className="section journey-section" id="journey">
        <SectionHeader index="Journey" title="A builder’s journey" copy="The through-line is simple: learn the system, make it useful, then ship it well." />
        <motion.div variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="current-role-card spot">
          <div><span className="mono"><Sparkles /> Current chapter</span><h3>From internship to full-time AI Engineer at TechAivv.</h3></div>
          <p>After completing my Software Developer Internship in June 2026, I stepped into a full-time AI engineering role where I’m sharpening production AI, system design, frontend quality, backend reliability, and collaborative delivery.</p>
          <div className="growth-tags">{growthSkills.map(skill => <motion.span key={skill} variants={chip}>{skill}</motion.span>)}</div>
        </motion.div>
        <div className="timeline">{journey.map(([date, role, description], i) => <motion.div key={role} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }} className="timeline-row"><span className="timeline-dot" /><time className="mono">{date}</time><h3>{role}</h3><p>{description}</p></motion.div>)}</div>
        <div className="credential-grid">{achievements.map((item, i) => { const Icon = item.icon; return <motion.article key={item.title} {...reveal} transition={{ ...reveal.transition, delay: i * .06 }} className="credential spot"><Icon /><span className="mono">{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></motion.article>; })}</div>
      </section>

      <section className="contact" id="contact">
        <motion.div {...reveal} className="contact-copy"><span className="mono">Contact</span><h2>Have an ambitious idea?<br />Let&apos;s make it <em>real.</em></h2><p>Tell me what you&apos;re trying to build. I&apos;ll bring clarity, technical range, and the energy to move it forward.</p><div className="contact-links"><a href="mailto:yudhveerp10@gmail.com"><Mail />yudhveerp10@gmail.com</a><span><MapPin />New Delhi, India</span><a href="https://github.com/yudhveer10" target="_blank" rel="noreferrer"><Github />github.com/yudhveer10</a><a href="https://www.linkedin.com/in/yudhveer10" target="_blank" rel="noreferrer"><Linkedin />linkedin.com/in/yudhveer10</a></div></motion.div>
        <motion.form {...reveal} action="https://formspree.io/f/xgvnlrrn" method="POST" className="contact-form">
          <div className="form-heading"><span className="mono">Project brief</span><h3>Send me the details.</h3></div>
          <label><span>Name</span><input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label><span>Email</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label><span>Message</span><textarea name="message" rows={6} placeholder="What are you hoping to build?" required /></label>
          <button type="submit" className="button">Send message <ArrowUpRight /></button>
        </motion.form>
      </section>

      <footer><span>© {new Date().getFullYear()} Yudhveer Singh Panwar</span><span className="mono"><Terminal /> Built with intent. Shipped with care.</span></footer>
    </main>
    </MotionConfig>
  );
}
