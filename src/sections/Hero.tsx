import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowDownTray } from 'react-icons/hi2'
import { HiMail } from 'react-icons/hi'
import profileImage from '../assets/profile.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#FF5C1A 1px, transparent 1px), linear-gradient(to right, #FF5C1A 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-brand-orange"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-brand-amber"
      />
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full border border-brand-orange/40"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-4">
              <span className="section-label">Hello, I'm</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-2"
            >
              Janani <span className="gradient-text">K</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="font-display text-xl md:text-2xl text-gray-400 font-normal mb-6"
            >
              AI & Data Science Student
              <span className="text-brand-orange"> | </span>
              Aspiring AI Engineer
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-gray-500 leading-relaxed max-w-lg mb-10 text-base"
            >
              Third-year B.Tech student at Kongu Engineering College, passionate about
              Artificial Intelligence, Machine Learning, and Computer Vision — building
              intelligent systems that solve real-world problems.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                View Projects
                <HiArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline"
              >
                <HiMail size={16} />
                Contact Me
              </button>
              <a
                href="/Janani_Resume.pdf"
                download="Janani_Resume.pdf"
                className="btn-outline"
              >
                <HiArrowDownTray size={16} />
                Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex gap-8 border-t border-brand-border pt-8"
            >
              {[
                { num: '3+', label: 'Projects Built' },
                { num: '2+', label: 'Years of Study' },
                { num: '3mo', label: 'Internship' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-white">{s.num}</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #FF5C1A, transparent, #FF8C42, transparent, #FF5C1A)',
                  padding: '2px',
                  borderRadius: '50%',
                  margin: '-12px',
                }}
              />

              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glow backdrop */}
                <div className="absolute inset-0 rounded-full bg-brand-orange/20 blur-3xl scale-110" />

                {/* Profile circle */}
                <div
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-brand-orange/40"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1c 0%, #FF5C1A22 100%)',
                    boxShadow: '0 0 60px rgba(255,92,26,0.3)',
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Janani K"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Decorative rings */}
                  <div className="absolute inset-4 rounded-full border border-brand-orange/10" />
                  <div className="absolute inset-8 rounded-full border border-brand-orange/5" />
                </div>

                {/* Floating badge cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -left-12 top-1/4 card-glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                >
                  <span className="text-lg">🤖</span>
                  <div>
                    <div className="text-xs font-mono text-brand-orange">AI / ML</div>
                    <div className="text-xs text-gray-400">TensorFlow</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -right-10 bottom-1/4 card-glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                >
                  <span className="text-lg">👁️</span>
                  <div>
                    <div className="text-xs font-mono text-brand-orange">Vision</div>
                    <div className="text-xs text-gray-400">OpenCV</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-gray-600">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-brand-orange to-transparent"
        />
      </motion.div>
    </section>
  )
}
