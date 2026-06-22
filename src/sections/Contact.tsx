import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEnvelope, HiPhone, HiArrowRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  const contactItems = [
    { icon: <HiEnvelope size={18} />, label: 'Email', value: 'janani.k@example.com' },
    { icon: <HiPhone size={18} />, label: 'Phone', value: '+91 XXXXX XXXXX' },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/janani-k' },
    { icon: <FaGithub size={18} />, label: 'GitHub', value: 'github.com/janani-k' },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Get In Touch"
          title="Contact"
          subtitle="Have a project in mind or just want to connect? Let's talk."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm open to internship opportunities, collaborative projects, and conversations
              about AI/ML. Whether you have a question or just want to say hello — drop a message!
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="card-glass p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600">{item.label}</div>
                    <div className="text-sm text-gray-300 font-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-glass p-8 rounded-2xl"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-display text-xl font-700 text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-brand-orange font-mono text-sm hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Janani K' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Collaboration' },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="font-mono text-xs text-gray-500 mb-2 block">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof FormState]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className={`w-full bg-brand-darker/60 border ${errors[f.key as keyof FormState] ? 'border-red-500/50' : 'border-brand-border'} text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                    {errors[f.key as keyof FormState] && (
                      <p className="font-mono text-xs text-red-400 mt-1">{errors[f.key as keyof FormState]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-gray-500 mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-brand-darker/60 border ${errors.message ? 'border-red-500/50' : 'border-brand-border'} text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-orange transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center py-4"
                >
                  Send Message
                  <HiArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
