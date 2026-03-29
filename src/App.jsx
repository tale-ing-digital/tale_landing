import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Portal } from './components/Portal';
import { AppView } from './components/AppView';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme-mode');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    // Update localStorage and document class
    localStorage.setItem('theme-mode', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCloseApp = () => {
    setSelectedApp(null);
  };

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
        {selectedApp ? (
          <AppView appId={selectedApp} onClose={handleCloseApp} />
        ) : (
          <>
            <Portal onAppSelect={setSelectedApp} />
            <Footer />
          </>
        )}
      </div>

      {/* Status indicator (optional) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}} />
    </div>
  );
}
