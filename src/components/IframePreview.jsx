import { Shield, TerminalSquare } from 'lucide-react';

export function IframePreview({ app, isActive }) {
  const Icon = app.icon;

  return (
    <div
      className={`relative w-full h-48 rounded-t-3xl overflow-hidden transition-all duration-500 ${
        isActive ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900/40'
      }`}
    >
      {/* Top Secure Bar */}
      <div className="absolute top-0 left-0 w-full h-10 px-4 flex items-center justify-between bg-slate-100/80 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 z-20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase truncate max-w-[120px]">
            {app.id}.tale.corp
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white/50 dark:bg-slate-700/50 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-600">
            <span className="relative flex h-1.5 w-1.5">
              {app.status === 'online' && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-50"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                  app.status === 'online' ? 'bg-cyan' : 'bg-orange-400'
                }`}
              ></span>
            </span>
            <span className="text-[9px] text-slate-600 dark:text-slate-300 font-black tracking-tighter">{app.env}</span>
          </div>
        </div>
      </div>

      {/* Abstract Mockup Content */}
      <div className="absolute inset-0 pt-10 p-4 flex flex-col justify-center items-center">
        {isActive ? (
          <div className="flex flex-col items-center gap-3 animate-pulse">
            <TerminalSquare size={32} className="text-cyan" strokeWidth={1.5} />
            <div className="text-xs text-navy dark:text-cyan font-medium uppercase tracking-widest">
              Iniciando entorno seguro...
            </div>
            <div className="w-32 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mt-2">
              <div className="h-full w-1/2 bg-cyan rounded-full animate-pulse"></div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full border border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-700/30 rounded-lg block opacity-50 hover:opacity-100 transition-opacity duration-500 shadow-inner">
            {/* Minimalist wireframe representing the app */}
            <div className="absolute top-4 left-4 right-4 h-5 bg-slate-100 dark:bg-slate-600 rounded-md"></div>
            <div className="absolute top-14 left-4 w-1/3 bottom-4 bg-slate-100/50 dark:bg-slate-600/50 rounded-md"></div>
            <div className="absolute top-14 right-4 w-1/2 h-1/2 bg-slate-100/50 dark:bg-slate-600/50 rounded-md"></div>
            <div className="absolute bottom-4 right-4 w-1/2 h-8 bg-cyan/5 dark:bg-cyan/10 rounded-md"></div>
            <Icon size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 dark:text-slate-600" strokeWidth={1} />
          </div>
        )}
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-100/30 dark:from-slate-800/30 to-transparent"></div>
    </div>
  );
}
