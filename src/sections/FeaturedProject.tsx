import { motion } from 'framer-motion'
import { HiArrowRight, HiGlobeAlt } from 'react-icons/hi2'
import SectionHeader from '../components/SectionHeader'

export default function FeaturedProject() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Featured Work" title="Spotlight Project" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-brand-border group"
          style={{
            background: 'linear-gradient(135deg, #141416 0%, #1a0e0a 100%)',
          }}
        >
          {/* Big background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[80px]" />

          <div className="relative grid lg:grid-cols-2 gap-0 min-h-[420px]">
            {/* Left */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono px-3 py-1.5 rounded-full mb-6 w-fit">
                <HiGlobeAlt size={12} />
                Web Platform · React.js
              </div>

              <h3 className="font-display text-4xl md:text-5xl font-700 text-white mb-4 leading-tight">
                Ventro
              </h3>
              <p className="text-gray-400 text-lg mb-3 font-display font-500">
                College Event Discovery Platform
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                A web platform that helps students discover events happening across various colleges
                and register for them seamlessly — all in one place.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Event Discovery', 'Registration', 'College Events', 'User-Friendly'].map((f) => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 text-brand-orange font-display font-600 text-sm hover:gap-4 transition-all duration-300 group/btn">
                View Project
                <HiArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right – mock UI */}
            <div className="relative p-8 flex items-center justify-center">
              <div className="w-full max-w-sm">
                {/* Browser mockup */}
                <div className="card-glass rounded-2xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <div className="flex-1 bg-brand-darker/60 rounded-md h-5 mx-2 flex items-center px-2">
                      <span className="font-mono text-xs text-gray-600">ventro.app</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4 mb-3">
                      <div className="font-display font-700 text-white text-sm mb-1">🎓 TechFest 2025</div>
                      <div className="text-xs text-gray-500">Kongu Engineering College</div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-brand-orange font-mono">Feb 12 — 14</span>
                        <button className="text-xs bg-brand-orange text-white px-3 py-1 rounded-full font-600">Register</button>
                      </div>
                    </div>
                    <div className="card-glass rounded-xl p-4 mb-3">
                      <div className="font-display font-700 text-white text-sm mb-1">🚀 Hackathon</div>
                      <div className="text-xs text-gray-500">PSG College of Technology</div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-500 font-mono">Mar 5</span>
                        <button className="text-xs border border-brand-border text-gray-400 px-3 py-1 rounded-full">View</button>
                      </div>
                    </div>
                    <div className="card-glass rounded-xl p-4">
                      <div className="font-display font-700 text-white text-sm mb-1">🎨 Design Sprint</div>
                      <div className="text-xs text-gray-500">Coimbatore Institute</div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-500 font-mono">Apr 20</span>
                        <button className="text-xs border border-brand-border text-gray-400 px-3 py-1 rounded-full">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
