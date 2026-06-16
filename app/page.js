'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';
import { projectCards as runTimeline } from '@/components/projectCards';

const quickStats = [
  { label: 'XP', value: '300+', note: 'LeetCode problems solved' },
  { label: 'Current Role', value: 'TechAivv', note: 'Professional role summary', compact: true },
  { label: 'Build Focus', value: 'Agentic AI', note: 'Full stack product systems' },
];

const proofPoints = [
  { label: 'Primary Stack', value: 'Next.js + Python + AI APIs' },
  { label: 'Design Edge', value: 'Game-feel interfaces with clean UX' },
  { label: 'Delivery Style', value: 'Prototype fast, polish carefully' },
];

const projects = [
  {
    title: 'Flo.AI',
    type: 'Flagship Build',
    description:
      'Agentic AI workflow engine using Gemini 2.5 for long-form, multi-step automation and real-time decision systems.',
    tags: ['15+ step workflows', '98% success rate', '60% lower latency'],
    meta: ['Agentic AI', 'Workflow Engine', 'Gemini 2.5'],
    link: 'https://github.com/yudhveer10',
  },
  {
    title: 'The Crop Doctor',
    type: 'Field Deployment',
    description:
      'CNN-based crop disease detection app trained on 5,000+ annotated images with fast browser-side delivery of results.',
    tags: ['95% validation accuracy', '10 disease classes', 'Under 2s results'],
    meta: ['Computer Vision', 'CNN', 'AgriTech'],
    link: 'https://github.com/yudhveer10/tomato-plant-disease-detection',
  },
  {
    title: 'GlucoPredict',
    type: 'Health Tech System',
    description:
      'Flask app for diabetes prediction using synthetic-data-assisted modeling to improve robustness.',
    tags: ['GAN-assisted data', 'Flask app', 'Prediction workflow'],
    meta: ['Health Tech', 'Flask', 'ML Modeling'],
    link: 'https://github.com/yudhveer10/Glucopredict',
  },
  {
    title: 'Biometric Authentication',
    type: 'Security Prototype',
    description:
      'Face recognition, liveness detection, and identity verification combined into a secure web-based prototype.',
    tags: ['WebRTC', 'Face recognition', 'Liveness checks'],
    meta: ['Identity', 'WebRTC', 'Security UX'],
    link: 'https://github.com/aarinbadola/Authentication-proj',
  },
];

