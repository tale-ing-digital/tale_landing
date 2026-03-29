import { useState } from 'react';
import { APPS } from '../config/apps';
import { AppWidget } from './AppWidget';
import { HeroSection } from './HeroSection';

export function Portal({ onAppSelect }) {
  const [activeApp, setActiveApp] = useState(null);

  const handleAppAction = (appId, action) => {
    if (action === 'open' || action === 'details') {
      onAppSelect(appId);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 relative z-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Apps Grid */}
      <div className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm rounded-[3rem] p-8 lg:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-max">
          {APPS.map((app) => (
            <AppWidget
              key={app.id}
              app={app}
              isActive={activeApp === app.id}
              onAppAction={handleAppAction}
            />
          ))}

          {/* Solicitar nuevo acceso card */}
          <div className="group flex flex-col items-center justify-center glass dark:glass-dark rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-cyan/40 dark:hover:border-cyan/40 hover:bg-white dark:hover:bg-slate-700/80 transition-all duration-300 min-h-96 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <span className="text-3xl font-light text-slate-400 group-hover:text-cyan">+</span>
            </div>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-cyan tracking-wide">
              Solicitar nuevo acceso
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
