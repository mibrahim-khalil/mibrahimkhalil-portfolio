export default function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  const variants = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    dark: 'bg-slate-950 text-white dark:bg-white dark:text-slate-950',
    outline:
      'border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10',
  }

  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}