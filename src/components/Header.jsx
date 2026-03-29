import { Search, LayoutGrid, Menu, Moon, Sun, Shield } from 'lucide-react';

export function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white dark:border-slate-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-8">
          <div className="relative h-20 flex items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-5 bg-cyan rounded-b-sm shadow-lg shadow-cyan/40"></div>
            <span className="font-bold text-2xl tracking-widest text-navy dark:text-cyan mt-2">
              TALE
            </span>
          </div>

          <div className="hidden md:flex flex-col border-l border-slate-200 dark:border-slate-700 pl-6 h-10 justify-center">
            <h1 className="text-sm font-bold tracking-wide text-navy dark:text-white">
              Intranet Portal
            </h1>
            <span className="text-xs text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5">
              Centro de Apps
            </span>
          </div>
        </div>

        {/* Search & Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 rounded-full px-4 py-2.5 focus-within:bg-white dark:focus-within:bg-slate-800 focus-within:ring-2 focus-within:ring-cyan/20 transition-all">
            <Search size={16} className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar aplicación..."
              className="bg-transparent border-none outline-none text-sm text-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 w-56 font-light"
            />
          </div>

          <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-500 dark:text-slate-400 hover:text-cyan dark:hover:text-cyan">
            <LayoutGrid size={18} />
          </button>

          <button
            onClick={onToggleDarkMode}
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-cyan"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="w-10 h-10 rounded-full bg-navy dark:bg-cyan border border-navy dark:border-cyan flex items-center justify-center text-white dark:text-navy font-bold text-sm shadow-md">
            JS
          </div>

          <button className="md:hidden p-2 text-slate-600 dark:text-slate-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
