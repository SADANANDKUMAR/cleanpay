import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Impact', href: '#impact' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">CleanPay</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
            >
              Schedule Pickup
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-green-100 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              className="block w-full text-center px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Schedule Pickup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
