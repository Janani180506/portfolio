import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

interface Skill {
  name: string
  level: number
}

interface Category {
  label: string
  emoji: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    label: 'Programming Languages',
    emoji: '💻',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 72 },
      { name: 'C', level: 70 },
    ],
  },
  {
    label: 'Web Development',
    emoji: '🌐',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'React.js', level: 78 },
      { name: 'Node.js', level: 65 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    label: 'AI & Machine Learning',
    emoji: '🤖',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'OpenCV', level: 80 },
      { name: 'Scikit-learn', level: 70 },
    ],
  },
  {
    label: 'Databases',
    emoji: '🗄️',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'MongoDB', level: 65 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [inView, level, delay])

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-sans text-gray-300">{name}</span>
        <span className="font-mono text-xs text-brand-orange">{level}%</span>
      </div>
      <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          title="Skills"
          subtitle="Technologies and tools I work with daily."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="card-glass p-7 rounded-2xl hover:border-brand-orange/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-display font-600 text-white">{cat.label}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={ci * 0.1 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
