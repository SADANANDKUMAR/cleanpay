import { useState } from 'react';
import { trackEvent, trackLead } from '../analytics';
import { submitLead } from '../lib/leads';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const SERVICE_TYPES = [
  'Daily Pickup',
  'Heavy Waste Pickup',
  'Sanitization',
  'Recycling',
  'Business / Community Plan',
  'Other Inquiry',
];

// Willingness to pay. Everyone says yes to a free idea — what someone will
// actually pay is the signal worth collecting before building anything.
const PRICE_POINTS = [
  'Not sure yet',
  'Up to ₹199/month',
  '₹200 – ₹399/month',
  '₹400 – ₹599/month',
  '₹600+/month',
  'Only if I earn from recyclables',
];

const EMPTY_FORM = {
  full_name: '',
  phone: '',
  email: '',
  service_type: SERVICE_TYPES[0],
  locality: '',
  price_point: PRICE_POINTS[0],
  message: '',
  consent: false,
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all';

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formStartTracked, setFormStartTracked] = useState(false);

  const handleFormFocus = () => {
    if (formStartTracked) return;
    setFormStartTracked(true);
    trackEvent('form_start', { form_name: 'contact_interest' });
  };

  const update = (field: keyof typeof EMPTY_FORM, value: string | boolean) =>
    setForm((previous) => ({ ...previous, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bots fill hidden fields; humans don't see this one
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');
    trackEvent('form_submit_attempt', { form_name: 'contact_interest' });

    try {
      await submitLead({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        service_type: form.service_type,
        locality: form.locality.trim() || undefined,
        price_point: form.price_point,
        message: form.message.trim() || undefined,
        consent: form.consent,
      });
      setStatus('success');
      trackLead(); // only fired once the lead is actually stored
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Join the Bengaluru Pilot</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We're exploring a Bengaluru pilot for household waste collection and recyclable pickup. Tell us you're
            interested and we'll come back to you when it launches in your area.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-green-100 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Help shape the Bengaluru pilot</h3>
              <p className="text-sm leading-6 text-gray-600">
                Tell us which collection service would be most useful in your locality. We're validating demand before
                confirming availability, pricing or pickup schedules — the areas with the most interest go first.
              </p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-green-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[420px]">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list</h3>
              <p className="text-gray-600 max-w-md">
                Thanks{form.full_name ? `, ${form.full_name.split(' ')[0]}` : ''} — your interest is registered. We'll
                contact you about the pilot in {form.locality.trim() || 'your area'} once we confirm coverage.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(EMPTY_FORM);
                  setStatus('idle');
                }}
                className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Register another response
              </button>
            </div>
          ) : (
            <form
              onFocusCapture={handleFormFocus}
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-white rounded-2xl p-8 border border-green-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register Your Interest</h3>
              <p className="text-sm text-gray-600 mb-6">
                This is a pilot-demand survey — pickup service is not live yet. We'll only use your details to contact
                you about the CleanPay Bengaluru pilot.
              </p>

              {/* honeypot: hidden from humans, catches basic bots */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    maxLength={120}
                    value={form.full_name}
                    onChange={(e) => update('full_name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1.5">Your Locality</label>
                  <input
                    id="locality"
                    name="locality"
                    type="text"
                    maxLength={120}
                    value={form.locality}
                    onChange={(e) => update('locality', e.target.value)}
                    placeholder="e.g. HSR Layout, Koramangala"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-1.5">Service Type</label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={form.service_type}
                    onChange={(e) => update('service_type', e.target.value)}
                    className={`${inputClass} text-gray-700`}
                  >
                    {SERVICE_TYPES.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="price_point" className="block text-sm font-medium text-gray-700 mb-1.5">
                    What would you pay?
                  </label>
                  <select
                    id="price_point"
                    name="price_point"
                    value={form.price_point}
                    onChange={(e) => update('price_point', e.target.value)}
                    className={`${inputClass} text-gray-700`}
                  >
                    {PRICE_POINTS.map((price) => (
                      <option key={price} value={price}>{price}</option>
                    ))}
                  </select>
                  <p className="mt-1.5 text-xs text-gray-500">
                    Rough guide for regular pickup — helps us price it honestly.
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to be contacted about the CleanPay Bengaluru pilot. We won't share your details with anyone else.
                </span>
              </label>

              {status === 'error' && (
                <div className="mb-5 flex items-start gap-2 rounded-xl bg-red-50 border border-red-100 p-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Registering…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Register Interest
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
