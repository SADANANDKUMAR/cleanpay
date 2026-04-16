import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Ready to turn your garbage into value? Reach out or schedule your first pickup.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: 'Address', text: '4th Floor, GreenTech Hub, HSR Layout, Bengaluru 560102' },
              { icon: Phone, title: 'Phone', text: '+91 80 4567 8900' },
              { icon: Mail, title: 'Email', text: 'hello@cleanpay.in' },
              { icon: Clock, title: 'Working Hours', text: 'Mon — Sat, 7:00 AM — 8:00 PM' },
            ].map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{info.text}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white mt-8">
              <h4 className="font-bold text-lg mb-2">Quick Pickup</h4>
              <p className="text-green-100 text-sm mb-4">
                Need a pickup today? Call our hotline or use the app for instant booking.
              </p>
              <a
                href="tel:+918045678900"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-700 font-semibold text-sm rounded-full hover:bg-green-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-green-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Pickup / Send a Message</h3>
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
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
