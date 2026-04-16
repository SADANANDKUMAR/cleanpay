import { Building2, Users, BarChart3, CheckCircle } from 'lucide-react';

export default function Business() {
  return (
    <section className="py-20 sm:py-28 bg-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-700/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-700/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-3">Enterprise Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-bold">For Businesses & Communities</h2>
          <p className="mt-4 text-green-200 text-lg">
            Scalable waste management for offices, gated communities, campuses, and industrial zones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: 'Corporate Offices',
              desc: 'Managed waste disposal with segregation support, monthly reports, and compliance documentation.',
              perks: ['Dedicated account manager', 'Monthly analytics', 'Green certificate'],
            },
            {
              icon: Users,
              title: 'Gated Communities',
              desc: 'End-to-end waste management for residential societies with shared dashboards and bulk pricing.',
              perks: ['Community dashboard', 'Bulk discounts', 'Society-wide tracking'],
            },
            {
              icon: BarChart3,
              title: 'Industrial & Events',
              desc: 'Heavy-duty waste management for construction sites, events, and manufacturing units.',
              perks: ['Custom scheduling', 'Hazardous waste handling', 'Compliance reports'],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-green-400/20 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-green-200 text-sm leading-relaxed mb-5">{item.desc}</p>
              <ul className="space-y-2">
                {item.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-green-100">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {p}
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
