import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../app/providers';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold font-serif tracking-tight text-slate-900 dark:text-white">
            mibrahimkhalil
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - Theme + Hire Me + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full transition"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0f1c] border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col py-6 px-6 gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 py-3 bg-sky-500 text-white text-center font-semibold rounded-2xl"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}