import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md py-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
          © 2026 TALE Corp. Documento de uso interno confidencial.
        </p>

        <div className="flex items-center gap-6">
          <button className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-cyan font-medium transition-colors">
            Soporte IT
          </button>
          <button className="text-xs text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-cyan font-medium transition-colors">
            Políticas de Seguridad
          </button>
          <span className="flex items-center gap-1.5 text-xs font-bold text-cyan bg-cyan/10 dark:bg-cyan/20 px-3 py-1.5 rounded-full border border-cyan/30 dark:border-cyan/50">
            <Shield size={12} /> Red Segura Activa
          </span>
        </div>
      </div>
    </footer>
  );
}
