import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 3;

function clean(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function POST(request) {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > 20_000) return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });

  let body;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
    body = JSON.parse(raw);
  } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }); // Honeypot: silently discard spam.

  const fields = {
    name: clean(body.name, 100),
    business: clean(body.business, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 24),
    industry: clean(body.industry, 100),
    interest: clean(body.interest, 160),
    budget: clean(body.budget, 80),
    timeline: clean(body.timeline, 80),
    preferred_contact: clean(body.preferred_contact, 30),
    requirements: clean(body.requirements, 4000),
  };
  const valid = fields.name.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
    && /^[+\d()\s-]{7,24}$/.test(fields.phone) && fields.interest.length >= 2
    && fields.requirements.length >= 10 && body.consent === true;
  if (!valid) return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter(time => now - time < WINDOW_MS);
  if (recent.length >= MAX_ATTEMPTS) return NextResponse.json({ error: 'Please wait before sending another enquiry.' }, { status: 429 });
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 1000) {
    for (const [key, times] of attempts) {
      if (times.every(time => now - time >= WINDOW_MS)) attempts.delete(key);
    }
  }

  const formId = process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xgvnlrrn';
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.append(key, value);
  form.append('consent', 'yes');
  form.append('_subject', `Portfolio enquiry: ${fields.interest}`);

  try {
    const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: 'POST', body: form, headers: { Accept: 'application/json' }, cache: 'no-store',
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok !== true) throw new Error('Delivery was not confirmed');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Delivery could not be confirmed. Please email directly.' }, { status: 502 });
  }
}
