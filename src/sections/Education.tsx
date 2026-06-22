import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'
import SectionHeader from '../components/SectionHeader'

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Academic Journey" title="Education" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pl-8 border-l-2 border-brand-border"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-brand-orange shadow-[0_0_16px_rgba(255,92,26,0.6)]" />

            <div className="card-glass p-8 rounded-2xl ml-6 hover:border-brand-orange/30 transition-all duration-300">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-brand-orange">2021 — 2028</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    B.Tech — Artificial Intelligence & Data Science
                  </h3>
                  <p className="text-gray-400 mt-1">Kongu Engineering College, Erode</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <HiAcademicCap size={28} />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tag">Third Year</span>
                <span className="tag">AI & Data Science</span>
                <span className="tag">Graduating 2028</span>
                <span className="inline-flex items-center gap-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono px-3 py-1 rounded-full">
                  ● Currently Enrolled
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { num: '3rd', label: 'Current Year' },
                  { num: '2028', label: 'Graduation' },
                  { num: 'AI&DS', label: 'Specialisation' },
                  { num: 'KEC', label: 'Institution' },
                ].map((s) => (
                  <div key={s.label} className="bg-brand-darker/60 rounded-xl p-3 text-center">
                    <div className="font-display font-bold text-white text-lg">{s.num}</div>
                    <div className="font-mono text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
