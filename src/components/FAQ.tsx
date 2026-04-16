import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I schedule a pickup?',
    a: 'Simply download the CleanPay app or visit our website, select your preferred date and time slot, and confirm your booking. Our team will arrive at your doorstep at the scheduled time.',
  },
  {
    q: 'How do I earn money from recyclables?',
    a: 'When our collector picks up your recyclables (plastic, paper, metal, e-waste), they weigh it on the spot. The value is instantly credited to your CleanPay wallet, which you can withdraw to your bank account anytime.',
  },
  {
    q: 'What areas do you currently serve?',
    a: 'We are currently operational in Bengaluru, Hyderabad, Pune, and Mumbai, with plans to expand to 10 more cities this year. Enter your pincode in the app to check availability.',
  },
  {
    q: 'Is there a minimum quantity for pickup?',
    a: 'No minimum quantity for daily pickups. For heavy waste and bulk pickups, a minimum of 50 kg is required. Our team can guide you during booking.',
  },
  {
    q: 'How does CleanPay ensure responsible recycling?',
    a: 'We maintain a verified network of recycling partners. Each vendor is audited quarterly for environmental compliance. We provide full traceability of your waste from collection to recycling.',
  },
  {
    q: 'Can communities or businesses get custom plans?',
    a: 'Absolutely! We offer tailored solutions for gated communities, corporate offices, and industrial units with dedicated account managers, custom pricing, and analytics dashboards.',
  },
  {
    q: 'What payment methods are supported?',
    a: 'We accept UPI, debit/credit cards, net banking, and wallet payments. For businesses, we also support monthly invoicing and bank transfers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to know about CleanPay.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-xl transition-colors ${
                  isOpen ? 'border-green-300 bg-green-50/50' : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-green-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
