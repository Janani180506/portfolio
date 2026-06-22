import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi2'
import SectionHeader from '../components/SectionHeader'

const highlights = [
  'Web Development',
  'UI Design',
  'Frontend Technologies',
  'Project Development',
  'Team Collaboration',
  'Problem Solving',
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Work Experience" title="Experience" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-glass p-8 rounded-2xl hover:border-brand-orange/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono px-3 py-1 rounded-full mb-3">
                  <HiBriefcase size={12} />
                  Internship · 3 Months
                </div>
                <h3 className="font-display text-2xl font-700 text-white">Web Developer Intern</h3>
                <p className="text-gray-400 mt-1 text-lg">CubeAI Solutions</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 text-2xl font-display font-700">
                C
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Worked as a Web Developer and contributed to website development projects.
              Gained hands-on experience in frontend and backend development while building
              user-friendly web applications that solved real client needs.
            </p>

            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span key={h} className="tag">{h}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
