import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Bengaluru',
    text: "CleanPay has completely changed how we handle waste at home. The daily pickups are always on time, and I love earning money for recyclables. My kids are learning about sustainability too!",
    rating: 5,
    avatar: '\u{1F469}',
  },
  {
    name: 'Rajesh Patel',
    role: 'Society President, Pune',
    text: "We switched our entire society of 200 flats to CleanPay. The community dashboard is excellent, and our common areas have never been cleaner. Highly recommended for gated communities.",
    rating: 5,
    avatar: '\u{1F468}',
  },
  {
    name: 'Ananya Rao',
    role: 'Cafe Owner, Hyderabad',
    text: "As a small business, waste disposal was a headache. CleanPay's business plan handles everything \u2014 daily pickup, segregation guidance, and even compliance reports. Worth every penny.",
    rating: 5,
    avatar: '\u{1F469}\u200D\u{1F373}',
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Environmental Consultant',
    text: "I have reviewed many waste management startups. CleanPay stands out for its verified recycling chain and transparent operations. They are genuinely making an environmental impact.",
    rating: 5,
    avatar: '\u{1F468}\u200D\u{1F4BC}',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Trusted by thousands of homes and businesses across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-green-200 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
