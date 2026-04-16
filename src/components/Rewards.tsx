import { Coins, Zap, Gift, TrendingUp } from 'lucide-react';

const recyclables = [
  { emoji: '🧴', name: 'Plastic', rate: '₹12/kg', color: 'bg-blue-50 border-blue-200' },
  { emoji: '🔩', name: 'Iron/Metal', rate: '₹28/kg', color: 'bg-gray-50 border-gray-200' },
  { emoji: '📱', name: 'E-Waste', rate: '₹50/kg', color: 'bg-purple-50 border-purple-200' },
  { emoji: '📦', name: 'Cardboard', rate: '₹8/kg', color: 'bg-amber-50 border-amber-200' },
  { emoji: '📰', name: 'Paper', rate: '₹10/kg', color: 'bg-yellow-50 border-yellow-200' },
  { emoji: '🍾', name: 'Glass', rate: '₹5/kg', color: 'bg-green-50 border-green-200' },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 sm:py-28 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Earn While You Clean</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Rewards System</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Your trash has value. Earn real money or loyalty points for every recyclable item you hand over.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Coins,
              title: 'Cash Rewards',
              desc: 'Get paid directly to your wallet for recyclables. Withdraw anytime to your bank account.',
              color: 'bg-green-100 text-green-600',
            },
            {
              icon: Zap,
              title: 'Bonus Points',
              desc: 'Earn extra points for consistent recycling, referrals, and proper waste segregation.',
              color: 'bg-emerald-100 text-emerald-600',
            },
            {
              icon: Gift,
              title: 'Redeem Perks',
              desc: 'Use points for free pickups, store vouchers, or donate to environmental causes.',
              color: 'bg-teal-50 text-teal-600',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow text-center"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-green-100 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">Current Recyclable Rates</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {recyclables.map((item) => (
              <div
                key={item.name}
                className={`${item.color} border rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-default`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-semibold text-gray-900 mt-2 text-sm">{item.name}</p>
                <p className="text-green-700 font-bold text-sm mt-1">{item.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
