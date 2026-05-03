'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  Trophy,
} from 'lucide-react';

const playerStats = [
  { label: 'Current Role', value: 'Software Developer Intern', subtext: 'TechAivv Technologies' },
  { label: 'Specialization', value: 'Full Stack AI', subtext: 'Next.js, Python, Agentic AI' },
  { label: 'Education', value: 'B.Tech AI & DS', subtext: '8.57 CGPA, 2022 - 2026' },
  { label: 'Location', value: 'New Delhi, India', subtext: 'Available for exciting builds' },
];

const systems = [
  {
    title: 'Frontend Systems',
    icon: Code2,
    items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'AI Engine',
    icon: BrainCircuit,
    items: ['Agentic workflows', 'LLM orchestration', 'TensorFlow/Keras', 'CNN pipelines'],
  },
  {
    title: 'Backend Ops',
    icon: Cpu,
    items: ['Python', 'Express.js', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    title: 'Deployment Stack',
    icon: Shield,
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

const missions = [
  {
    title: 'Flo.AI',
    status: 'Active development',
    impact: 'Agentic AI workflow platform',
    description:
      'Designed a multi-step agentic framework with Gemini 2.5 to automate complex workflows with high reliability and lower generation latency.',
    metrics: ['15+ logical steps automated', '98% workflow success rate', '60% lower generation latency'],
    link: 'https://github.com/yudhveer10',
    cta: 'Follow development',
  },
  {
    title: 'The Crop Doctor',
    status: 'Deployed AI diagnostic app',
    impact: 'CNN-powered disease detection',
    description:
      'Built a crop disease classifier trained on 5,000+ annotated images and integrated it into a web app that returns predictions in under 2 seconds.',
    metrics: ['95% validation accuracy', '10 disease categories', 'Sub-2 second diagnosis'],
    link: 'https://github.com/yudhveer10/tomato-plant-disease-detection',
    cta: 'View repository',
  },
  {
    title: 'GlucoPredict',
    status: 'Predictive health app',
    impact: 'GAN-assisted diabetes risk prediction',
    description:
      'Created a Flask-based prediction workflow that uses synthetic data augmentation to improve model robustness for diabetes assessment.',
    metrics: ['Flask web experience', 'Synthetic data workflow', 'ML-backed health prediction'],
    link: 'https://github.com/yudhveer10/Glucopredict',
    cta: 'Inspect build',
  },
  {
    title: 'Biometric Authentication System',
    status: 'Security prototype',
    impact: 'Face recognition and liveness checks',
    description:
      'Developed a secure verification flow combining recognition, liveness detection, and identity-linked validation in a browser-based frontend.',
    metrics: ['Face recognition', 'Liveness detection', 'WebRTC-enabled flow'],
    link: 'https://github.com/aarinbadola/Authentication-proj',
    cta: 'Open project',
  },
];

const timeline = [
  {
    title: 'Software Developer Intern',
    org: 'TechAivv Technologies',
    period: 'Nov 2025 - Present',
    details:
      'Building a scalable AI SaaS platform, responsive Next.js interfaces, and low-latency backend systems for real-time inference.',
    badges: ['80% workflow automation', '95+ Lighthouse score', 'API latency under 200ms'],
  },
  {
    title: 'Python Developer Intern',
    org: 'Paisalo Digital Limited',
    period: 'Jul 2025 - Aug 2025',
    details:
      'Automated internal workflows with Python, OCR, and scheduling pipelines to cut repetitive operations and improve reliability.',
    badges: ['50% less manual effort', '30% better uptime', '35% stronger data flow reliability'],
  },
];

const achievements = [
  'Solved 300+ LeetCode problems and earned the 100 Days Badge in 2025.',
  'Core Team member at TEDxVIPS, handling external relations, partnerships, and sponsorship support.',
  'Focused on shipping AI products that connect model capability with strong user-facing experiences.',
];

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Missions', href: '#missions' },
  { label: 'Skill Tree', href: '#skill-tree' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="font-display text-3xl uppercase tracking-[0.14em] text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">{copy}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="hud-glow hud-glow-cyan" />
      <div className="hud-glow hud-glow-orange" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,12,24,0.74)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-[var(--accent)]">YSP // Player One</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-dim)]">Full Stack AI Builder</p>
          </div>

          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-[var(--text-dim)] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--text-primary)]">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hud-button hidden sm:inline-flex">
            Start Mission
          </a>
        </div>
      </header>

      <section id="overview" className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hud-panel overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">
              <span className="hud-pill">Online</span>
              <span>Game UI Portfolio</span>
              <span>Build 2026.05</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]">Mission Control</p>
                  <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--text-primary)] sm:text-6xl xl:text-7xl">
                    Yudhveer
                    <br />
                    Singh
                    <br />
                    Panwar
                  </h1>
                </div>

                <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                  Full stack AI developer and final-year B.Tech student building fast, scalable products where
                  modern frontend systems meet real-world AI automation.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="hud-mini-panel">
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Primary Class</span>
                    <p className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">AI Engineer</p>
                  </div>
                  <div className="hud-mini-panel">
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Secondary Class</span>
                    <p className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">Frontend Dev</p>
                  </div>
                  <div className="hud-mini-panel">
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Focus</span>
                    <p className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">Agentic UX</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/Yudhveer_resume2.pdf" target="_blank" rel="noreferrer" className="hud-button">
                    Resume File
                  </a>
                  <a href="#missions" className="hud-button hud-button-secondary">
                    View Missions
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)]">
                  <a
                    href="mailto:yudhveerp10@gmail.com"
                    className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]"
                  >
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                    yudhveerp10@gmail.com
                  </a>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[var(--accent)]" />
                    New Delhi, India
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/yudhveer10" target="_blank" rel="noreferrer" className="social-chip">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yudhveer10"
                    target="_blank"
                    rel="noreferrer"
                    className="social-chip"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href="https://leetcode.com/u/yudhveerpanwar/" target="_blank" rel="noreferrer" className="social-chip">
                    <Trophy className="h-4 w-4" />
                    LeetCode
                  </a>
                </div>
              </div>

              <div className="space-y-5">
                <div className="avatar-shell">
                  <div className="avatar-scanline" />
                  <Image
                    src="/yudhveer.jpg"
                    alt="Yudhveer Singh Panwar"
                    width={620}
                    height={760}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="hud-mini-panel">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Current Objective</span>
                    <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    Building AI products that feel polished on the frontend, reliable on the backend, and genuinely
                    useful in production.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="hud-panel">
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl uppercase tracking-[0.12em]">Player Stats</p>
                <Briefcase className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <div className="mt-6 grid gap-4">
                {playerStats.map((stat) => (
                  <div key={stat.label} className="hud-mini-panel">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-dim)]">{stat.label}</p>
                    <p className="mt-2 font-display text-xl uppercase tracking-[0.08em] text-[var(--text-primary)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.subtext}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hud-panel">
              <p className="font-display text-2xl uppercase tracking-[0.12em]">Achievements</p>
              <div className="mt-6 space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="timeline-dot pl-6 text-sm leading-7 text-[var(--text-muted)]">
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="missions" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Featured Missions"
          title="Latest project lineup from the resume"
          copy="The portfolio now highlights your current AI work first, with each project presented like a playable mission card instead of a standard portfolio tile."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {missions.map((mission, index) => (
            <motion.a
              key={mission.title}
              href={mission.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="hud-panel hud-panel-hover group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{mission.status}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-[var(--text-primary)]">
                    {mission.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-6 w-6 text-[var(--text-dim)] transition group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">{mission.impact}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{mission.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {mission.metrics.map((metric) => (
                  <span key={metric} className="hud-tag">
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[var(--text-primary)]">
                {mission.cta}
                <ExternalLink className="h-4 w-4 text-[var(--accent)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="skill-tree" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Skill Tree"
            title="System loadout"
            copy="Instead of generic service cards, the stack is organized like game systems: frontend, AI, backend, and deployment."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {systems.map((system) => {
              const Icon = system.icon;
              return (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  className="hud-panel"
                >
                  <div className="flex items-center gap-3">
                    <div className="icon-frame">
                      <Icon className="h-5 w-5 text-[var(--accent)]" />
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-[0.1em]">{system.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {system.items.map((item) => (
                      <span key={item} className="hud-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Recent progression"
          copy="Your latest internship experience now reads more like a level progression log, with measurable impact pulled directly from the resume."
        />

        <div className="mt-10 grid gap-6">
          {timeline.map((entry, index) => (
            <motion.div
              key={`${entry.title}-${entry.org}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="hud-panel"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{entry.period}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-[var(--text-primary)]">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">{entry.org}</p>
                </div>
                <div className="max-w-2xl">
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{entry.details}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.badges.map((badge) => (
                      <span key={badge} className="hud-tag">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="hud-panel">
            <SectionHeading
              eyebrow="Ready Player Two"
              title="Start a new build"
              copy="If you want a frontend revamp, AI product, automation workflow, or a polished MVP, this command channel is open."
            />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
              <p className="inline-flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--accent)]" />
                yudhveerp10@gmail.com
              </p>
              <p className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                New Delhi, India
              </p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xgvnlrrn"
            method="POST"
            className="hud-panel space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--text-muted)]">
                <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Name</span>
                <input type="text" name="name" required className="hud-input" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-[var(--text-muted)]">
                <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Email</span>
                <input type="email" name="email" required className="hud-input" placeholder="your@email.com" />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-[var(--text-muted)]">
              <span className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                className="hud-input min-h-[180px] resize-none"
                placeholder="Tell me about the mission..."
              />
            </label>

            <button type="submit" className="hud-button">
              Send Transmission
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
