// Lead capture for the Bengaluru pilot interest form.
// Posts straight to Supabase's REST endpoint — no SDK needed for one insert.
// The anon key is a public, insert-only credential here (see the RLS policy in
// supabase/migrations/0001_pilot_interest.sql); it cannot read leads back.

// These defaults are intentionally committed. The anon key is a PUBLIC,
// insert-only credential — RLS lets it write to pilot_interest and gives it no
// read access, and it is served inside this site's JS bundle either way. Having
// defaults means lead capture works on any deploy with zero env configuration;
// set VITE_SUPABASE_* to point a given environment at a different project.
const DEFAULT_SUPABASE_URL = 'https://cfwupjuzzcrmqjvzlbev.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3VwanV6emNybXFqdnpsYmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MDY1OTIsImV4cCI6MjA5ODM4MjU5Mn0.WjDSBLO9iu-2UMJpBt3GPuhPEZaIrt55AZ_qI-vR4mU';

/**
 * A Supabase anon key is a JWT: header.payload.signature. A truncated paste
 * (e.g. just the header, or one ending in "...") is a real hazard — it would
 * override the working default and silently break lead capture on deploy. So an
 * env value that isn't a well-formed JWT is ignored in favour of the default.
 */
function usableAnonKey(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (value.split('.').length === 3 && value.length > 100) return value;
  console.warn('[leads] VITE_SUPABASE_ANON_KEY is not a complete JWT — ignoring it and using the built-in key.');
  return undefined;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_ANON_KEY = usableAnonKey(import.meta.env.VITE_SUPABASE_ANON_KEY) ?? DEFAULT_SUPABASE_ANON_KEY;

export const leadsConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export interface LeadInput {
  full_name: string;
  phone: string;
  email?: string;
  service_type?: string;
  locality?: string;
  /** Willingness to pay — the signal a free interest form otherwise misses. */
  price_point?: string;
  message?: string;
  consent: boolean;
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
// Google Ads auto-tagging appends ?gclid=... and Meta appends ?fbclid=... — these
// are NOT utm params, so without capturing them separately an auto-tagged
// campaign produces leads with no attribution at all.
const CLICK_ID_KEYS = ['gclid', 'fbclid'] as const;
const STORAGE_KEY = 'cleanpay_attribution';

type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> &
  Partial<Record<(typeof CLICK_ID_KEYS)[number], string>> & {
    referrer?: string;
    landing_path?: string;
  };

/**
 * Records where this visitor came from, once per session. Called on app mount so
 * that someone who arrives from an ad but submits the form minutes later is
 * still credited to that campaign. The first touch wins — a later internal
 * navigation without UTMs won't overwrite it.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    let hasAttribution = false;
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) {
        found[key] = value.slice(0, 160);
        hasAttribution = true;
      }
    }
    for (const key of CLICK_ID_KEYS) {
      const value = params.get(key);
      if (value) {
        found[key] = value.slice(0, 200);
        hasAttribution = true;
      }
    }
    if (!hasAttribution && sessionStorage.getItem(STORAGE_KEY)) return;
    if (document.referrer) found.referrer = document.referrer.slice(0, 500);
    found.landing_path = (window.location.pathname + window.location.search).slice(0, 300);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // sessionStorage can throw in private mode — attribution is best-effort.
  }
}

function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}') as Attribution;
  } catch {
    return {};
  }
}

export async function submitLead(input: LeadInput): Promise<void> {
  if (!leadsConfigured) {
    throw new Error('Lead capture is not configured yet. Please email us instead.');
  }
  const response = await fetch(`${SUPABASE_URL}/rest/v1/pilot_interest`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ ...input, ...readAttribution() }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Could not save your details (${response.status}). ${detail.slice(0, 160)}`.trim());
  }
}
