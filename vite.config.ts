import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
