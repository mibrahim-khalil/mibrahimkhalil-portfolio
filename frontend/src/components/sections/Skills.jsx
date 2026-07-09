import { motion } from 'framer-motion'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-white/[0.03]">
      <div className="container-custom">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build full stack web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="px-6 py-3 rounded-full glass-card font-semibold hover:bg-sky-500 hover:text-white transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}