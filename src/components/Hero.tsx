import { ArrowRight, Recycle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              India's Smartest Waste Management Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Turn <span className="text-green-600">Garbage</span>
              <br />
              into <span className="text-emerald-600">Value</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Schedule pickups, earn rewards for recyclables, and help build
              cleaner, greener cities — all from one app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-xl shadow-green-600/25 hover:shadow-green-600/40"
              >
                Schedule Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-200 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                10K+ Pickups Done
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                500+ Happy Homes
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-[3rem] rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-[3rem] flex items-center justify-center">
                <Recycle className="w-32 h-32 text-white/90" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">💰</div>
                <div>
                  <p className="text-xs text-gray-500">Earned Today</p>
                  <p className="text-sm font-bold text-gray-900">₹245</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">🌱</div>
                <div>
                  <p className="text-xs text-gray-500">CO₂ Saved</p>
                  <p className="text-sm font-bold text-gray-900">12.5 kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
