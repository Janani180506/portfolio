import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const interests = [
  { emoji: '🤖', title: 'Artificial Intelligence', desc: 'Building systems that think and reason' },
  { emoji: '🧠', title: 'Machine Learning', desc: 'Teaching machines through data' },
  { emoji: '👁️', title: 'Computer Vision', desc: 'Making computers understand images' },
  { emoji: '📊', title: 'Data Science', desc: 'Finding insights hidden in data' },
  { emoji: '⚙️', title: 'Intelligent Systems', desc: 'Engineering systems that adapt' },
  { emoji: '🚀', title: 'Emerging Technologies', desc: 'Exploring what\'s next' },
]

export default function Interests() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Passions" title="Interests" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, borderColor: 'rgba(255,92,26,0.4)' }}
              className="card-glass p-6 rounded-2xl text-center cursor-default transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-4 inline-block"
              >
                {item.emoji}
              </motion.div>
              <h3 className="font-display font-semibold text-white text-sm mb-2 group-hover:text-brand-orange transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
