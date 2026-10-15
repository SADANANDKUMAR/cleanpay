type Gtag = (...args: unknown[]) => void;
declare global { interface Window { dataLayer?: unknown[]; gtag?: Gtag; } }
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;
export function initializeAnalytics() {
  if (initialized || !measurementId || typeof window === 'undefined') return;
  initialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}
export function trackEvent(eventName: string, parameters: Record<string, string | number | boolean> = {}) {
  if (initialized && window.gtag) window.gtag('event', eventName, parameters);
}
// Only call after a backend confirms that a lead was actually saved.
export function trackLead() { trackEvent('generate_lead', { method: 'website_form' }); }
