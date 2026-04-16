import { CalendarDays, Weight, SprayCanIcon, Recycle } from 'lucide-react';

const services = [
  {
    icon: CalendarDays,
    title: 'Daily Pickup',
    description: 'Scheduled daily waste collection from your doorstep. Never worry about garbage piling up again.',
    features: ['Fixed time slots', 'Trained collectors', 'Real-time tracking'],
  },
  {
    icon: Weight,
    title: 'Heavy Waste Pickup',
    description: 'Furniture, appliances, construction debris — we handle the big stuff with specialized vehicles.',
    features: ['On-demand booking', 'Special equipment', 'Competitive pricing'],
  },
  {
    icon: SprayCanIcon,
    title: 'Sanitization',
    description: 'Professional cleaning and disinfection of your waste area after every pickup.',
    features: ['Eco-friendly solutions', 'Post-pickup cleaning', 'Odor control'],
  },
  {
    icon: Recycle,
    title: 'Recycling',
    description: 'We ensure every recyclable reaches verified recycling vendors. Earn money for what you discard.',
    features: ['Verified vendors', 'Fair pricing', 'Wallet credits'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Comprehensive waste management solutions tailored for homes, offices, and communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
