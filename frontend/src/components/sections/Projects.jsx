import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-white/[0.03]">
      <div className="container-custom">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="section-subtitle">
          Some of my recent projects using frontend and MERN full stack technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="inline-block text-sm text-sky-500 font-semibold mb-3">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 font-semibold hover:text-sky-500"
                  >
                    <Github size={18} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 font-semibold hover:text-sky-500"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}