-- CleanPay — Bengaluru pilot interest captures (landing page form)
-- Applied to the shared Supabase project (ref cfwupjuzzcrmqjvzlbev).
--
-- Security model: the landing page is public and uses the ANON key, which is
-- readable by anyone. So this table is INSERT-ONLY for anon — there is
-- deliberately no anon SELECT policy, otherwise anybody could scrape every
-- lead's name, phone and email straight from the browser.

create table if not exists public.pilot_interest (
  id            uuid primary key default gen_random_uuid(),
  full_name     text not null check (length(full_name) between 1 and 120),
  phone         text not null check (length(phone) between 5 and 20),
  email         text check (email is null or length(email) <= 200),
  service_type  text check (service_type is null or length(service_type) <= 60),
  message       text check (message is null or length(message) <= 2000),
  locality      text check (locality is null or length(locality) <= 120),
  consent       boolean not null default false,

  -- ad attribution: lets you tie each lead back to the campaign that paid for it
  utm_source    text check (utm_source is null or length(utm_source) <= 120),
  utm_medium    text check (utm_medium is null or length(utm_medium) <= 120),
  utm_campaign  text check (utm_campaign is null or length(utm_campaign) <= 160),
  utm_content   text check (utm_content is null or length(utm_content) <= 160),
  utm_term      text check (utm_term is null or length(utm_term) <= 160),
  referrer      text check (referrer is null or length(referrer) <= 500),
  landing_path  text check (landing_path is null or length(landing_path) <= 300),

  created_at    timestamptz not null default now()
);

create index if not exists pilot_interest_created_idx on public.pilot_interest (created_at desc);
create index if not exists pilot_interest_campaign_idx on public.pilot_interest (utm_campaign);

alter table public.pilot_interest enable row level security;

-- Public form may only INSERT.
drop policy if exists "pilot_interest - public insert" on public.pilot_interest;
create policy "pilot_interest - public insert" on public.pilot_interest
  for insert to anon, authenticated with check (true);

-- Only admins (and the service role, which bypasses RLS) can read leads back.
drop policy if exists "pilot_interest - admin read" on public.pilot_interest;
create policy "pilot_interest - admin read" on public.pilot_interest
  for select using (public.is_admin());

-- Table privileges (this project's tables were created by raw SQL, so the API
-- roles need explicit grants — same gotcha as the EcoCollect tables).
grant usage on schema public to anon, authenticated, service_role;
grant insert on public.pilot_interest to anon, authenticated;
grant select, insert, update, delete on public.pilot_interest to service_role;

notify pgrst, 'reload schema';
