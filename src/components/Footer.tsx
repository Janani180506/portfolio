import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-brand-border pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-700 text-white mb-3">
              Janani<span className="text-brand-orange"> K</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI & Data Science student building intelligent systems that make a difference.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-sm text-gray-500 hover:text-brand-orange transition-colors font-sans"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-4">Connect</div>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, href: '#', label: 'GitHub' },
                { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { Icon: FaTwitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-border text-gray-500 hover:text-brand-orange hover:border-brand-orange transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Janani K. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-700">
            Built with React · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
