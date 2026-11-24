'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

export default function EnquiryForm() {
  const [status, setStatus] = useState('idle');
  const [interest, setInterest] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get('interest') || params.get('service') || params.get('solution') || params.get('consultation') || params.get('product');
    if (value) setInterest(value.slice(0, 160));
  }, []);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, consent: data.consent === 'yes' }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || 'Delivery could not be confirmed.');
      form.reset();
      setInterest('');
      setStatus('success');
    } catch (error) {
      setStatus(error.message || 'Delivery could not be confirmed.');
    }
  }

  return <form className="service-form" onSubmit={submit} onChange={() => { if (status !== 'idle' && status !== 'sending') setStatus('idle'); }}>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
    <div className="form-pair"><label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label><label><span>Business name <small className="form-optional">(optional)</small></span><input name="business" autoComplete="organization" maxLength={120} /></label></div>
    <div className="form-pair"><label>Email address<input type="email" name="email" autoComplete="email" required maxLength={160} /></label><label>Phone or WhatsApp<input type="tel" name="phone" autoComplete="tel" required minLength={7} maxLength={24} /></label></div>
    <div className="form-pair"><label><span>Industry <small className="form-optional">(optional)</small></span><input name="industry" maxLength={100} placeholder="e.g. Education" /></label><label>Service, product or topic<input name="interest" value={interest} onChange={event => setInterest(event.target.value)} required minLength={2} maxLength={160} placeholder="What can I help with?" /></label></div>
    <div className="form-pair"><label><span>Estimated budget <small className="form-optional">(optional)</small></span><select name="budget" defaultValue=""><option value="">Select a range</option>{['Below ₹5,000', '₹5,000–10,000', '₹10,000–25,000', '₹25,000–50,000', '₹50,000+', 'Need a consultation'].map(option => <option key={option}>{option}</option>)}</select></label><label>Preferred contact<select name="preferred_contact" required defaultValue=""><option value="">Select a method</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label></div>
    <label><span>Preferred timeline <small className="form-optional">(optional)</small></span><select name="timeline" defaultValue=""><option value="">Choose a timeframe</option><option>As soon as practical</option><option>Within a month</option><option>In 1–3 months</option><option>Still exploring</option></select></label>
    <label>Requirements<textarea name="requirements" required minLength={10} maxLength={4000} rows={5} placeholder="Tell me what you need and what you already have in place." /></label>
    <p className="service-fineprint">Please avoid sharing confidential employer, client or personal records here. Your enquiry is sent through Formspree so I can respond to it.</p>
    <label className="consent-line"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted about this enquiry using the details above.</span></label>
    <div className="form-actions"><button className="button" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowUpRight /></button><span>Or email <a href="mailto:yudhveerp10@gmail.com">yudhveerp10@gmail.com</a></span>{bookingUrl && <a href={bookingUrl} target="_blank" rel="noreferrer">Booking availability</a>}{whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>}</div>
    {status === 'success' && <p className="form-success" role="status">Your enquiry was received. I’ll reply using your preferred contact method.</p>}
    {status !== 'idle' && status !== 'sending' && status !== 'success' && <p className="form-error" role="alert">{status} Please try again or email me directly.</p>}
  </form>;
}
