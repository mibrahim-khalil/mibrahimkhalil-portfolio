import { Globe, LayoutDashboard, Server, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: 'Frontend Development',
    desc: 'Modern and responsive interfaces using React.js, Tailwind CSS, and clean component architecture.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'REST APIs, authentication, database integration, and server-side business logic using Node.js and Express.',
  },
  {
    icon: LayoutDashboard,
    title: 'Full Stack Web Apps',
    desc: 'Complete MERN applications from frontend UI to backend API and MongoDB database.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Websites that look perfect on mobile, tablet, laptop, and desktop screens.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          My <span className="gradient-text">Services</span>
        </h2>

        <p className="section-subtitle">
          I can help you build professional web applications and portfolio websites.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition"
              >
                <Icon className="text-sky-500 mb-5" size={34} />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}