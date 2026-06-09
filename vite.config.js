import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  root: '.',
  publicDir: 'public',
  server: {
    port: 5175,
    strictPort: true,
    open: false,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
});
