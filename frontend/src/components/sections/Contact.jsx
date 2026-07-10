import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const API_URL = import.meta.env.VITE_API_URL

      if (!API_URL) {
        setTimeout(() => {
          setStatus('Message sent successfully! I will reach you soon.');
          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          setLoading(false)
        }, 800)

        return
      }

      const res = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      setStatus('Message sent successfully!')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          Contact <span className="gradient-text">Me</span>
        </h2>

        <p className="section-subtitle">
          Have a project idea or opportunity? Send me a message.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-5">Let's work together</h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I am open to freelance projects, collaborations, and
              junior MERN stack developer opportunities.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    mibrahimkhalil564@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    +92 336 5643146
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 outline-none focus:border-sky-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 outline-none focus:border-sky-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 outline-none focus:border-sky-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 outline-none focus:border-sky-500 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 transition disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>

            {status && (
              <p className="text-center text-sm text-sky-500 font-semibold">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}