import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          My <span className="gradient-text">Journey</span>
        </h2>

        <p className="section-subtitle">
          My learning and development journey as a software engineering student and MERN developer.
        </p>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/10" />

          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative mb-10 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'
              } pl-12 md:pl-0`}
            >
              <div className="absolute left-0 md:left-auto md:right-[-9px] top-2 w-5 h-5 bg-sky-500 rounded-full border-4 border-white dark:border-[#070b14]" />

              {index % 2 !== 0 && (
                <div className="hidden md:block absolute left-[-11px] top-2 w-5 h-5 bg-sky-500 rounded-full border-4 border-white dark:border-[#070b14]" />
              )}

              <div className="glass-card rounded-3xl p-6">
                <span className="text-sm text-sky-500 font-bold">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {item.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}