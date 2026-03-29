export function Button({ children, variant = 'primary', onClick, className = '', disabled = false }) {
  const baseStyle =
    'btn-base px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-cyan/50 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-cyan text-white hover:bg-cyan-700 shadow-md shadow-cyan/20 hover:shadow-lg hover:shadow-cyan/40 dark:hover:bg-cyan-600',
    secondary:
      'bg-white/70 border border-slate-200 text-navy hover:bg-white hover:border-cyan/50 dark:bg-slate-700/50 dark:border-slate-600 dark:text-slate-100 dark:hover:border-cyan/40',
    ghost:
      'bg-transparent text-slate-600 hover:text-navy hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-cyan dark:hover:bg-slate-900/50',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
