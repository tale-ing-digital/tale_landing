import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';
import { IframePreview } from './IframePreview';

export function AppWidget({ app }) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const Icon = app.icon;
  const hasUrl = Boolean(app.url);

  const handleOpen = () => {
    if (!hasUrl) {
      setShowComingSoon(true);
    }
  };

  return (
    <>
      <div className="group relative flex flex-col rounded-3xl transition-all duration-500 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 hover:border-slate-300 dark:glass-dark dark:hover:bg-slate-700/80">
        <IframePreview app={app} />

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-cyan group-hover:border-cyan/20 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-500 dark:group-hover:text-cyan">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy dark:text-white tracking-tight">
                  {app.name}
                </h3>
                <div className="mt-2">
                  <Badge variant={app.status === 'online' ? 'cyan' : 'warning'}>
                    {app.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light flex-1 mb-6">
            {app.description}
          </p>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            {hasUrl ? (
              <>
                <Button
                  href={app.url}
                  variant="primary"
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  Abrir plataforma
                  <ExternalLink size={16} />
                </Button>
                <Button
                  href={app.url}
                  variant="ghost"
                  className="px-3 rounded-xl"
                  aria-label={`Abrir ${app.name} en nueva pestaña`}
                >
                  <ExternalLink size={20} />
                </Button>
              </>
            ) : (
              <Button variant="primary" className="flex-1" onClick={handleOpen}>
                Próximamente
              </Button>
            )}
          </div>
        </div>
      </div>

      {showComingSoon && (
        <div className="fixed inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 max-w-md w-full text-center relative overflow-hidden">
            <button
              type="button"
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center text-slate-500"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20" />

            <div className="w-20 h-20 rounded-3xl bg-cyan/10 flex items-center justify-center mx-auto mb-6 text-cyan border border-cyan/20">
              <Icon size={40} />
            </div>

            <h2 className="text-2xl font-bold text-navy dark:text-white mb-3">{app.name}</h2>

            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
              Próximamente
            </span>

            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
              Esta plataforma se encuentra actualmente en fase de despliegue final. Estará disponible
              para su uso en producción muy pronto.
            </p>

            <Button variant="primary" className="w-full" onClick={() => setShowComingSoon(false)}>
              Entendido
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
