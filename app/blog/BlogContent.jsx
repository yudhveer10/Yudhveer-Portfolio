'use client';

import { useState } from 'react';
import Link from 'next/link';
import { articles } from '@/content/articles';
import { PageFrame, SectionHeading } from '@/components/PlatformPage';

const categories = ['All', ...new Set(articles.map(article => article.category))];

export default function BlogContent() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const search = query.trim().toLowerCase();
  const visible = articles.filter(article => (category === 'All' || article.category === category) && (!search || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(search)));
  return <PageFrame active="blog" eyebrow="Field notes / 06" title="Clearer thinking for digital work." intro="Original guides on planning, building and improving useful business systems. No client or employer confidential work is used here."><section className="platform-section"><SectionHeading eyebrow="Guides" title="Read by interest" /><div className="blog-controls"><label className="tool-field">Search guides<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by topic or title" /></label><div className="platform-chips" aria-label="Filter guides by category">{categories.map(item => <button key={item} type="button" className={category === item ? 'is-selected' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>{visible.length > 0 ? <div className="platform-grid">{visible.map(article => <Link className="platform-card" href={`/blog/${article.slug}`} key={article.slug}><span className="mono">{article.category} / {article.date}</span><h3>{article.title}</h3><p>{article.summary}</p><span className="platform-card-bottom">Read guide <b>↗</b></span></Link>)}</div> : <p className="platform-note">No guides match that search. Try a different topic.</p>}</section></PageFrame>;
}
