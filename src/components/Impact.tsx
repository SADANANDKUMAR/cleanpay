import { TreePine, Wind, Droplets, Sun } from 'lucide-react';

// Deliberately goals, not achievements: nothing has been collected yet, so there
// are no impact numbers to report. Stating targets is honest; inventing
// totals would not be.
const goals = [
  {
    icon: Sun,
    title: 'Keep recyclables out of landfill',
    desc: 'Dry waste that still has value should reach a recycler, not a dump site.',
    color: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Droplets,
    title: 'Return the value to households',
    desc: 'If your waste is worth something, that money should come back to you — not disappear down the chain.',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    icon: Wind,
    title: 'Make segregation effortless',
    desc: 'Separation at source only works if it takes no extra effort. That is a design problem we want to solve.',
    color: 'text-emerald-600 bg-emerald-100',
  },
  {
    icon: TreePine,
    title: 'Prove it with real numbers',
    desc: 'Once the pilot runs, we will publish what we actually collect and recycle — measured, not estimated.',
    color: 'text-green-600 bg-green-100',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Goals</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We're Trying to Prove</h2>
          <p className="mt-4 text-gray-600 text-lg">
            The pilot hasn't run yet, so we have no results to show. Here's what we intend to achieve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-green-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${goal.color} rounded-2xl flex items-center justify-center mb-4`}>
                <goal.icon className="w-7 h-7" />
              </div>
              <p className="font-bold text-gray-900">{goal.title}</p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{goal.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 sm:p-14 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Help Us Get It Off the Ground</h3>
          <p className="text-green-100 text-lg max-w-xl mx-auto mb-8">
            A pilot only happens where enough households want it. Registering your interest is what tells us
            where to start — and what the service needs to look like.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['🏙️ Cleaner Streets', '♻️ Circular Economy', '💰 Value Back to You', '🌍 Less Landfill'].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
