import { Leaf, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CleanPay</span>
            </a>
            <p className="text-sm leading-relaxed">
              Turn garbage into value. A proposed doorstep waste collection and
              recycling service — currently testing demand for a Bengaluru pilot.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Daily Pickup', 'Heavy Waste', 'Sanitization', 'Recycling', 'Business Plans'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-green-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partner With Us'].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-green-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Policy'].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-green-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 CleanPay. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
}
