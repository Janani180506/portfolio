import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    emoji: '🤚',
    category: 'Machine Learning & Computer Vision',
    title: 'Hand Gesture Communication System',
    description:
      'Real-time hand gesture recognition system that assists mute individuals by converting detected gestures into text and speech output.',
    stack: ['Python', 'OpenCV', 'TensorFlow'],
    features: ['Real-time detection', 'Text generation', 'Speech output', 'Accessibility'],
    accent: '#FF5C1A',
  },
  {
    emoji: '💪',
    category: 'Artificial Intelligence',
    title: 'Personal Health Coach',
    description:
      'AI-powered health companion providing personalized recommendations, diet planning, workout routines, and wellness tracking.',
    stack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    features: ['Health recommendations', 'Diet planning', 'Workout plans', 'Wellness tracking'],
    accent: '#FF8C42',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="What I've Built"
          title="Projects"
          subtitle="Real problems, real solutions — a selection of projects I've engineered."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="card-glass p-8 rounded-2xl group hover:border-brand-orange/30 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="font-mono text-xs text-brand-orange">{project.category}</span>
                  <div className="text-4xl mt-3">{project.emoji}</div>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-gray-500 hover:text-white hover:border-brand-orange transition-all">
                    <FaGithub size={14} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-gray-500 hover:text-white hover:border-brand-orange transition-all">
                    <HiArrowRight size={14} />
                  </button>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-1">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((f) => (
                  <span key={f} className="tag text-xs">{f}</span>
                ))}
              </div>

              {/* Stack */}
              <div className="flex items-center gap-2 pt-5 border-t border-brand-border">
                <span className="font-mono text-xs text-gray-600">Stack:</span>
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-2 py-0.5 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
