import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../../app/providers'

const navLinks = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, setDarkMode } = useTheme()

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark/80 backdrop-blur-lg z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">mibrahimkhalil</h1>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-primary transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-sky-600 transition"
          >
            Hire Me
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-t">
          <div className="flex flex-col py-6 px-6 gap-6">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}