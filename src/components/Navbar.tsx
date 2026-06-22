import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { HiArrowDownTray } from 'react-icons/hi2'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  dark: boolean
  setDark: (v: boolean) => void
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      // Active section detection
      const sections = links.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-darker/90 backdrop-blur-xl border-b border-brand-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
            className="font-display font-700 text-xl text-white hover:text-brand-orange transition-colors"
          >
            Janani<span className="text-brand-orange"> K</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-sans font-500 rounded-full transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-brand-orange'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-gray-400 hover:text-white hover:border-brand-orange transition-all"
            >
              {dark ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>

            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-display font-600 px-4 py-2 rounded-full hover:bg-brand-amber transition-all hover:scale-105"
            >
              <HiArrowDownTray size={14} />
              Resume
            </a>

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX size={18} /> : <HiMenu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-brand-darker/95 backdrop-blur-xl border-b border-brand-border"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-sans font-500 transition-all ${
                    active === link.href.replace('#', '')
                      ? 'text-brand-orange bg-brand-orange/10'
                      : 'text-gray-400 hover:text-white hover:bg-brand-card'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-orange text-white text-sm font-display font-600 px-4 py-3 rounded-full"
              >
                <HiArrowDownTray size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
