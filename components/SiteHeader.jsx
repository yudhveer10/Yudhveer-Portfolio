'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'work', label: 'Projects', href: '/#work' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'solutions', label: 'Solutions', href: '/solutions' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];
const moreLinks = [
  { id: 'consultation', label: 'Consultations', href: '/consultation' },
  { id: 'store', label: 'Digital products', href: '/store' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'blog', label: 'Guides', href: '/blog' },
  { id: 'tools', label: 'Planning tools', href: '/tools' },
];

export default function SiteHeader({ active = 'home' }) {
  const [activeSection, setActiveSection] = useState(active);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (active !== 'home') return;
    const sections = ['home', 'work', 'capabilities', 'journey', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [active]);

  return <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <Link className="brand" href="/" aria-label="Yudhveer home" onClick={() => setOpen(false)}><span>YS</span><strong>Yudhveer Singh Panwar</strong></Link>
    <nav className={open ? 'nav-open' : ''} aria-label="Primary navigation">
      {links.map(link => <Link key={link.id} href={link.href} className={activeSection === link.id ? 'is-active' : undefined} aria-current={activeSection === link.id ? 'page' : undefined} onClick={() => setOpen(false)}>{activeSection === link.id && <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}{link.label}</Link>)}
      <details className="nav-more"><summary>More</summary><div className="nav-more-menu">{moreLinks.map(link => <Link key={link.id} href={link.href} aria-current={activeSection === link.id ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</div></details>
    </nav>
    <div className="header-actions"><ThemeToggle /><Link className="button button-small header-cta" href="/contact">Let&apos;s work together <ArrowUpRight /></Link></div>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
