import { Leaf, CheckCircle2, ShieldCheck, Boxes } from 'lucide-react';

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
              Every piece of waste collected is responsibly processed. We ensure
              proper segregation and work exclusively with verified recycling
              vendors to minimize landfill contributions.
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: Boxes,
                  title: 'Smart Waste Segregation',
                  desc: 'We educate and enable proper segregation at source — dry, wet, and hazardous waste separated efficiently.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Verified Recycling Partners',
                  desc: 'Every recycling vendor in our network is audited and verified for compliance with environmental standards.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Zero-Landfill Mission',
                  desc: 'Our goal is to divert 100% of recyclable waste from landfills through technology-driven sorting and partnerships.',
                },
              ].map((item) => (
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
              <h3 className="text-2xl font-bold mb-4">Our Impact So Far</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '150+', label: 'Tons Recycled' },
                  { value: '25K+', label: 'Pickups Done' },
                  { value: '98%', label: 'Waste Diverted' },
                  { value: '50+', label: 'Verified Partners' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold">{stat.value}</p>
                    <p className="text-sm text-green-100 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 inset-4 bg-green-200/50 rounded-3xl rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
