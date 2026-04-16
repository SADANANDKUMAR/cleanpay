import { CalendarCheck, Truck, SprayCanIcon, Wallet } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book a Pickup',
    description: 'Schedule a waste pickup at your convenience through the app or website.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Truck,
    title: 'We Collect',
    description: 'Our trained team arrives on time to collect your segregated waste.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: SprayCanIcon,
    title: 'Area Sanitized',
    description: 'Your pickup area is cleaned and sanitized after every collection.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Wallet,
    title: 'Earn Rewards',
    description: 'Recyclables are weighed and the value is credited to your wallet.',
    color: 'bg-lime-400/20 text-lime-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Four simple steps from waste to reward. It's that easy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-green-200" />
              )}
              <div className="bg-white border border-green-100 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
