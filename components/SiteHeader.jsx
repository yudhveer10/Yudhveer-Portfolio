'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['work', 'Work'],
  ['capabilities', 'Capabilities'],
  ['skills', 'Skills'],
  ['journey', 'Journey'],
  ['contact', 'Contact'],
];

export default function SiteHeader() {
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport.
  useEffect(() => {
    const sections = ['home', ...links.map(([id]) => id)].map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id === 'home' ? null : entry.target.id);
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <a className="brand" href="#home" aria-label="Yudhveer home"><span>YS</span><strong>Yudhveer Singh Panwar</strong></a>
      <nav aria-label="Primary navigation">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>
            {active === id ? <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} /> : null}
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="button button-small" href="#contact">Let&apos;s work together <ArrowUpRight /></a>
      </div>
    </header>
  );
}
