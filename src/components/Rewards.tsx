import { Coins, Zap, Gift, TrendingUp, Info } from 'lucide-react';

// Indicative market reference points used to explain the model — NOT a price
// list, and not an offer. Nothing is being bought or sold yet, and real rates
// would depend on scrap prices at the time of the pilot.
const recyclables = [
  { emoji: '🧴', name: 'Plastic', rate: '~₹12/kg', color: 'bg-blue-50 border-blue-200' },
  { emoji: '🔩', name: 'Iron/Metal', rate: '~₹28/kg', color: 'bg-gray-50 border-gray-200' },
  { emoji: '📱', name: 'E-Waste', rate: '~₹50/kg', color: 'bg-purple-50 border-purple-200' },
  { emoji: '📦', name: 'Cardboard', rate: '~₹8/kg', color: 'bg-amber-50 border-amber-200' },
  { emoji: '📰', name: 'Paper', rate: '~₹10/kg', color: 'bg-yellow-50 border-yellow-200' },
  { emoji: '🍾', name: 'Glass', rate: '~₹5/kg', color: 'bg-green-50 border-green-200' },
];

const model = [
  {
    icon: Coins,
    title: 'Cash Back for Recyclables',
    desc: 'The plan: weigh your recyclables at pickup and credit the value to your wallet, withdrawable to your bank.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Zap,
    title: 'Rewards for Consistency',
    desc: 'We intend to reward regular, well-segregated handovers — segregation is what makes recycling actually work.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Gift,
    title: 'Points You Can Use',
    desc: 'Ideas we are testing: free pickups, local vouchers, or donating your balance to an environmental cause.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 sm:py-28 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">The Idea</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How Rewards Would Work</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Your recyclables already have resale value — it just rarely comes back to you. Here's the model
            we want to test.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {model.map((item) => (
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
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">Indicative Recyclable Rates</h3>
          </div>
          <div className="flex items-start gap-2 mb-6 text-sm text-gray-500">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Typical market reference points, shown to illustrate the model. These are not an offer and not a
              price list — actual rates would depend on scrap prices when the pilot runs.
            </p>
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
