import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="section-label">{label}</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className="flex justify-center mt-6">
        <div className="w-12 h-0.5 bg-brand-orange rounded-full" />
      </div>
    </motion.div>
  )
}
