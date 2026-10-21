import { Search, MapPin, Handshake, ClipboardList } from 'lucide-react';

const reasons = [
  {
    icon: Search,
    title: "We haven't launched yet",
    text: "CleanPay is an idea being tested, not a running service. No pickups have happened, and we'd rather tell you that than invent a track record.",
  },
  {
    icon: MapPin,
    title: 'Demand decides the first area',
    text: "We can only start in one or two localities. Whichever areas register the most interest are where the pilot begins.",
  },
  {
    icon: ClipboardList,
    title: 'Your answers shape the service',
    text: "Pickup frequency, timing and pricing are all still open. What you tell us here is what we design around.",
  },
  {
    icon: Handshake,
    title: 'No obligation, no payment',
    text: "Registering costs nothing and commits you to nothing. We'll contact you only if and when the pilot reaches your area.",
  },
];

export default function WhyPilot() {
  return (
    <section className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Where We Are</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why We're Running a Pilot</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Being straight with you about what exists today — and what doesn't.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
