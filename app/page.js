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

const quickStats = [
  { label: 'XP', value: '300+', note: 'LeetCode problems solved' },
  { label: 'Current Quest', value: 'TechAivv', note: 'Software Developer Intern' },
  { label: 'Build Focus', value: 'Agentic AI', note: 'Full stack product systems' },
];

const runnerSteps = [
  {
    year: '2022',
    title: 'Spawned Into AI & Data Science',
    description: 'Started B.Tech at VIPS with a strong focus on applied AI and product building.',
    color: 'cyan',
  },
  {
    year: '2025',
    title: 'Paisalo Side Quest',
    description: 'Automated internal workflows with Python, OCR, and pipeline scheduling.',
    color: 'orange',
  },
  {
    year: '2025',
    title: 'TechAivv Main Mission',
    description: 'Building AI SaaS flows, faster interfaces, and low-latency backend systems.',
    color: 'cyan',
  },
  {
    year: 'Now',
    title: 'Flo.AI Active Run',
    description: 'Designing multi-step agentic workflows with real product outcomes.',
    color: 'orange',
  },
];

const projects = [
  {
    title: 'Flo.AI',
    type: 'Boss Level',
    description:
      'Agentic AI workflow engine using Gemini 2.5 for long-form, multi-step automation and real-time decision systems.',
    tags: ['15+ step workflows', '98% success rate', '60% lower latency'],
    link: 'https://github.com/yudhveer10',
  },
  {
    title: 'The Crop Doctor',
    type: 'Field Mission',
    description:
      'CNN-based crop disease detection app trained on 5,000+ annotated images with fast browser-side delivery of results.',
    tags: ['95% validation accuracy', '10 disease classes', 'Under 2s results'],
    link: 'https://github.com/yudhveer10/tomato-plant-disease-detection',
  },
  {
    title: 'GlucoPredict',
    type: 'Health Tech Run',
    description:
      'Flask app for diabetes prediction using synthetic-data-assisted modeling to improve robustness.',
    tags: ['GAN-assisted data', 'Flask app', 'Prediction workflow'],
    link: 'https://github.com/yudhveer10/Glucopredict',
  },
  {
    title: 'Biometric Authentication',
    type: 'Security Arena',
    description:
      'Face recognition, liveness detection, and identity verification combined into a secure web-based prototype.',
    tags: ['WebRTC', 'Face recognition', 'Liveness checks'],
    link: 'https://github.com/aarinbadola/Authentication-proj',
  },
];

const skillLanes = [
  { icon: Code2, title: 'Frontend Speed', items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'] },
  { icon: BrainCircuit, title: 'AI Powerups', items: ['Agentic AI', 'LLMs', 'TensorFlow/Keras', 'CNNs'] },
  { icon: Zap, title: 'Backend Mechanics', items: ['Python', 'Express.js', 'MongoDB', 'Redis'] },
  { icon: Rocket, title: 'Deploy Engine', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
];

function SectionTitle({ tag, title, text }) {
  return (
    <div className="space-y-3">
      <p className="section-tag">{tag}</p>
      <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-white sm:text-5xl">{title}</h2>
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
          <p className="font-display text-lg uppercase tracking-[0.25em] text-cyan-300">YSP / Run Mode</p>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Full Stack AI Builder</p>
        </div>

        <nav className="hidden gap-6 text-xs uppercase tracking-[0.28em] text-slate-400 lg:flex">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#run" className="hover:text-white">Run Timeline</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a href="#contact" className="action-btn">
          Play With Me
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
            <p className="section-tag">Temple Run Style Portfolio</p>
            <h1 className="font-display text-5xl uppercase leading-[0.88] tracking-[0.07em] text-white sm:text-7xl xl:text-[7rem]">
              Run Through
              <br />
              My Build
              <br />
              Journey
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Full stack AI developer building fast, smart products. This portfolio is now shaped like a live run:
              milestones as tracks, projects as levels, and experience as progress.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/Yudhveer_resume2.pdf" target="_blank" rel="noreferrer" className="action-btn">
                Open Resume
              </a>
              <a href="#run" className="ghost-btn">
                Start Run
              </a>
            </div>

            <div className="hero-stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 font-display text-3xl uppercase tracking-[0.06em] text-white">{stat.value}</p>
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
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">Player</p>
                <p className="font-display text-2xl uppercase tracking-[0.08em] text-white">Yudhveer Singh Panwar</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Class</p>
                <p className="text-sm text-slate-200">Full Stack AI Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="run" className="section-block">
        <SectionTitle
          tag="Run Timeline"
          title="Experience like a live endless runner"
          text="This section is built to feel like motion through your journey. The road keeps moving, and each checkpoint marks what you unlocked."
        />

        <div className="runner-stage">
          <div className="runner-horizon" />
          <div className="runner-road">
            <div className="lane lane-left" />
            <div className="lane lane-mid" />
            <div className="lane lane-right" />
            <div className="dash dash-1" />
            <div className="dash dash-2" />
            <div className="dash dash-3" />
            <div className="runner-token" />
          </div>

          <div className="checkpoint-row">
            {runnerSteps.map((step, index) => (
              <motion.div
                key={`${step.year}-${step.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`checkpoint checkpoint-${step.color}`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{step.year}</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block">
        <SectionTitle
          tag="Project Levels"
          title="The missions you can open right now"
          text="Your recent resume projects are framed as playable levels, with clearer energy, stronger hierarchy, and better visual pacing."
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
                  <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-[0.06em] text-white">{project.title}</h3>
                </div>
                <ArrowRight className="mt-2 h-5 w-5 text-orange-300" />
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

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
          text="These are the systems behind the projects: interface speed, AI intelligence, backend reliability, and deployment stamina."
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
                  <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-white">{lane.title}</h3>
                </div>

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
              title="Let’s build something that feels alive"
              text="If you want an AI product, automation workflow, or frontend experience with real motion and personality, send the mission details here."
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
                Best fit: AI SaaS, polished MVPs, automation tools
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
              placeholder="Tell me about the mission..."
              className="form-field"
            />
            <button type="submit" className="action-btn w-full justify-center">
              Send Mission
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
