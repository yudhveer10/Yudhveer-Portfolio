# Yudhveer Singh Panwar — Portfolio

Personal portfolio and services website built with Next.js 14, React, Tailwind CSS and custom CSS. The `/services` page contains a service explorer, connected growth diagram, industry use cases, sample dashboard, FAQ and business enquiry form. The `/pricing` page contains an interactive scope finder, monthly starting prices and an illustrative growth calculator.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`, `http://localhost:3000/services` and `http://localhost:3000/pricing`.

The expansion adds service detail, business solution, digital product, consultation, resource, guide, planning-tool and contact pages. The homepage has no new expansion sections.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your deployed URL. The site uses the existing Formspree form ID by default; set `NEXT_PUBLIC_FORMSPREE_FORM_ID` if you change forms. Verify Formspree delivery and notification settings in your account before publishing. Optional `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_WHATSAPP_URL` add direct contact links when supplied. Do not put private keys in `NEXT_PUBLIC_` variables.

Service descriptions, plan prices, pricing notes, industries, process steps and FAQs live in `app/services/data.js`. Update this file to change the public offer.

Solution concepts, consultations, partner support, store categories and resources live in `content/platform.js`; original guides live in `content/articles.js`. Solution concepts are labelled as proposed configurations. `digitalProducts` is intentionally empty: add only original, finished products with a preview, licence, delivery and real checkout link. The resource library contains direct links to official sources; there are no affiliate links or paid placements. No checkout or direct booking is active without its actual URL. Direct booking links use `NEXT_PUBLIC_BOOKING_URL` or an item-specific booking URL. The contact form posts to `/api/enquiry`, which validates the request and forwards it to Formspree. Its in-memory rate limit is best effort on serverless hosting; use a shared rate-limit store if higher-volume protection is needed.

`docs/legal-drafts.md` contains unpublished legal copy for review. It is not a live privacy, terms or refund policy. Review and approve it before creating public legal routes or enabling payment. Keep client and employer confidential information out of public content, including demos and case studies.

Google Search Console verification can be enabled with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Google Analytics and Meta Pixel are intentionally not loaded; obtain real IDs, publish a reviewed privacy notice, and add a consent control before enabling either. Existing Vercel Analytics remains in the base site.

The growth calculator and dashboard show illustrative or fictional data and do not represent client results. Advertising spend, third-party costs and custom setup charges are separate from plan prices.

## Build

```bash
npm run build
```
