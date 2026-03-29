export function Badge({ children, variant = 'default' }) {
  const variants = {
    default:
      'bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300',
    cyan: 'bg-cyan-100 border-cyan-200 text-cyan-700 dark:bg-cyan/20 dark:border-cyan/40 dark:text-cyan-300',
    warning:
      'bg-orange-100 border-orange-200 text-orange-600 dark:bg-orange/20 dark:border-orange/40 dark:text-orange-400',
  };

  return (
    <span
      className={`inline-flex px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
