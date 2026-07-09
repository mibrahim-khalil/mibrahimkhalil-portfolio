import { motion } from 'framer-motion'
import { Code2, GraduationCap, Rocket } from 'lucide-react'

const cards = [
  {
    icon: GraduationCap,
    title: 'Software Engineering Student',
    desc: 'Currently learning software engineering principles, algorithms, databases, and real-world application development.',
  },
  {
    icon: Code2,
    title: 'MERN Developer',
    desc: 'I develop complete web applications using React, Node.js, Express.js, MongoDB, REST APIs, and modern UI tools.',
  },
  {
    icon: Rocket,
    title: 'Problem Solver',
    desc: 'I enjoy solving technical problems, building useful products, and improving my skills through practical projects.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="section-subtitle">
          A passionate developer focused on building clean, modern, and user-friendly web experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}