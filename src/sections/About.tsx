import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'

const cards = [
  {
    icon: <FaBrain size={22} />,
    title: 'AI & ML Enthusiast',
    desc: 'Deeply passionate about machine learning, deep learning, and building intelligent systems.',
  },
  {
    icon: <FaCode size={22} />,
    title: 'Developer',
    desc: 'Hands-on experience with Python, React.js, and full-stack web development projects.',
  },
  {
    icon: <FaRocket size={22} />,
    title: 'Aspiring Engineer',
    desc: 'Goal-oriented third-year student focused on becoming an impactful AI Engineer.',
  },
  {
    icon: <FaLightbulb size={22} />,
    title: 'Problem Solver',
    desc: 'Love breaking down complex real-world problems and engineering elegant solutions.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Who I Am"
          title="About Me"
          subtitle="Third-year B.Tech student building at the intersection of AI, data, and software."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I am currently pursuing B.Tech in Artificial Intelligence and Data Science at
              <span className="text-white font-medium"> Kongu Engineering College</span>. I enjoy building AI-powered
              solutions and exploring emerging technologies in Machine Learning, Computer Vision,
              and Data Science.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My goal is to become an AI Engineer and contribute to innovative technological
              advancements. I believe in learning by doing — every project is an opportunity to
              push boundaries and create meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Degree', value: 'B.Tech AI & DS' },
                { label: 'Year', value: 'Third Year' },
                { label: 'Graduation', value: '2028' },
                { label: 'Internship', value: 'CubeAI Solutions' },
              ].map((item) => (
                <div key={item.label} className="card-glass p-4 rounded-xl">
                  <div className="font-mono text-xs text-brand-orange mb-1">{item.label}</div>
                  <div className="font-display text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(255,92,26,0.4)' }}
                className="card-glass p-6 rounded-2xl cursor-default transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