const skillLanes = [
  {
    icon: Code2,
    title: 'Frontend Speed',
    text: 'Responsive product screens with motion, polish, and readable hierarchy.',
    items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    icon: BrainCircuit,
    title: 'AI Powerups',
    text: 'Model-backed workflows, vision systems, and agentic product logic.',
    items: ['Agentic AI', 'LLMs', 'TensorFlow/Keras', 'CNNs'],
  },
  {
    icon: Zap,
    title: 'Backend Mechanics',
    text: 'APIs, data flows, queues, and reliability-minded service design.',
    items: ['Python', 'Express.js', 'MongoDB', 'Redis'],
  },
  {
    icon: Rocket,
    title: 'Deploy Engine',
    text: 'Shipping-ready systems with cloud, containers, and release discipline.',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

const buildLoop = [
  {
    title: 'Map the player path',
    text: 'Clarify the user flow, success moment, and the smallest product loop worth shipping.',
  },
  {
    title: 'Build the core mechanic',
    text: 'Turn AI, data, and interface pieces into a working prototype with real feedback.',
  },
  {
    title: 'Polish the feel',
    text: 'Tighten hierarchy, motion, responsiveness, copy, and edge cases until it feels dependable.',
  },
];

function SectionTitle({ tag, title, text }) {
  return (
    <div className="space-y-3">
      <p className="section-tag">{tag}</p>
      <h2 className="section-heading">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-slate-300">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="game-shell">
      <div className="arena-bg" />

      <header className="topbar">
        <div>
          <p className="font-display text-lg uppercase text-cyan-300">YSP / Portfolio</p>
          <p className="text-xs uppercase text-slate-500">Full Stack AI Builder</p>
        </div>

        <nav className="hidden gap-6 text-xs uppercase text-slate-400 lg:flex">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#run" className="hover:text-white">Run Timeline</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a href="#contact" className="action-btn">
          Start a Project
        </a>
      </header>

      <section id="home" className="hero-wrap">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="section-tag">Full Stack AI Builder</p>
            <h1 className="hero-title">
              Building fast,
              <br />
              thoughtful AI
              <br />
              product experiences
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Full stack AI developer focused on polished interfaces, smart automation, and products that feel clear,
              reliable, and alive. This portfolio keeps an arcade-inspired rhythm while presenting the work with a
              cleaner, more professional structure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/Yudhveer_resume2.pdf" target="_blank" rel="noreferrer" className="action-btn">
                Open Resume
              </a>
              <a href="#run" className="ghost-btn">
                Explore Journey
              </a>
            </div>

            <div className="hero-stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-[11px] uppercase text-slate-500">{stat.label}</p>
                  <p className={`mt-2 stat-number text-white ${stat.compact ? 'stat-value-compact' : 'stat-value'}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <a href="mailto:yudhveerp10@gmail.com" className="social-link">
                <Mail className="h-4 w-4" />
                yudhveerp10@gmail.com
              </a>
              <span className="social-link">
                <MapPin className="h-4 w-4" />
                New Delhi, India
              </span>
              <a href="https://github.com/yudhveer10" target="_blank" rel="noreferrer" className="social-link">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yudhveer10" target="_blank" rel="noreferrer" className="social-link">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/yudhveerpanwar/" target="_blank" rel="noreferrer" className="social-link">
                <Trophy className="h-4 w-4" />
                LeetCode
              </a>
            </div>

            <div className="proof-strip">
              {proofPoints.map((point) => (
                <div key={point.label} className="proof-item">
                  <p>{point.label}</p>
                  <strong>{point.value}</strong>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="hero-visual"
        >
          <div className="profile-frame">
            <div className="profile-halo" />
            <Image
              src="/yudhveer.jpg"
              alt="Yudhveer Singh Panwar"
              width={900}
              height={1200}
              priority
              className="profile-img"
            />
            <div className="profile-overlay">
              <div>
                <p className="text-[11px] uppercase text-cyan-300">Profile</p>
                <p className="text-2xl font-semibold text-white">Yudhveer Singh Panwar</p>
              </div>
              <div>
                <p className="text-[11px] uppercase text-slate-400">Role</p>
                <p className="text-sm text-slate-200">Full Stack AI Developer</p>
              </div>
              <div className="profile-status">
                <span />
                Available for AI product builds
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="run" className="section-block">
        <SectionTitle
          tag="Journey"
          title="A clearer timeline through the work"
          text="The gaming experience stays in the visual language, while the career story reads like a focused professional timeline with clean milestones and scannable context."
        />

        <div className="runner-stage">
          <div className="run-launch-panel relative mx-auto min-h-[280px] w-full max-w-5xl">
            <p className="text-[11px] uppercase text-cyan-300">Career Snapshot</p>
            <h3 className="run-panel-title">
              From AI foundations to product-focused execution
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              The portfolio now highlights progression with calmer hierarchy: strong milestones, readable context, and
              a polished visual rhythm that keeps the experience memorable without overpowering the work.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="journey-illustration"
          >
            <Image
              src="/journey-illustration.png"
              alt="Illustrated career journey path with AI, code, automation, product, and launch checkpoints"
              width={1792}
              height={1024}
              className="journey-img"
            />
            <div className="journey-caption">
              <span>AI Foundations</span>
              <span>Product Systems</span>
              <span>Launch Energy</span>
            </div>
          </motion.div>

          <div className="checkpoint-row">
            {runTimeline.map((step, index) => (
              <motion.article
                key={`${step.year}-${step.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`checkpoint ${index % 2 === 0 ? 'checkpoint-cyan' : 'checkpoint-orange'}`}
              >
                <div className="checkpoint-visual">
                  <span>{index + 1}</span>
                </div>
                <p className="text-[11px] uppercase text-slate-400">{step.year}</p>
                <h3 className="checkpoint-title">{step.name}</h3>
                <p className="mt-1 text-xs uppercase text-cyan-300">{step.tag}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="build-loop">
          <div>
            <p className="section-tag">Build Loop</p>
            <h2 className="section-heading">How I turn ideas into playable products</h2>
          </div>

          <div className="build-steps">
            {buildLoop.map((step, index) => (
              <article key={step.title} className="build-step">
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block">
        <SectionTitle
          tag="Project Levels"
          title="The missions you can open right now"
          text="Recent projects are framed as playable levels, but the copy and hierarchy stay grounded for recruiters, clients, and technical reviewers."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="project-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase text-white">{project.title}</h3>
                </div>
                <span className="project-arrow">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="project-meta">
                {project.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="skills" className="section-block">
        <SectionTitle
          tag="Powerups"
          title="The skills driving the run"
          text="The systems behind the projects: interface speed, AI intelligence, backend reliability, and deployment discipline."
        />

        <div className="skills-grid">
          {skillLanes.map((lane) => {
            const Icon = lane.icon;
            return (
              <div key={lane.title} className="skill-card">
                <div className="flex items-center gap-3">
                  <div className="skill-icon">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{lane.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">{lane.text}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {lane.items.map((item) => (
                    <span key={item} className="project-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section-block pb-24">
        <div className="contact-grid">
          <div className="contact-copy">
            <SectionTitle
              tag="Next Level"
              title="Let's build something that feels alive"
              text="If you want an AI product, automation workflow, or frontend experience with motion and personality, send the project details here."
            />

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p className="social-link">
                <Mail className="h-4 w-4" />
                yudhveerp10@gmail.com
              </p>
              <p className="social-link">
                <Briefcase className="h-4 w-4" />
                Open to AI product and frontend projects
              </p>
              <p className="social-link">
                <Sparkles className="h-4 w-4" />
                Best fit: AI SaaS, polished MVPs, and automation tools
              </p>
            </div>
          </div>

          <form action="https://formspree.io/f/xgvnlrrn" method="POST" className="contact-form">
            <input type="text" name="name" required placeholder="Your name" className="form-field" />
            <input type="email" name="email" required placeholder="Your email" className="form-field" />
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about the project..."
              className="form-field"
            />
            <button type="submit" className="action-btn w-full justify-center">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
