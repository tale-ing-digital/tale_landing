import { Maximize2 } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';
import { IframePreview } from './IframePreview';

export function AppWidget({ app, isActive, onAppAction }) {
  const Icon = app.icon;

  return (
    <div
      onClick={() => onAppAction(app.id, 'open')}
      className={`group relative flex flex-col rounded-3xl transition-all duration-500 cursor-pointer ${
        isActive
          ? 'bg-white shadow-2xl shadow-cyan/10 ring-1 ring-cyan/20 transform -translate-y-1 scale-105 dark:bg-slate-800 dark:ring-cyan/50'
          : 'glass dark:glass-dark hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white dark:hover:bg-slate-700/80 hover:-translate-y-1 hover:border-slate-300'
      }`}
    >
      <IframePreview app={app} isActive={isActive} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-cyan/10 text-cyan dark:bg-cyan/20'
                  : 'bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-cyan group-hover:border-cyan/20 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-500 dark:group-hover:text-cyan'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
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
          <Button
            variant={isActive ? 'secondary' : 'primary'}
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAppAction(app.id, 'open');
            }}
          >
            {isActive ? 'Cerrar' : 'Abrir plataforma'}
          </Button>
          <Button
            variant="ghost"
            className="px-3 rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
              onAppAction(app.id, 'details');
            }}
          >
            <Maximize2 size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
