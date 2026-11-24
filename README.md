# Yudhveer Singh Panwar — Portfolio

Personal portfolio and services website built with Next.js 14, React, Tailwind CSS and custom CSS. The `/services` page contains the service catalogue, monthly plans, illustrative growth calculator, sample dashboard, FAQ and business enquiry form.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and `http://localhost:3000/services`.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your deployed URL. The site uses the existing Formspree form ID by default; set `NEXT_PUBLIC_FORMSPREE_FORM_ID` if you change forms. Verify Formspree delivery and notification settings in your account before publishing. Optional `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_WHATSAPP_URL` add direct contact links when supplied. Do not put private keys in `NEXT_PUBLIC_` variables.

Service descriptions, plan prices, pricing notes, industries, process steps and FAQs live in `app/services/data.js`. Update this file to change the public offer. Plan prices are reused by the homepage preview and services page.

The growth calculator and dashboard show illustrative or fictional data and do not represent client results. Advertising spend, third-party costs and custom setup charges are separate from plan prices.

## Build

```bash
npm run build
```
