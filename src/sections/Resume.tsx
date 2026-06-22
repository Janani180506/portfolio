import { motion } from 'framer-motion'
import { HiArrowDownTray, HiDocumentText } from 'react-icons/hi2'
import SectionHeader from '../components/SectionHeader'

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Download" title="My Resume" />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-glass p-10 rounded-3xl text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-6">
              <HiDocumentText size={40} />
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-3">Janani K — Resume</h3>
            <p className="text-gray-500 mb-8">
              B.Tech AI & Data Science · Aspiring AI Engineer · Web Developer Intern
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: '3+', label: 'Projects' },
                { num: '10+', label: 'Technologies' },
                { num: '1', label: 'Internship' },
              ].map((s) => (
                <div key={s.label} className="bg-brand-darker/60 rounded-xl p-4">
                  <div className="font-display text-2xl font-bold gradient-text">{s.num}</div>
                  <div className="font-mono text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="btn-primary mx-auto text-base px-8 py-4 inline-flex"
            >
              <HiArrowDownTray size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
