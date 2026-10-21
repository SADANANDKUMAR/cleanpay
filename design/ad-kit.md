# CleanPay — Bengaluru Pilot Ad Kit

Everything needed to run the demand-validation campaign.

> **Rule for every ad here:** the ad may not promise more than the landing page
> delivers. The page says the service is **not live** and we're **testing demand**.
> An ad implying you can book a pickup today would be a mismatched claim — the
> fastest route to a rejected ad or an ASCI complaint. All copy below is written
> in that honest frame, which also sets correct expectations and improves lead quality.

---

## 1. Do you need a banner?

| Channel | Creative needed? |
|---|---|
| **Google Search** | **No.** Text only — cheapest way to start. |
| **Meta (FB/IG) feed** | **Yes** — 1080×1080 (1:1) or 1080×1350 (4:5) |
| **Meta Stories/Reels** | **Yes** — 1080×1920 (9:16) |
| **Link shares (WhatsApp etc.)** | Already handled — `og-image.jpg` (1200×630) is live |

Keep on-image text short (a headline + the CTA). Meta no longer hard-caps text,
but image-heavy text still suppresses delivery.

**To make more sizes:** edit `design/og-template.html`, change the `body` width/height
to the size you want, open it in a browser and screenshot at that viewport.

---

## 2. Meta ad copy (4 variants to split-test)

Run all four at a small budget, kill the two worst after ~3 days.

### A — Convenience
**Primary text:** Chasing the garbage truck shouldn't be part of your morning. We're planning doorstep waste pickup in Bengaluru, on a schedule you pick. It isn't running yet — we're finding out which areas actually want it first.
**Headline:** Doorstep waste pickup for Bengaluru
**Description:** Register your interest — free, no obligation.

### B — Money back
**Primary text:** Your scrap already has value. It just rarely comes back to you. The plan: weigh your recyclables at pickup and credit the value straight to you. We're validating demand in Bengaluru before we launch anything.
**Headline:** Get paid for your recyclables
**Description:** Registering is free and commits you to nothing.

### C — Civic / have a say
**Primary text:** We can only start in one or two Bengaluru localities. Whichever areas register the most interest are where the pilot begins — so if you want it in yours, two minutes now genuinely decides it.
**Headline:** Help decide where we start
**Description:** Bengaluru pilot — register your locality.

### D — Societies & offices
**Primary text:** Apartment society or office in Bengaluru? Managed waste pickup with segregation support and proper recycler traceability is what we're scoping. Tell us what your community needs.
**Headline:** For societies & offices in Bengaluru
**Description:** Free to register. No commitment.

---

## 3. Google Search ads

**Headlines** (≤30 chars):
- `Bengaluru Waste Pickup Pilot`
- `Get Paid For Recyclables`
- `Doorstep Waste Collection`
- `Register Your Interest Free`
- `Help Pick The First Area`

**Descriptions** (≤90 chars):
- `Testing demand for doorstep waste pickup in Bengaluru. Register free, no obligation.`
- `Recyclables weighed at pickup, value credited to you. Register for the pilot.`

**Keywords to start** (phrase match):
`waste pickup bengaluru` · `garbage collection service bangalore` · `scrap pickup bangalore` ·
`e-waste pickup bangalore` · `doorstep recycling bangalore` · `kabadiwala near me bangalore`

**Negatives:** `jobs`, `vacancy`, `tender`, `free`, `salary`, `bbmp complaint`

---

## 4. UTM-tagged links — use these exact URLs

The site stores these, so every lead is traceable to the ad that paid for it.

```
# Meta
https://cleanpay.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=blr_pilot_oct&utm_content=a_convenience
https://cleanpay.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=blr_pilot_oct&utm_content=b_money
https://cleanpay.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=blr_pilot_oct&utm_content=c_civic
https://cleanpay.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=blr_pilot_oct&utm_content=d_society

# Google Search
https://cleanpay.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=blr_pilot_oct&utm_content=search

# Organic sharing (WhatsApp groups, RWA groups)
https://cleanpay.vercel.app/?utm_source=whatsapp&utm_medium=organic&utm_campaign=blr_pilot_oct
```

> If you use **Meta Lead Ads** (native form) instead of sending traffic here, UTMs
> won't apply — Meta stores the lead. That's cheaper per lead but splits your data
> across two places. Pick one as the source of truth.

---

## 5. Reading the results

Run in Supabase → SQL Editor.

**Leads per ad:**
```sql
select
  coalesce(utm_source,   '(direct)')   as source,
  coalesce(utm_campaign, '(none)')     as campaign,
  coalesce(utm_content,  '(none)')     as ad,
  count(*)                             as leads
from public.pilot_interest
group by 1, 2, 3
order by leads desc;
```

**Demand by locality — this decides where the pilot starts:**
```sql
select
  coalesce(nullif(trim(locality), ''), '(not given)') as locality,
  count(*)                                            as leads,
  count(*) filter (where service_type = 'Daily Pickup')              as daily,
  count(*) filter (where service_type = 'Business / Community Plan') as business
from public.pilot_interest
group by 1
order by leads desc;
```

**Daily pace (are you hitting target?):**
```sql
select date(created_at) as day, count(*) as leads
from public.pilot_interest
group by 1
order by day desc;
```

---

## 6. Before you spend: decide your go/no-go

Write the threshold down **now**, while you're unbiased:

- **Budget:** ₹500–1,000/day, 2 weeks
- **Geo:** 2–3 Bengaluru localities only (not all India — it wastes budget fast)
- **Success:** e.g. *300 registrations at under ₹60 each, with ≥80 from a single locality*
- **If a locality clears ~100 registrations** → that's your pilot area
- **If nothing clears the bar in 2 weeks** → the honest read is the demand isn't there
  at this price point. That is a successful experiment, not a failure.

Cost per lead is the number to watch. Everything above exists so you can measure it.
