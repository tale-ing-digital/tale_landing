import { useState, useEffect } from 'react';
import { broadcastResponseToMainFrame } from '@azure/msal-browser/redirect-bridge';
import { Header } from './components/Header';
import { Portal } from './components/Portal';
import { Footer } from './components/Footer';
import './styles/globals.css';

const AUTH_REDIRECT_PATH = '/auth/redirect';

function getPathname() {
  if (typeof window === 'undefined') return '/';

  return window.location.pathname.replace(/\/$/, '') || '/';
}

function AuthRedirectCallback() {
  useEffect(() => {
    let closed = false;

    const closePopup = () => {
      if (closed) return;
      closed = true;

      try {
        window.close();
      } catch {
        // ignore
      }
    };

    broadcastResponseToMainFrame().finally(closePopup).catch(() => {
      closePopup();
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy text-white px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-cyan/15 border border-cyan/30 flex items-center justify-center">
          <span className="text-cyan text-2xl font-bold">T</span>
        </div>
        <h1 className="text-2xl font-semibold mb-3">Procesando autenticación</h1>
        <p className="text-white/70 text-sm leading-relaxed">
          Estamos recibiendo la respuesta de Microsoft y devolviéndola al portal principal.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const pathname = getPathname();
  const isAuthRedirect = pathname === AUTH_REDIRECT_PATH;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme-mode');
    if (stored) return stored === 'dark';
    
    // Default to LIGHT mode for new users, ignoring system preference as requested
    return false;
  });

  useEffect(() => {
    // Update localStorage and document class
    localStorage.setItem('theme-mode', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isAuthRedirect) {
    return <AuthRedirectCallback />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}
      style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      {/* Decorative background blobs */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan/10 blur-3xl pointer-events-none dark:bg-cyan/5"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-navy/5 blur-3xl pointer-events-none dark:bg-slate-900/30"></div>

      {/* Header */}
      <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Portal />
        <Footer />
      </div>

      {/* Status indicator (optional) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}} />
    </div>
  );
}
