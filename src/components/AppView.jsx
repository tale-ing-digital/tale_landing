import { X, ArrowLeft, ShieldAlert, ExternalLink } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { APPS } from '../config/apps';
import { Button } from './Button';

export function AppView({ appId, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const app = APPS.find((a) => a.id === appId);

  const isInternalOrInsecure = useMemo(() => {
    if (!app?.url) return false;
    
    // Check for internal IP ranges
    const isInternalIP = app.url.includes('192.168.') || 
                         app.url.includes('10.') || 
                         app.url.includes('127.0.0.1') || 
                         app.url.includes('localhost');
                         
    // Check for Mixed Content (HTTPS page trying to load HTTP iframe)
    const isMixedContent = window.location.protocol === 'https:' && app.url.startsWith('http://');
    
    return isInternalIP || isMixedContent;
  }, [app?.url]);

  useEffect(() => {
    setIsLoading(true); // Reset loading state on app change
    
    if (app?.url && !isInternalOrInsecure) {
      // Simulate loading only if there's a URL and it's not a fallback case
      // Use a fixed 2s fallback in case onLoad doesn't fire (CORS/Network)
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [appId, app?.url, isInternalOrInsecure]);

  if (!app) {
    return (
      <div className="fixed inset-0 bg-red-50 dark:bg-red-950 flex items-center justify-center z-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-2">
            Aplicación no encontrada
          </h2>
          <p className="text-red-700 dark:text-red-300 mb-6">La aplicación "{appId}" no existe.</p>
          <Button onClick={onClose}>Volver al portal</Button>
        </div>
      </div>
    );
  }

  if (!app.url) {
    return (
      <div className="fixed inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-md z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 max-w-md w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20"></div>
          
          <div className="w-20 h-20 rounded-3xl bg-cyan/10 flex items-center justify-center mx-auto mb-6 text-cyan border border-cyan/20">
            {app.icon && <app.icon size={40} />}
          </div>
          
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-3">
            {app.name}
          </h2>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            Próximamente
          </span>
          
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
            Esta plataforma se encuentra actualmente en fase de despliegue final. Estará disponible para su uso en producción muy pronto.
          </p>
          
          <Button variant="primary" className="w-full" onClick={onClose}>
            Entendido, volver al portal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex flex-col">
      {/* App Header Bar */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-cyan"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium hidden md:inline">Volver</span>
          </button>

          <div className="hidden md:flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4">
            <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center">
              {app.icon && <app.icon size={16} className="text-cyan" />}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy dark:text-white">{app.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{app.category}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-red-400"
        >
          <X size={24} />
        </button>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-slate-50 dark:bg-slate-900/40">
        {isLoading && !isInternalOrInsecure && (
          <div className="absolute inset-0 bg-white dark:bg-slate-800 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 border-t-cyan animate-spin"></div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Iniciando {app.name}...
              </p>
            </div>
          </div>
        )}

        {isInternalOrInsecure ? (
          <div className="max-w-xl w-full mx-4 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20"></div>
            
            <div className="w-20 h-20 rounded-3xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mx-auto mb-8 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
              <ShieldAlert size={40} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">
              Vista previa no disponible en la web pública
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Esta aplicación está alojada en la <strong>Red Interna de Tale</strong>. 
              Por políticas de seguridad del navegador (HTTPS/HTTP), no es posible mostrarla embebida aquí.
              <br />
              <span className="text-sm font-medium text-slate-500 mt-2 block">
                Acceso disponible solo mediante VPN o red local corporativa.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="primary" className="flex items-center gap-2 px-8">
                  <ExternalLink size={18} />
                  Abrir Aplicación
                </Button>
              </a>
              <Button variant="secondary" onClick={onClose}>
                Volver al Portal
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src={app.url}
            title={app.name}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    </div>
  );
}
