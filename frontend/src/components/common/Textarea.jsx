export default function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full px-5 py-4 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 outline-none focus:border-sky-500 resize-none ${className}`}
      {...props}
    />
  )
}