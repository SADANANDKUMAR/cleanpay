import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Can I book a pickup right now?',
    a: 'Not yet. CleanPay is not an operating service — there is no app to download and no pickups are running. What you can do today is register your interest, which tells us whether to start in your area.',
  },
  {
    q: 'What areas do you serve?',
    a: 'None yet. We are assessing demand in Bengaluru only, and the pilot would begin in whichever localities show the most interest. We are not operating in any other city.',
  },
  {
    q: 'When would the pilot actually start?',
    a: 'We have not set a date, and we will not until enough households in a locality register. If we cannot gather enough interest, we will not launch — and we will say so rather than go quiet.',
  },
  {
    q: 'How would earning from recyclables work?',
    a: 'The intended model: a collector weighs your recyclables at pickup and credits the value to your CleanPay wallet, which you could withdraw to your bank. Rates would follow scrap market prices at the time.',
  },
  {
    q: 'Does registering cost anything or commit me?',
    a: 'No. It is free, there is nothing to pay, and you are not signing up for a service. If the pilot reaches your area we will contact you — you can decide then.',
  },
  {
    q: 'What happens to the details I submit?',
    a: 'We use your name, phone, email and locality only to contact you about this pilot and to understand demand by area. We do not sell or share them with third parties.',
  },
  {
    q: 'Can communities or businesses register too?',
    a: 'Yes. Pick "Business / Community Plan" in the form. Societies and offices are exactly the kind of concentrated demand that makes a pilot area viable, so it genuinely helps us prioritise.',
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
