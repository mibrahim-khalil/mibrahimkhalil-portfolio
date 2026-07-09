import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonial" className="section-padding bg-white dark:bg-white/[0.03]">
      <div className="container-custom">
        <h2 className="section-title">
          Client <span className="gradient-text">Feedback</span>
        </h2>

        <p className="section-subtitle">
          What people say about my work and development skills.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-3xl p-7"
            >
              <Quote className="text-sky-500 mb-5" size={34} />

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                “{item.message}”
              </p>

              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}