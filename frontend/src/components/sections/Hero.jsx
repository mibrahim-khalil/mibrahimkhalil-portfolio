import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-20 flex items-center bg-gradient-to-br from-white via-sky-50 to-orange-50 dark:from-[#070b14] dark:via-[#0f172a] dark:to-[#111827]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-10 w-72 h-72 bg-sky-300/30 dark:bg-sky-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/30 dark:bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-white/10 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium">Available for new opportunities</span>
              </div>

              {/* New Layout as requested */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-800 dark:text-white">
                Hey, there
              </h1>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-700 dark:text-slate-300 mt-2">
                I'M
              </h2>

              <h2 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter gradient-text mt-1">
                MUHAMMAD IBRAHIM
              </h2>

              <h2 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter gradient-text">
                KHALIL
              </h2>

              <p className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-400">
                Software Engineering Student &amp; MERN Full Stack Web Developer.
                I build modern, responsive, and scalable web applications.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full font-semibold hover:scale-105 transition"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 border border-slate-300 dark:border-white/20 rounded-full font-semibold hover:bg-white dark:hover:bg-white/10 transition"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <a href="https://github.com/mibrahim-khalil" target="_blank" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-sky-500 transition">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/" target="_blank" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-sky-500 transition">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:your-email@gmail.com" className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-sky-500 transition">
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="rounded-[3rem] overflow-hidden bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Muhammad Ibrahim Khalil"
                    className="w-full h-[520px] object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 transition"
        >
          Scroll Down <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}