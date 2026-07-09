import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-white/10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h2 className="text-2xl font-serif font-bold">Muhammad Ibrahim Khalil</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            MERN Full Stack Web Developer
          </p>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} mibrahimkhalil. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mibrahim-khalil"
            target="_blank"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-sky-500"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-sky-500"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:your-email@example.com"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-sky-500"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}