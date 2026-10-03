import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/blend-events-marketing/' : '/',
  plugins: [react()],
  server: { port: 5199, strictPort: true, host: true },
}));
