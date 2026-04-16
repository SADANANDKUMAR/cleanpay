import { TreePine, Wind, Droplets, Sun } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Making a Difference</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Environmental Impact</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Every pickup contributes to cleaner cities and a healthier planet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TreePine, value: '5,000+', label: 'Trees Saved', color: 'text-green-600 bg-green-100' },
            { icon: Wind, value: '80 Tons', label: 'CO₂ Reduced', color: 'text-emerald-600 bg-emerald-100' },
            { icon: Droplets, value: '2M Liters', label: 'Water Saved', color: 'text-blue-600 bg-blue-100' },
            { icon: Sun, value: '150 Tons', label: 'Waste Recycled', color: 'text-amber-600 bg-amber-100' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-green-100 transition-all duration-300">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 sm:p-14 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join the Green Revolution</h3>
          <p className="text-green-100 text-lg max-w-xl mx-auto mb-8">
            Every small action counts. Together we're building cleaner cities,
            reducing pollution, and creating a sustainable future for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['🏙️ Cleaner Cities', '🌬️ Reduced Pollution', '♻️ Circular Economy', '🌍 Lower Carbon Footprint'].map((tag) => (
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
