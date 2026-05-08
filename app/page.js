'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
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
import SpaceRun from '@/components/SpaceRun';
import { projectCards as runTimeline } from '@/components/projectCards';

const quickStats = [
  { label: 'XP', value: '300+', note: 'LeetCode problems solved' },
  { label: 'Current Quest', value: 'TechAivv', note: 'Current role, NDA-safe summary', compact: true },
  { label: 'Build Focus', value: 'Agentic AI', note: 'Full stack product systems' },
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
  const heroRef = useRef(null);
  const [spaceRunActive, setSpaceRunActive] = useState(false);

  const startRun = () => {
    setSpaceRunActive(true);
  };

  return (
    <main className="game-shell">
      <SpaceRun
        active={spaceRunActive}
        cards={runTimeline}
        heroRef={heroRef}
        onClose={() => setSpaceRunActive(false)}
      />
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
        <div ref={heroRef} className="contents">
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
              Full stack AI developer building fast, smart products. Hit START RUN to dive into a fullscreen
              Temple Run style timeline where projects become collectibles and career checkpoints become the track.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/Yudhveer_resume2.pdf" target="_blank" rel="noreferrer" className="action-btn">
                Open Resume
              </a>
              <button type="button" onClick={startRun} className="ghost-btn">
                Start Run
              </button>
            </div>

            <div className="hero-stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">{stat.label}</p>
                  <p className={`mt-2 font-display uppercase text-white ${stat.compact ? 'stat-value-compact' : 'stat-value'}`}>
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
        </div>
      </section>

      <section id="run" className="section-block">
        <SectionTitle
          tag="Run Timeline"
          title="Career checkpoints loaded as unlockable run cards"
          text="The fullscreen sequence spawns these milestones as floating project cards inside the tunnel. Each one carries the next chapter of the build journey and adds XP when collected."
        />

        <div className="runner-stage">
          <div className="run-launch-panel relative mx-auto min-h-[280px] w-full max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">Launch Sequence</p>
            <h3 className="mt-2 font-display text-3xl uppercase tracking-[0.06em] text-white md:text-4xl">
              Fullscreen tunnel run through the builder timeline
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Countdown. character spawn. tunnel dive. collectible project cards. XP HUD. Run it from the hero or launch it again here.
            </p>
            <button type="button" onClick={startRun} className="action-btn mt-6">
              Start Run
            </button>
          </div>

          <div className="checkpoint-row">
            {runTimeline.map((step, index) => (
              <motion.button
                key={`${step.year}-${step.name}`}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={startRun}
                className={`checkpoint ${index % 2 === 0 ? 'checkpoint-cyan' : 'checkpoint-orange'} ${spaceRunActive ? 'checkpoint-active' : ''}`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{step.year}</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-white">{step.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-cyan-300">{step.tag}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.summary}</p>
              </motion.button>
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
              title="Let's build something that feels alive"
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
