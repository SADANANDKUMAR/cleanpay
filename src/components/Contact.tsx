import { useState } from 'react';
import { trackEvent } from '../analytics';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formStartTracked, setFormStartTracked] = useState(false);
  const handleFormFocus = () => {
    if (formStartTracked) return;
    setFormStartTracked(true);
    trackEvent('form_start', { form_name: 'contact_interest' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only: there is no backend, so this is not a successful lead.
    trackEvent('form_submit_attempt', { form_name: 'contact_interest' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We're exploring a Bengaluru pilot for household waste collection and recyclable pickup. Register your interest while we assess local demand.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-green-100 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Help shape the Bengaluru pilot</h3>
              <p className="text-sm leading-6 text-gray-600">Tell us which collection service would be most useful in your locality. We're validating demand before confirming availability, pricing or pickup schedules.</p>
            </div>
          </div>

          <form
            onFocusCapture={handleFormFocus}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-green-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Register Your Interest</h3><p className="text-sm text-gray-600 mb-6">This is a pilot-demand survey. Pickup service is not yet guaranteed. This demo form does not save or send your details.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Type</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all text-gray-600">
                <option>Daily Pickup</option>
                <option>Heavy Waste Pickup</option>
                <option>Sanitization</option>
                <option>Recycling</option>
                <option>Business / Community Plan</option>
                <option>Other Inquiry</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Demo Form Only
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Preview Form (Not Sent)
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
