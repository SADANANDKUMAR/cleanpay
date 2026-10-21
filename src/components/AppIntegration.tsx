import { Smartphone, UserCheck, Truck, ShieldCheck } from 'lucide-react';

const roles = [
  {
    icon: UserCheck,
    title: 'Customer App',
    color: 'bg-green-600',
    features: [
      'Schedule & track pickups in real-time',
      'View wallet balance & transactions',
      'Rate collectors & give feedback',
      'Refer friends & earn bonus points',
      'Download recycling reports',
    ],
  },
  {
    icon: Truck,
    title: 'Collector App',
    color: 'bg-emerald-600',
    features: [
      'Optimized route navigation',
      'Scan & weigh recyclables on-site',
      'Update pickup status live',
      'Earnings dashboard & payouts',
      'In-app training modules',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Admin Dashboard',
    color: 'bg-teal-600',
    features: [
      'Fleet & collector management',
      'Real-time analytics & heatmaps',
      'Customer support ticketing',
      'Revenue & expense tracking',
      'Vendor partner management',
    ],
  },
];

export default function AppIntegration() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Platform</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            One Platform, Three Experiences
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            How we plan to build it — one app each for households, collectors and operations.
            None of these are released yet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white rounded-2xl border border-green-100 overflow-hidden hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 group"
            >
              <div className={`${role.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{role.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Smartphone className="w-3 h-3 text-white/60" />
                    <span className="text-xs text-white/60">Planned — not yet released</span>
                  </div>
                </div>
              </div>
              <ul className="p-6 space-y-3">
                {role.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
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
