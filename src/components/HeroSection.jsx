export function HeroSection() {
  return (
    <div className="max-w-3xl mb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
        <span className="text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400 uppercase">
          Sistema Operativo Conectado
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-navy dark:text-white">
        Accesos Internos <br className="hidden md:block" />
        <span className="gradient-text">Corporativos</span>
      </h2>

      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl">
        Plataforma segura y centralizada para la gestión operativa. Acceso rápido a sistemas de
        información, análisis y herramientas de TALE.
      </p>
    </div>
  );
}
