import { Leaf, CheckCircle2, ShieldCheck, Boxes } from 'lucide-react';

const commitments = [
  {
    icon: Boxes,
    title: 'Smart Waste Segregation',
    desc: 'We plan to make separation at source easy — dry, wet and hazardous kept apart, with guidance at pickup.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Recycling Partners',
    desc: 'Before we collect anything, every recycler we work with will be checked for environmental compliance.',
  },
  {
    icon: CheckCircle2,
    title: 'Traceable, Not Just Claimed',
    desc: 'We want to show where your waste actually ends up, rather than asking you to take our word for it.',
  },
];

// The pilot has not run, so there is nothing to report yet. This panel states
// what we intend to measure and publish instead of showing invented totals.
const willMeasure = [
  'Kilograms collected, by waste type',
  'Share that actually reaches a recycler',
  'Value returned to each household',
  'Pickups completed on schedule',
];

export default function Sustainability() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sustainability at the Core
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The whole point of the pilot is to prove waste can be collected responsibly and still pay
              its way. These are the standards we intend to hold ourselves to from day one.
            </p>
            <div className="space-y-5">
              {commitments.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white">
              <Leaf className="w-16 h-16 mb-6 text-white/30" />
              <h3 className="text-2xl font-bold mb-2">What We'll Measure</h3>
              <p className="text-green-100 text-sm mb-6">
                No results yet — the pilot hasn't started. When it does, these are the numbers we'll report.
              </p>
              <ul className="space-y-3">
                {willMeasure.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                    <span className="text-green-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -z-10 inset-4 bg-green-200/50 rounded-3xl rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
