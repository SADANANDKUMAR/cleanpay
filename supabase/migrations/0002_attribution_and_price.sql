-- CleanPay — click-ID attribution + willingness-to-pay
--
-- gclid/fbclid: Google Ads auto-tagging appends ?gclid=... and Meta appends
-- ?fbclid=..., neither of which are UTM params. Without these columns, any lead
-- from an auto-tagged Google campaign arrives with blank attribution.
--
-- price_point: a free interest form only proves people like the idea. Asking
-- what they'd pay turns a soft signal into one you can build a business on.

alter table public.pilot_interest
  add column if not exists gclid       text,
  add column if not exists fbclid      text,
  add column if not exists price_point text;

alter table public.pilot_interest
  drop constraint if exists pilot_interest_gclid_check,
  drop constraint if exists pilot_interest_fbclid_check,
  drop constraint if exists pilot_interest_price_point_check;

alter table public.pilot_interest
  add constraint pilot_interest_gclid_check
    check (gclid is null or length(gclid) <= 200),
  add constraint pilot_interest_fbclid_check
    check (fbclid is null or length(fbclid) <= 200),
  add constraint pilot_interest_price_point_check
    check (price_point is null or length(price_point) <= 60);

create index if not exists pilot_interest_price_idx on public.pilot_interest (price_point);

-- PostgREST caches the table schema; without this, inserts naming the new
-- columns fail with "column not found in schema cache".
notify pgrst, 'reload schema';
